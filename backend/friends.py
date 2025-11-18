from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

matches = [] 

@app.route('/api/matches', methods=['POST'])
def addMatch():
    data = request.get_json()
    
    # basic validation
    if not data.get("eventId"):
        return jsonify({"error": "eventId required"}), 400
    
    matches.append(data)
    return jsonify({"message": "saved!", "match": data}), 201

@app.route('/api/matches', methods=['GET'])
def getMatches():
    return jsonify(matches), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)
