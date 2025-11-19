from flask import Blueprint, request, jsonify
import json
import os
from itertools import count

events = Blueprint("events", __name__, url_prefix="/api")

eventsData = os.path.join(os.path.dirname(__file__), "events_data.json")

def loadEvents():
    if not os.path.exists(eventsData):
        return []
    with open(eventsData, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def saveEvents(data):
    with open(eventsData, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

def _sorted_events(data):
    def sort_key(e):
        date = e.get("date") or ""
        time = e.get("time") or "00:00"
        return f"{date}T{time}"
    return sorted(data, key=sort_key)

def _next_id(events_list):
    existing = {item.get("id") for item in events_list if isinstance(item.get("id"), int)}
    for candidate in count(1):
        if candidate not in existing:
            return candidate

@events.get("/events")
def getEvents():
    return jsonify(_sorted_events(loadEvents()))

@events.get("/events/<int:event_id>")
def getEventById(event_id: int):
    for event in loadEvents():
        if event.get("id") == event_id:
            return jsonify(event)
    return jsonify({"error": "Event not found"}), 404

@events.post("/events")
def createEvent():
    allEvents = loadEvents()
    new = request.get_json(silent=True) or {}
    if "id" not in new or not isinstance(new["id"], int):
        new["id"] = _next_id(allEvents)
    allEvents.append(new)
    saveEvents(allEvents)
    return jsonify({"status": "ok", "id": new["id"]}), 201
