```markdown
# Campus Connect

Campus Connect is a small web application designed for UIC students.
Its purpose is to help students find campus events, see who is attending, and join events easily.
This project was created for CS 351: Advanced Data Structures (Full Stack Group Project).

Group members: Om P, Mandar P, Malak R, Jovan L
Track: Track 2 – Technology for Public Goods

---

## 1. Project Overview

Students often miss events happening around campus because the information is scattered.
Campus Connect solves this by placing all upcoming events in a single location.

Users can:
- Create an account
- Log in
- Browse events
- Search and filter events
- Mark attendance
- View who else is attending

The goal is to make campus involvement simple and accessible for UIC students.

---

## 2. Tech Stack

Frontend: React  
Backend: Flask (Python)  
Storage: JSON files  
Communication between frontend and backend uses the Fetch API (GET and POST requests).

General flow of data:

```text
React (frontend)
   ↓ Fetch (GET / POST)
Flask routes in app.py (backend)
   ↓
JSON files for users and events
   ↓
Response returned back to React
```

---

## 3. Advanced Data Structures

This project uses two advanced data structures:
one from the first half of the course and one from the second half.

### Skip List

Used for:
- Fast, ordered lookup of users during login or account creation.

Reason for choosing it:
- Expected O(log n) search time
- More efficient than scanning a normal linked list
- Easier to implement manually than a self-balancing tree
- Good when many lookups happen repeatedly

The skip list keeps users sorted by email or username.

---

### Bloom Filter

Used for:
- Fast membership tests before doing a skip list search.

Reason for choosing it:
- O(1) lookup time
- Very low memory usage
- Helps skip unnecessary skip list searches
- Can give false positives but never false negatives

If the Bloom filter says a user is not present, the backend can skip further checks.

---

## 4. Main Features

The main features currently implemented include:
- Search, filter, and sort events
- Browse all upcoming events
- Create an account with major and hashed password
- Log in with password verification
- Join events using an “I’m Going” feature
- View attendees for any event

---

## 5. How to Run the Project

These steps allow the project to run on any computer with Python and Node.js installed.

Clone the repository:

```text
git clone https://github.com/malakramahi1/CS351-FullStack-Group.git
cd CS351-FullStack-Group
```

### Running the Backend:
```text
cd backend
pip install -r requirements.txt
python app.py
```

### Running the Frontend:
```text
cd frontend
npm install
npm start
```

---

## 6. Repository Structure

```text
CS351-FullStack-Group/
│
├── backend/
│   ├── app.py
│   ├── events.py
│   ├── friends.py
│   ├── login.py
│   ├── register.py
│   ├── users.json
│   ├── events_data.json
│   ├── friends_data.json
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── allMilestones/
├── demo_video/
├── figma_wireframe/
└── README.md
```

---

## 7. Demo Video

Demo Video Link: 

---
```
