# Milestone 2 — Group Setup & Draft

## Links

Figmae: https://www.figma.com/design/H3yIKZ2GSZouGosLp3Gyal/CS351-Group-Project?node-id=0-1&t=ZQz4y1egyxhHUV3w-0
GitHub repo link: https://github.com/malakramahi1/CS351-FullStack-Group

## Q1
We are available to meet online on Wednesdays 7:00–7:30 pm CT as well as weekends. 
Our weekly meeting will be on Wednesday's.
## Q2
Prior to 9/22: In our weekly meeting, we will finalize the project track and idea, confirm group roles, and review possible APIs/data sources that fit our backend needs. We will also ensure everyone has the repo cloned and can push from their branches.

During the week of 9/23–9/29: Focus on building the first rough draft of the project by scaffolding the backend (Flask/Django) and frontend (React). Begin connecting endpoints to UI elements and push changes through feature branches.

Before 10/2: Use our meetings to review progress, identify bugs or weak points, and resolve any blockers. If needed, we will attend office hours for guidance. By the final meeting, we will have all Milestone 2 questions answered in the README and the repo prepared for submission.
## Q3
We Will use imessages for communication 
a                                           
## Q3b
Malak- 7088567917 
Jovan- 2244327748
Om- 2244358761
Mandar- 2242560891

## Q3c           
Our excpected response time is 12 Hours 
                                
## Q4a
If there is a disagreement, we will talk it out in a short group call or chat.
Everyone can share their view, and then we will take a quick vote.
The majority decision wins. If it’s tied, the project lead makes the final
call.

## Q4b
First, we will send a friendly reminder and ask if they need help. If it 
continues, we will set smaller, clear tasks with deadlines. If they still 
don’t contribute, we will let the TA know so the workload can be fairly balanced
.                                           
## Q5
Malak – Project Lead & Frontend: scope coordination, routing, core pages.  
Jovan – Backend & Database (you): API design, Flask/Django views, models, integration tests.  
Om – UI/UX & Figma: wireframes, component library, responsiveness; assists React.  
Mandar – API/Data & QA: external API integration, seed data, test plans, GitHub Issues tracking.  
## Q6
We will use Flask + React.
                                       
## Track 1: Tackling Generative AI Consequences

  Problem 1
Writers and artists are worried that their work is being scraped from the internet and used to train generative AI models without permission. This happens silently because datasets are built from massive online collections. Creators lose control of their intellectual property, and trust in AI systems decreases because there is no transparency.
 
Solution 1
Build a small web app that acts as a **community hub** where creators can:
- Upload their original works.  
- Post screenshots or examples of suspected unauthorized use in AI datasets.  
- Tag and comment on suspicious matches to crowdsource evidence.  
- Share legal/educational resources about copyright and licensing.  

The goal is not to build an unreliable AI detector, but instead to give creators a transparent platform to track and discuss potential misuse. This empowers artists with more control and raises awareness of ethical AI practices.


## Track 2: Technology for Public Goods

  Problem 2
UIC students struggle to quickly find study buddies, project partners, or local campus events in one place. Right now they rely on random group chats, flyers, or word of mouth, which is inefficient and not inclusive.

  Solution 2
Build a web app where students can:
- Create a simple profile  
- Post or join study groups and campus events.  
- Use filters (by course code, date, topic) to discover opportunities.  
- Send direct messages to group/event organizers.  

This solves the discovery, connection problem in a centralized, accessible way. The idea will be called College Event Friend Finder.


  Problem 3
New students often don’t know where to find reliable campus resources like tutoring, office hours, or study spaces. They waste time searching across multiple sites or miss opportunities.

  Solution 3
Add a **Resource Directory** feature:
- Curated list of academic resources, labs, and office hours.  
- Tags for type .  
- Short text notes from students  
- Map/location info if relevant.  

This improves accessibility and ensures everyone can quickly find support tools.


## Track 3: Creative Coding and Cultural Expression
Problem 3
Many people that visit Chicago, or even some locals might be unaware of all the history behind the city. They might only know from word of mouth, which for visitors can be a problem.

Solution 3
Make an interactive app that allows people to:
- Learn the history of Chicago
- Explore specific themes of Chicago, like  architecture and music
- Scroll through a timeline of events that took place
- Add some quizzes to help determine knowledge

The goal of this app is to allow people to interact with the history of Chicago in a easy manner, for people to understand the history.

## Idea Finalization
For the semester, we are using the College Event Friend Finder project(That we talked about in Track 2). By connecting users with friends, this program enhances social interaction and connection at local or university events. We selected it because our app can encourage more active participation from students who often miss out on activities because they lack companions. To make sure it fits community expectations, the app will concentrate on UIC students. Features will be created to facilitate engagement, connection, and teamwork, making it simpler and more easier to participate in events.



##EXTRA CREDIT 
## Q1
We will use SQLite for development since it’s easy, and PostgreSQL in production because it can handle more users.

## Q2
The database will store users, groups, events, and messages so we can search, join groups, and send messages.

## Q3
We will use Google Maps API to show event and study locations.

## Q4
The API has limits, so we will cache common places and let users add info manually if needed.

## Q5
Login will be email and password with JWT tokens.

## Q6
Passwords will be hashed, secrets kept in environment variables, and everything will run over HTTPS.

## Q7
We will deploy on Render or a similar service and keep secrets out of GitHub.

## Q8
To stay reliable, we will use health checks, auto-restart, and make redeploys simple when pushing to main.
