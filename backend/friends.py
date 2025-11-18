from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from typing import Any, Dict, List

from flask import Blueprint, jsonify, request

friends = Blueprint("friends", __name__)

dataPath = os.path.join(os.path.dirname(__file__), "friends_data.json")

def _utcTs() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")

def _defaultStore() -> Dict[str, Dict[str, List[Dict[str, Any]]]]:
    return {"friendsByUser": {}, "attendingByEvent": {}}

def _loadStore() -> Dict[str, Dict[str, List[Dict[str, Any]]]]:
    if not os.path.exists(dataPath):
        return _defaultStore()
    try:
        with open(dataPath, "r", encoding="utf-8") as handle:
            data = json.load(handle)
            if isinstance(data, dict):
                data.setdefault("friendsByUser", {})
                data.setdefault("attendingByEvent", {})
                return data
    except json.JSONDecodeError:
        pass
    return _defaultStore()

def _saveStore(payload: Dict[str, Dict[str, List[Dict[str, Any]]]]) -> None:
    with open(dataPath, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, indent=2)

def _normalizeFriend(body: Dict[str, Any]) -> Dict[str, Any]:
    friendId = (body.get("friendId") or body.get("id") or "").strip()
    displayName = (body.get("displayName") or body.get("name") or friendId).strip()
    if not friendId:
        raise ValueError("friendId is required")
    friend = {
        "id": friendId,
        "displayName": displayName or friendId,
        "addedAt": body.get("addedAt") or _utcTs(),
    }
    if "note" in body:
        friend["note"] = body["note"]
    if "mutualEventId" in body:
        friend["mutualEventId"] = body["mutualEventId"]
    return friend

def _normalizeAttendee(body: Dict[str, Any]) -> Dict[str, Any]:
    userId = (body.get("userId") or body.get("id") or "").strip()
    displayName = (body.get("displayName") or body.get("name") or userId).strip()
    if not userId:
        raise ValueError("userId is required")
    attendee = {
        "userId": userId,
        "displayName": displayName or userId,
        "joinedAt": body.get("joinedAt") or _utcTs(),
    }
    if "message" in body:
        attendee["message"] = body["message"]
    return attendee
@friends.get("/friends/<userId>")
def listFriends(userId: str):
    store = _loadStore()
    return jsonify({"friends": store["friendsByUser"].get(userId, [])})

@friends.post("/friends/<userId>")
def addFriend(userId: str):
    body = request.get_json(silent=True) or {}
    try:
        friend = _normalizeFriend(body)
    except ValueError as error:
        return jsonify({"error": str(error)}), 400

    store = _loadStore()
    friendsList = store["friendsByUser"].setdefault(userId, [])
    if not any(f["id"] == friend["id"] for f in friendsList):
        friendsList.append(friend)
        _saveStore(store)

    return jsonify({"friends": friendsList}), 201

@friends.get("/events/<eventId>/attendees")
def eventAttendees(eventId: str):
    store = _loadStore()
    attendees = store["attendingByEvent"].get(eventId, [])
    return jsonify({"attendees": attendees})

@friends.post("/events/<eventId>/attendees")
def joinEvent(eventId: str):
    body = request.get_json(silent=True) or {}
    try:
        attendee = _normalizeAttendee(body)
    except ValueError as error:
        return jsonify({"error": str(error)}), 400

    store = _loadStore()
    attendees = store["attendingByEvent"].setdefault(eventId, [])
    if not any(a["userId"] == attendee["userId"] for a in attendees):
        attendees.append(attendee)
        _saveStore(store)

    return jsonify({"attendees": attendees}), 201
