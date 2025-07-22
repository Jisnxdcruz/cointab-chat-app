# 🧠 SkillSync - AI Chat Assistant (Cointab Assignment)

A full-stack AI chat assistant built with *Next.js, **Express.js, and **PostgreSQL*. Users can chat with an assistant, start new conversations, and view previously saved chats.

---
## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshot/homepg.png)

### 💬 New Chat View
![New Chat](screenshot/newcht.png)

### 📂 Continued Chat View
![Continued Chat](screenshot/newcht2.png)

---


## ✨ Features

- 🗣 Chat with a simple AI assistant  
- 🆕 "New Chat" button to start fresh conversations  
- 📜 Sidebar showing previous chats  
- 💾 Saves both user & bot messages in PostgreSQL  
- 📱 Clean and responsive UI  
- ⚡ Fast local performance

---

## 🔧 Tech Stack

| Layer       | Tech        |
|-------------|-------------|
| Frontend    | Next.js (App Router) |
| Backend     | Express.js  |
| Database    | PostgreSQL  |
| Styling     | CSS (globals.css) |

---

## ⚙ How It Works

1. User types a message and sends it.
2. Message is sent via POST /api/chat to the Express backend.
3. Backend replies with: You said: <message>.
4. Both messages (user & bot) are stored in the database.
5. GET /api/chats fetches all saved conversations for sidebar view.

---

## 🗃 Database Schema

**PostgreSQL Table: chats**

| Column       | Type            | Description               |
|--------------|-----------------|---------------------------|
| id         | SERIAL PRIMARY KEY | Unique message ID      |
| role       | VARCHAR(10)     | "user" or "bot"           |
| content    | TEXT            | Message text              |
| created_at | TIMESTAMP       | Auto set to current time  |

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repo

bash
git clone https://github.com/Jisnxdcruz/cointab-chat-app.git
cd cointab-chat-app

2️⃣ Set Up PostgreSQL

Create a database: cointab-chat

Run this SQL:


CREATE TABLE chats (
  id SERIAL PRIMARY KEY,
  role VARCHAR(10) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3️⃣ Start Backend

cd backend
npm install
node server.js

> Runs on: http://localhost:3001



4️⃣ Start Frontend

cd ../frontend
npm install
npm run dev

> Runs on: http://localhost:3000




---

🔮 Notes

💡 Bot reply is currently hardcoded for demo: You said: <user message>

You can integrate a real AI model (e.g., OpenAI API or Ollama locally)



---

👩‍💻 Author

Built with 💙 by Jisnamary D'Cruz
🔗 GitHub - @Jisnxdcruz


