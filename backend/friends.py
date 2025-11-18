from flask import Blueprint, request, jsonify

friends = Blueprint("friends", __name__)

FRIENDS = {}

@friends.get("/friends")
def getFriends():
    return jsonify(FRIENDS)

@friends.post("/friends")
def addFriend():
    data = request.json
    user = data["user"]
    friend = data["friend"]
    FRIENDS.setdefault(user, []).append(friend)
    return jsonify({"status": "friend added"})
