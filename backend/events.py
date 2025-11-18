from flask import Blueprint, request, jsonify
import json, os

events = Blueprint("events", __name__)

eventsData = os.path.join(os.path.dirname(__file__), "events_data.json")

def loadEvents():
    if not os.path.exists(eventsData):
        return []
    with open(eventsData, "r") as f:
        return json.load(f)

def saveEvents(data):
    with open(eventsData, "w") as f:
        json.dump(data, f, indent=4)

@events.get("/events")
def getEvents():
    return jsonify(loadEvents())

@events.post("/events")
def createEvent():
    allEvents = loadEvents()
    new = request.json
    allEvents.append(new)
    saveEvents(allEvents)
    return jsonify({"status": "ok"}), 201
