# events.py 
# imported libraries 
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

# Flask app
app = Flask(__name__)
CORS(app)

eventsData = "events_data.json" # holds event data.

# holds a way to load events
def loadEvents():
    if os.path.exists(eventsData):
        try:
            with open(eventsData, "r") as file:
                return json.load(file)
        except json.JSONDecodeError:
            return []
    return []

# saves events 
def saveEvents(events):
    with open(eventsData, "w") as file:
        json.dump(events, file, indent=2)


events = loadEvents()


@app.get("/events")
def getEvents():
    return jsonify(events)


@app.post("/events")
def addEvents():
    newEvent = request.json
    newEvent["id"] = (max([e["id"] for e in events], default=0) + 1)
    events.append(newEvent)
    saveEvents(events)
    return jsonify(newEvent), 201


@app.delete("/events/<int:event_id>")
def deleteEvents(event_id):
    global events
    events = [e for e in events if e["id"] != event_id]
    saveEvents(events)
    return jsonify({"success": True}), 200


if __name__ == "__main__":
    app.run(debug=True)
