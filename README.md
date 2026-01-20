Real-Time AI Developer Chat (MERN + Gemini)

An advanced AI-powered full-stack application where users can create projects and interact with a Generative AI agent that provides code suggestions, improvements, and explanations — all in real-time with websockets.

⭐ Features

✔️ User Authentication (JWT + bcrypt)
✔️ Project-based Conversations
✔️ Real-time AI Responses (WebSockets)
✔️ Integrated Google Gemini LLM
✔️ Clean & Responsive UI (Tailwind)
✔️ Redis Token Blacklisting (Logout Security)
✔️ MongoDB for Persistent Storage
✔️ REST APIs for Users & Projects
✔️ Axios Interceptors for Auth Tokens

🧰 Tech Stack
Frontend

React

React Router DOM

Axios

TailwindCSS

Socket.IO Client

Context API

Backend

Node.js

Express.js

JWT Auth

Mongoose

Socket.IO

Redis (Token Blacklist)

Google Gemini (Generative AI)

Database

MongoDB (Mongoose)

🏗️ Architecture Overview
frontend (React) ⇌ backend (Express)
        ⇩ Websockets (Socket.IO)
         AI Service (Gemini API)
                ⇩
           MongoDB + Redis

🗂️ Folder Structure
soen/
 ├── backend/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── services/
 │   ├── middleware/
 │   ├── db/
 │   ├── server.js
 │   └── app.js
 └── frontend/
     ├── src/
     │   ├── screens/
     │   ├── auth/
     │   ├── context/
     │   ├── config/
     │   └── routes/
     ├── public/
     └── vite.config.js

🔑 Authentication Flow

User registers with email + password

Password hashed using bcrypt

JWT token issued with 24h expiry

Token stored in localStorage

Axios sends token via Authorization: Bearer <token>

Logout stores token in Redis to blacklist it

🔌 API Endpoints
Auth
Method	Endpoint	Description
POST	/users/register	Create new user
POST	/users/login	Login user
GET	/users/profile	Get logged-in user
GET	/users/logout	Logout & blacklist token
Projects
Method	Endpoint	Description
POST	/projects/create	Create project
GET	/projects/all	Get all projects
GET	/projects/:id	Get a specific project
AI
Method	Endpoint	Description
GET	/ai?prompt=something	Generate AI response
🧠 Real-Time AI Explanation Flow

User enters prompt inside a project

Frontend emits socket event

Backend sends request to Gemini API

AI returns suggestions/improvements

Socket pushes response back to UI

🛠️ Setup Instructions
1. Clone the Repo
git clone https://github.com/your-username/realtime-ai-developer-chat.git
cd realtime-ai-developer-chat

2. Environment Variables
Backend .env
MONGO_URI=mongodb://127.0.0.1:27017/soenDB
JWT_SECRET=yourjwtsecret
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
GEMINI_API_KEY=your_key
PORT=3000

Frontend .env
VITE_API_URL=http://localhost:3000

3. Install Dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

4. Run Application
Start Backend
cd backend
node server.js

Start Frontend
cd ../frontend
npm run dev

📌 Future Improvements

Deploy on Vercel / Railway / Render

Add user roles (Admin/Developer)

Add AI Model switcher (Gemini / DeepSeek / OpenAI)

Add versioned project history

Export chat logs

👨‍💻 Author

Gaurav Mehra
Full-Stack Developer | MERN + AI

🎯 Use Case

This project demonstrates:

Full-stack engineering

Production-ready authentication

Socket-based realtime messaging

AI integration with external APIs

DB + caching + microservice pattern

Perfect for:
✔ Interviews
✔ Resume
✔ Portfolio
✔ Internship applications
✔ AI Projects Demo
