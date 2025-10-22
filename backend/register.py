# register functionality

# imported libraries
import json
import os
import re
import secrets
import uuid
import datetime
from dataclasses import dataclass, asdict
from typing import List, Any, Optional
from __future__ import annotations

# imported Flask libraries
from flask import Flask, jsonify, request
from werkzeug.security import generate_password_hash



class _Node: # node helper class.
    __slots__ = ("key", "val", "next")  # list of forward pointers
    def __init__(self, height: int, k: str, v: Any):
        self.key, self.val = k, v # key value 
        self.next: List[Optional["_Node"]] = [None] * height # forward pointer holds

class SkipList: # skiplist class.
    def __init__(self, prob: float = 0.25, max_height: int = 20): #
        self.p = prob # holds the probability 
        self.max_h = max_height # max number of levels for the list 
        self.h = 1 # top level 
        self.head = _Node(self.max_h, "", None) # head node
        self.n = 0

    def __len__(self) -> int:  # returns length of node 
        return self.n

    def _randomize(self) -> int: # randomize function for skip list 
        bits = secrets.randbits(self.max_h) # random bits call
        levels, thr = 1, int(self.p * (1 << 16)) # holds level and threshold 
        while (levels < self.max_h) and (secrets.randbits(16) < thr) and (bits & 1):
            levels += 1 
            bits >>= 1
        return levels

    def _predecessors(self, key: str) -> List[_Node]: # holds the predecessors for each node 
        pr = [None] * self.max_h 
        x = self.head
        for levels in range(self.h - 1, -1, -1):
            while x.next[levels] and x.next[levels].key < key:
                x = x.next[levels]
            pr[levels] = x
        return pr

    def getVal(self, key: str) -> Optional[Any]: # find value for the key 
        x = self.head # holds the head of the node 
        for levels in range(self.h - 1, -1, -1): # for each level, 
            while x.next[levels] and x.next[levels].key < key: # move to the next level if found 
                x = x.next[levels] 
        x = x.next[0]
        if x and (x.key == key):
            return x.val
        else:
            return None

    def insert(self, key: str, v: Any) -> bool: # insert a key/value
        pr = self._predecessors(key) # hold predecessors 
        curr = pr[0].next[0] # current node 
        if curr and curr.key == key: # if there is a duplicate, return False
            return False

        height = self._randomize() # holds the height 
        if height > self.h: # if the randomized height is greater than node height 
            for i in range(self.h, height):
                pr[i] = self.head # add node to predecessors 
            self.h = height

        node = _Node(height, key, v) # make a new mode 
        for i in range(height): # for every index in the range of heights 
            node.next[i] = pr[i].next[i] # add next nodes to predecessors 
            pr[i].next[i] = node # move to next node 
        self.n += 1
        return True


@dataclass
class Account: # account class
    uid: str
    username: str
    email: str
    passHash: str
    creation: str  


# holds for username and email validity 
userBounds = re.compile(r"^[A-Za-z0-9_]{3,16}$")
emailBounds    = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class AccountIndex: # holds the indexing for each account 
    def __init__(self, path: Optional[str] = "users.json"):
        self._id: dict[str, Account] = {} # main dictionary of accounts 
        self.emailInd = SkipList() # email indexes 
        self.nameInd  = SkipList() # username 
        self._path = path
        if path and os.path.exists(path): # if the path exists, then load in
            self._load()

    def _save(self) -> None: # saves account data as a json file 
        if not self._path: 
            return
        with open(self._path, "w", encoding="utf-8") as f:
            json.dump({uid: asdict(v) for uid, v in self._id.items()}, f) # dump info to json

    def _load(self) -> None: # loads account from a disk
        try:
            with open(self._path, "r", encoding="utf-8") as f:
                blob = json.load(f) # load json items 
            for uid, rec in blob.items(): # for every item in the json, implement to a new Account node 
                if "creation" not in rec and "created_at" in rec: # used for overflow check instances
                    rec["creation"] = rec.pop("created_at")
                acct = Account(**rec) # new account node 
                self._id[uid] = acct # hold the UID
                self.emailInd.insert(acct.email.lower(), uid) # insert new email to account node 
                self.nameInd.insert(acct.username.lower(), uid) # insert name to account node 
        except Exception: # if load does not work, or has errors, clear up the list
            self._id.clear()
            self.emailInd = SkipList()
            self.nameInd = SkipList()

    def emailCheck(self, email: str) -> bool: # checks if the email is already taken
        return self.emailInd.getVal(email.lower()) is not None

    def userCheck(self, username: str) -> bool: # checks if the username is already taken
        return self.nameInd.getVal(username.lower()) is not None

    def create(self, username: str, email: str, password: str) -> Account: # create an account 
        user = username.strip()
        mail  = email.strip()

        if self.userCheck(user):  raise ValueError("Username in use") # if the username is taken, print an error
        if self.emailCheck(mail):  raise ValueError("Email in use") # if the email is taken, print an error 

        uid = uuid.uuid4().hex # makes a UUID for the account 
        currTime = datetime.datetime.now(datetime.UTC) + "Z" # holds the current time of account registration date
        acc = Account( # account node, where hash is used for password 
            uid=uid,
            username=user,
            email=mail,
            passHash=generate_password_hash(password, method="scrypt"), # werkzeug used to hash the password 
            creation=currTime,
        )
        self._id[uid] = acc 
        assert self.nameInd.insert(user.lower(), uid)
        assert self.emailInd.insert(mail.lower(), uid)
        self._save()
        return acc

# flask section
app = Flask(__name__) # creation for flask webapp
DB = AccountIndex(os.getenv("USER_STORE_PATH", "users.json")) # initialize for memory db

@app.after_request
def cors(resp): # frontend test 
    origin = request.headers.get("Origin", "*")
    resp.headers["Access-Control-Allow-Origin"] = origin
    resp.headers["Vary"] = "Origin"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    resp.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    return resp

def _jsonCheck(payload: dict) -> dict: # checks if the json file is valid 
    user = (payload.get("username") or "").strip()
    email = (payload.get("email") or "").strip()
    password = payload.get("password") or ""
    errMessage = {}
    if not userBounds.fullmatch(user): 
        errMessage["username"] = "3-16 characters only: letters, numbers, _"
    if not emailBounds.fullmatch(email): 
        errMessage["email"] = "Email is invalid"
    if len(password) < 8: 
        errMessage["password"] = "Passwords must be atleast 8 characters"
    return errMessage   

@app.route("/api/register", methods=["POST", "OPTIONS"]) # routes for registration tab
def register(): # registration
    if request.method == "OPTIONS": # 
        return ("", 204)

    body = request.get_json(silent=True) or {} # if there is no json then empty
    errors = _jsonCheck(body)
    if errors:
        return jsonify({"success": False, "errors": errors}), 400 # returns a 400 bad reequest if theres errors

    try:
        acc = DB.create(body["username"], body["email"], body["password"])
    except ValueError as exception: # if theres an error, output which error in json
        msg = str(exception)
        field = "username" if msg == "Username in use" else "email"
        return jsonify({"success": False, "errors": {field: msg}}), 409


    return jsonify({ # outputs data to json
        "success": True, 
        "data": {
            "user": {
                "id": acc.uid,
                "username": acc.username,
                "email": acc.email,
                "createdAt": acc.creation
            }
        }
    }), 201

@app.get("/_debug/users")
def getUsers(): # gets all users 
    return jsonify([asdict(act) for act in DB._id.values()])

if __name__ == "__main__": # main for running on port 5001 
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5001)), debug=True)
