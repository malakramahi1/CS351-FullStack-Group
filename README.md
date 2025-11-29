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
Users can create an account, log in, browse events, filter and search for events, mark attendance,  
and view who else is planning to attend.

The goal is to make campus involvement simpler and more accessible for UIC students.

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

---


## 3. Advanced Data Structures

The project uses two advanced data structures, one from the first half of the course
and one from the second half.

Skip List
Used for:
    Fast, ordered lookup of users during login or account creation.
Reason for choosing it:
    Skip lists provide expected O(log n) search time.
    They are more efficient than scanning a normal linked list.
    They are easier to implement manually compared to a self-balancing tree.
    Works well when many user lookups occur repeatedly.

The skip list stores users in sorted order by email or username, which speeds up login operations.

Bloom Filter
Used for:
    Fast membership tests to check whether a user might exist before doing a skip list search.
Reason for choosing it:
    O(1) lookup time.
    Uses very little memory.
    Helps skip unnecessary skip list searches by ruling out “definitely not present” emails.
    Improves login performance as the number of users grows.
    A Bloom filter may give false positives but never false negatives.
If the filter says a user is not present, the backend can immediately stop.

---

## 4. Main Features

The main features currently implemented include:
    Search, filter, and sort for events.
    Browsing all upcoming campus events.
    Creating an account with major and a hashed password.
    Logging in with password verification.
    Joining events using an “I’m Going” style button.
    Viewing the list of attendees for each event.

These features are demonstrated in the final slides and will appear in the demo video.

---
## 5. How to Run the Project

The following steps allow the project to run on any computer
with Python and Node.js installed.

Clone the repository;
git clone https://github.com/malakramahi1/CS351-FullStack-Group.git
cd CS351-FullStack-Group

Running the Backend:
cd backend
pip install -r requirements.txt
python app.py

Running the Frontend:
cd frontend
npm install
npm start

---

## 6. Repository Structure
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

---

## 7. Demo Video 
Demo Video Link: 
---


