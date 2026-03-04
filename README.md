RePolyglot 1.0 </>

A motivation-based task app for aspiring polyglots who need structured nudges to keep progressing.

🚀 Overview

RePolyglot is a full-stack web application designed for self-directed language learners who sometimes lack inspiration or structure, those who, like me, have never benefited off language courses or apps.

Rather than being a full language-learning platform, this app focuses on pushing self-learning. Users receive randomly generated learning tasks (e.g., “Learn 15 new verb infinitives”) to encourage consistent progress. They can also create their own tasks, as my belief is they know themselves best.

The goal is simple: push autodidacts into action.

Tech Stack </>

Backend:
Node.js
Express.js

Frontend:
EJS
Bootstrap 5

Database:
MongoDB

Other:
Mongoose


Features </>

User data stored in MongoDB
Task generation system
Task history tracking
Server-side rendering using EJS
Responsive UI built with Bootstrap
RESTful route architecture

🧠 Why I Built This

As an aspiring polyglot, I often found myself motivated but directionless. While many platforms teach languages, I struggled to find something that simply pushed me into consistent action.

This project was built to solve that gap — focusing on momentum rather than instruction.

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/repolyglot1.0.git

Navigate into the project directory:

cd repolyglot1.0

Install dependencies:

npm install

Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
//////////SESSION_SECRET=your_secret_key

Run the development server:

npm run dev

Open your browser and visit:

http://localhost:5000

🏗 Project Structure

/models        → Mongoose schemas
/routes        → Express route handlers
/views         → EJS templates
/public        → Static files (CSS, JS, images)
server.js         → Application entry point

Key Technical Decisions

Used MongoDB for flexible task schema design and scalability.
Implemented server-side rendering with EJS for simplicity and performance.
Structured routes using RESTful conventions.
Separated concerns using MVC-inspired folder structure.
Used environment variables to secure sensitive credentials.
This shows you understand architecture — which is important for hiring managers.

📈 Future Improvements

Add task difficulty levels
Allow users to customize task categories
Implement streak tracking
Add API-based task generation
Introduce testing (Jest / Supertest)
Deploy to a cloud platform (Render / Railway / Fly.io)

Coding Inspiration & Ideas
I 
The-Web-Developer-Bootcamp Udemy - Colt Steele
YouTube MongoDB David something

📚 What I Learned

Designing a RESTful backend with Express
Structuring a scalable Node.js project
Working with MongoDB and Mongoose schemas
Managing user authentication and sessions
Building dynamic views with EJS