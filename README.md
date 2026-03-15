**RePolyglot 1.0 </>**

A motivation-based task app for aspiring polyglots who need structured nudges to keep progressing.

# Overview

RePolyglot is a full-stack web application designed for self-directed language learners who sometimes lack inspiration or structure, those who, like me, have never benefited off language courses or apps.

Rather than being a full language-learning platform, this app focuses on pushing self-learning. Users receive randomly generated learning tasks (e.g., “Learn 15 new verb infinitives”) to encourage consistent progress. They can also create their own tasks, as my belief is they know themselves best.

The goal is simple: push autodidacts into action.

### Tech Stack </> ###

**Backend**:
- Node.js
- Express.js
- MongoDB

<br>

**Frontend**:
- EJS
- JavaScript
- CSS
- Bootstrap 5

<br>

**Other**:
- Mongoose
- Passport

<br>


**Features </>**

- User authentication and authorisation
- User data stored in MongoDB
- MVC structured project
- Server-side rendering using EJS
- UI built with Bootstrap
- Express routing

## Why I Built This ##

As an aspiring hyperpolyglot, I often found myself motivated but directionless. While there are many platforms teaching languages, I realised I don't need to be taught, just pushed.

This project was built to solve that gap — focusing on momentum rather than instruction.

### ⚙️ Installation & Setup ###



1. Open a terminal (git bash)

2. Clone the repository `git clone https://github.com/polyglotpress/repolyglot1.0.git`

3. Navigate into the project directory `cd repolyglot_1.0_`

4. Install dependencies `npm install`

5. Create a .env file in the root directory and add:
    - `MONGO_URI=your_mongodb_connection_string`

6. Seed the database `node seeds/index.js`

7. Run the development server `nodemon server.js`

8. Open your browser and visit `http://localhost:5000`

### Project Structure ###


| Folder/file      |      Purpose                           |  
|-------------|------------------------------------|
| /models     |  Mongoose schemas for users and tasks| 
| /routes     |    Express route handlers  |  
| /controllers| Routing logic for HTTP requests |  
| /seeds      |  Setting up the database with dummy data for a viewable project| 
| /views      |    EJS templates  |  
| /public     | Static files (CSS, JS) |   
| server.js   | Application entry point |


### Key Technical Decisions ###

Used MongoDB for flexible task schema design and scalability.
Implemented server-side rendering with EJS for simplicity and performance.
Structured routes using RESTful conventions.
Separated concerns using MVC-inspired folder structure.
Used environment variables to secure sensitive credentials.
This shows you understand architecture — which is important for hiring managers.

## Future Improvements ##

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

### What I Learned ###

Designing a RESTful backend with Express
Structuring a scalable Node.js project
Working with MongoDB and Mongoose schemas
Managing user authentication and sessions
Building dynamic views with EJS