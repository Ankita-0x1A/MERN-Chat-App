# MERN Chat Application

## Overview

A full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application enables users to communicate through one-to-one and group chats with a responsive and user-friendly interface.

## Features

* User Authentication (Login & Signup)
* JWT-based Authorization
* One-to-One Chat
* Group Chat Creation and Management
* User Search Functionality
* Profile Management
* Real-Time Messaging
* Responsive UI for Desktop and Mobile
* Secure Backend APIs

## Tech Stack

### Frontend

* React.js
* Context API
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

## Project Structure

MERN-Chat-App/
├── frontend/
├── backend/
├── package.json
└── README.md

## Installation

### Clone Repository

git clone https://github.com/Ankita-0x1A/MERN-Chat-App.git

### Install Dependencies

npm install

cd frontend
npm install

cd ../backend
npm install

### Environment Variables

Create a .env file in the backend directory and add:

PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY

### Run Application

Backend:
npm run server

Frontend:
npm start

## Learning Outcomes

* Built a complete MERN stack application from scratch.
* Implemented secure authentication and authorization.
* Designed RESTful APIs using Express.js.
* Managed application state and user sessions.
* Integrated MongoDB for persistent data storage.

## Future Improvements

* Socket.IO based real-time messaging
* Message notifications
* Media sharing
* Chat message encryption
* Voice and video calling support


