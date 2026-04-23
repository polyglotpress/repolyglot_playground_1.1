**RePolyglot**

A motivation-based task app for aspiring polyglots who need structured nudges to keep progressing.

# Overview

RePolyglot is a full-stack web application designed for self-directed language learners who sometimes lack inspiration or structure, those who - like me - have never benefited off language courses or apps.

Rather than being a full language-learning platform, this app focuses on pushing self-learning. Users create learning tasks (e.g. “Learn 15 new verb infinitives”) to encourage consistent progress. In a couple of commits from now, I hope to implement randomly generated tasks for user inspiration.

The goal is simple: push autodidacts to progress towards their goals.

## Tech Stack </> ##

**Backend**:
- Node.js (Common JS)
- Express
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
- Cloudinary user profile image storage via Multer
  
<br>


## Features ##

- User authentication and authorisation middleware
- User data stored in MongoDB 
- MVC structured project
- Server-side rendering using EJS
- Responsive UI built with Bootstrap and CSS
- Express routing


## Installation & Setup ##

You must have Node and Git installed on your computer in order to run this project.


1. Open a terminal 

2. Clone the repository `git clone https://github.com/polyglotpress/repolyglot_playground_1.1.git`

3. Navigate into the project directory `cd repolyglot_playground_1.1`

4. Install dependencies `npm install`

5. Create a .env file in the root directory and add your MongoDB connection string:
    - `MONGO_URI=your_mongodb_connection_string`

6. Seed the database `node seeds/index.js`

7. Run the server `node server.js`

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
