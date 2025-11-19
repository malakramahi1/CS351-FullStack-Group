export const events = [
  {
    id: 1,
    title: "Online Managing Your Mood Workshop",
    blurbTitle: "Managing Your Mood",
    blurb: "Structured four-week skills workshop focused on CBT and DBT tools.",
    date: "2025-11-21",
    time: "10:00",
    campus: "online",
    category: "Workshop",
    location: "Virtual (UIC Counseling Center)",
    color: "#F2A93B",
    description:
      "This four-week, structured skills-based workshop uses techniques from cognitive-behavioral therapy and dialectical-behavioral therapy to help students implement healthy strategies to manage stress, anxiety and other difficult emotions. Includes worksheets, activities and discussion among members. Open to UIC students only."
  },
  {
    id: 2,
    title: "UIC GIS Day",
    blurbTitle: "UIC GIS Day",
    blurb: "Celebrate GIS with talks, poster competition, and spatial analysis workshop.",
    date: "2025-11-21",
    time: "10:00",
    campus: "on",
    category: "Special event",
    location: "Richard J. Daley Library",
    color: "#1FBF74",
    description:
      "Join the UIC University Library and the College of Urban Planning and Public Affairs for GIS Day. Explore innovative geospatial work, attend interdisciplinary talks, view the student poster competition, and stay for the skills workshop on coordinate systems and projections. Doors open at 9:30 a.m. with coffee."
  },
  {
    id: 3,
    title: "The CREATE Program: Accomplishments and Updates",
    blurbTitle: "CREATE Program Update",
    blurb: "Updates on the Chicago Region Environmental and Transportation Efficiency Program.",
    date: "2025-11-20",
    time: "12:00",
    campus: "online",
    category: "Lecture",
    location: "Virtual (Urban Transportation Center)",
    color: "#47C7AF",
    description:
      "Hear the latest on the Chicago Region Environmental and Transportation Efficiency Program (CREATE). Presenters Velicia Goode, P.E. (Illinois Department of Transportation) and Rebecca Wingate (Association of American Railroads) will share how CREATE projects improve the way passengers and goods move throughout metropolitan Chicago."
  },
  {
    id: 4,
    title: "Take a Break with Pawfficer Ham",
    blurbTitle: "Break with Pawfficer Ham",
    blurb: "Destress with the one and only Pawfficer Ham.",
    date: "2025-11-20",
    time: "12:00",
    campus: "on",
    category: "Special event",
    location: "Library of the Health Sciences",
    color: "#FF99B6",
    description:
      "You are invited to take a break and destress with the one and only Pawfficer Ham. Enjoy free snuggles and love for all at the Library of the Health Sciences."
  },
  {
    id: 5,
    title: "Creating Inclusive Digital Materials",
    blurbTitle: "Inclusive Digital Materials",
    blurb: "Interactive workshop on creating accessible slide decks and documents.",
    date: "2025-11-20",
    time: "12:00",
    campus: "online",
    category: "Workshop",
    location: "Virtual (Academic Computing and Communications Center)",
    color: "#FF8E5D",
    description:
      "Explore hands-on strategies to make your digital materials meet accessibility guidelines. Evaluate Microsoft Word and PowerPoint files in real time and apply incremental improvements inspired by universal design principles from “Reach Everyone, Teach Everyone.”"
  },
  {
    id: 6,
    title: "International Education Movie Night",
    blurbTitle: "International Education Week Film",
    blurb: "Screening of the acclaimed film “The Price” followed by discussion.",
    date: "2025-11-19",
    time: "16:00",
    campus: "on",
    category: "Special event",
    location: "Richard J. Daley Library (1-470)",
    color: "#FA6C65",
    description:
      "Celebrate International Week at UIC with a screening of the globally acclaimed film “The Price” (2017) by Nigerian American filmmaker Anthony Onah. A post-screening discussion is hosted by the Office of Global Engagement."
  },
  {
    id: 7,
    title: "Online Self-Compassion Workshop",
    blurbTitle: "Self-Compassion Workshop",
    blurb: "Four-week workshop to build mindfulness, compassion and resilience.",
    date: "2025-11-19",
    time: "15:00",
    campus: "online",
    category: "Workshop",
    location: "Virtual (UIC Counseling Center)",
    color: "#588BFF",
    description:
      "This workshop helps you respond to struggles with kindness and caring, teaching skills for tolerating distress and feeling connected to others. Weekly sessions include worksheets, exercises, meditations and discussions. Open to UIC students only."
  },
  {
    id: 8,
    title: "School of Public Health Global Health Speaker Series",
    blurbTitle: "Global Health Speaker Series",
    blurb: "Featured talk with Dr. Richard J. Webby on pandemic preparedness.",
    date: "2025-11-19",
    time: "12:00",
    campus: "on",
    category: "Lecture",
    location: "UIC School of Public Health (Room 160 + Zoom)",
    color: "#2D8AF2",
    description:
      "Join the School of Public Health Division of Environmental and Occupational Health Sciences and the Global Health Program for the monthly Community Café and Global Health Speaker Series. Dr. Richard J. Webby of the WHO Collaborating Centre will speak about preparations for a pandemic. Attend in person or via Zoom."
  },
  {
    id: 9,
    title: "UIC Certificate in Nonprofit Management Fall Courses",
    blurbTitle: "Nonprofit Management Courses",
    blurb: "Registration open for fall CNM online courses.",
    date: "2025-11-19",
    time: "00:00",
    campus: "online",
    category: "Workshop",
    location: "Online",
    color: "#9270E0",
    description:
      "New courses for UIC’s Certificate in Nonprofit Management are open for registration. Options include Creating and Managing Fundraising Plans, Social Media Strategies for Nonprofits, and Fundamentals of Operations Management and Organizational Effectiveness. Continuing student discounts apply when registering for two or more courses."
  }
];

export const getEventById = (id) =>
  events.find((e) => String(e.id) === String(id));
