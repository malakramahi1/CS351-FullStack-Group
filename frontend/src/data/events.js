export const events = [
  { id: 1, title: 'Jazz Ensemble',        date: '2025-12-03', time: '18:00', campus: 'on',  blurb: 'Live student performance by UIC students.', location: 'UIC Theater', description: 'Join the UIC Jazz Ensemble for an evening of live performances by talented students.' },
  { id: 2, title: 'English Conversation Hour', date: '2025-12-05', time: '11:30', campus: 'on',  blurb: 'Practice English and meet international friends.', location: 'Student Center East', description: 'Practice English with speakers of other languages and make international friends!' },
  { id: 3, title: 'Campus Meetup',        date: '2025-12-10', time: '17:00', campus: 'off', blurb: 'Casual hangout to meet classmates across departments.', location: 'Quad Lawn', description: 'Casual hangout to meet classmates across departments.' },
  { id: 4, title: 'Data Science Society', date: '2025-12-12', time: '16:30', campus: 'on',  blurb: 'Intro to ML workshop for beginners.', location: 'CS Building 110', description: 'Kickoff workshop covering Python, pandas, and a tiny ML demo.' }
];

export const getEventById = (id) => events.find(e => String(e.id) === String(id));

