# backend/login.py
import os, json
from typing import Optional, Dict, Any
from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash

auth_bp = Blueprint("auth", __name__)

# Reuse the same users.json path as register.py
USER_STORE_PATH = os.environ.get(
    "USER_STORE_PATH",
    os.path.join(os.path.dirname(__file__), "users.json")
)

def _load_user_store() -> Dict[str, Any]:
    if not os.path.exists(USER_STORE_PATH):
        return {}
    with open(USER_STORE_PATH, "r", encoding="utf-8") as f:
        try:
            return json.load(f) or {}
        except json.JSONDecodeError:
            return {}

def _iter_accounts(store: Dict[str, Any]):
    """
    register.py serializes an AccountIndex with an '_id' dict of uid -> account.
    Fall back gracefully if the structure changes.
    """
    candidates = store.get("_id") or store.get("users") or store
    if isinstance(candidates, dict):
        for acc in candidates.values():
            if isinstance(acc, dict):
                yield acc

def _find_account(email: str = "", username: str = "") -> Optional[Dict[str, Any]]:
    e = (email or "").strip().lower()
    u = (username or "").strip().lower()
    if not e and not u:
        return None

    store = _load_user_store()
    for acc in _iter_accounts(store):
        acc_email = (acc.get("email") or "").strip().lower()
        acc_user  = (acc.get("username") or "").strip().lower()
        if (e and acc_email == e) or (u and acc_user == u):
            return acc
    return None

@auth_bp.route("/api/login", methods=["POST", "OPTIONS"])
def login():
    # CORS preflight handled by your app's after_request; respond OK here.
    if request.method == "OPTIONS":
        return ("", 204)

    body = request.get_json(silent=True) or {}
    email = (body.get("email") or "").strip()
    username = (body.get("username") or "").strip()  # optional
    password = body.get("password") or ""

    # Basic input checks (mirror register.py style)
    if not password:
        return jsonify({"success": False, "errors": {"password": "Password is required"}}), 400
    if not email and not username:
        return jsonify({"success": False, "errors": {"email": "Email or username is required"}}), 400

    acc = _find_account(email=email, username=username)
    if not acc or not check_password_hash(acc.get("passHash", ""), password):
        # Do not reveal which field failed
        return jsonify({"success": False, "errors": {"credentials": "Invalid email/username or password"}}), 401

    # Success: match the payload shape from /api/register
    return jsonify({
        "success": True,
        "data": {
            "user": {
                "id": acc.get("uid"),
                "username": acc.get("username"),
                "email": acc.get("email"),
                "createdAt": acc.get("creation")
            }
        }
    }), 200
