from flask import Flask
from flask_cors import CORS

# Import blueprints
from events import events
from friends import friends
from login import login_bp
from register import register_bp

app = Flask(__name__)
CORS(app)

# Register all blueprints
app.register_blueprint(events)
app.register_blueprint(friends)
app.register_blueprint(login_bp)
app.register_blueprint(register_bp)

@app.get("/")
def home():
    return {"status": "backend running"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
