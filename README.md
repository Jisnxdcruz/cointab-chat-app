# SkillSync - AI Chat Assistant (Cointab Assignment)

A full-stack AI chat assistant web app built with *Next.js, **Express.js, and **PostgreSQL*. It allows users to start new conversations, stores chats in the database, and displays previous conversations in a sidebar.

---

## 📌 Features

✅ Chat interface with an AI assistant  
✅ "New Chat" button to start fresh chats  
✅ Sidebar to view saved previous chats  
✅ Messages (user + bot) are saved to PostgreSQL  
## 🧠 Technologies Used

- Frontend: Next.js (App Router)
- Backend: Express.js
- Database: PostgreSQL
- Styling: CSS (globals.css)

## ⚙ How It Works

1. *User enters a message* in the chat.
2. Message is sent to the Express server via POST /api/chat.
3. Server saves both user & bot messages in PostgreSQL.
4. Previous messages are retrieved via GET /api/chats.
5. Sidebar displays saved chats in order of time.

## 🗃 Database Schema

**Table: chats**

| Column       | Type              | Description           |
|--------------|-------------------|-----------------------|
| id         | SERIAL PRIMARY KEY| Unique message ID     |
| role       | VARCHAR(10)       | "user" or "bot"       |
| content    | TEXT              | Message text          |
| created_at | TIMESTAMP         | Defaults to now       |

---

## 🧪 How to Run Locally

### 1. Clone the repo

bash
git clone https://github.com/Jisnxdcruz/cointab-chat-app.git
cd cointab-chat-app

2. Set up PostgreSQL

Create a database: cointab-chat

Open pgAdmin or psql and run this SQL:


CREATE TABLE chats (
  id SERIAL PRIMARY KEY,
  role VARCHAR(10) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3. Run Backend

cd backend
npm install
node server.js

Server runs at: http://localhost:3001

4. Run Frontend

cd ../frontend
npm install
npm run dev

Frontend runs at: http://localhost:3000


💡 Notes

Currently uses a simulated bot reply ("You: ...").

You can replace it with OpenAI, Ollama, or other LLMs later.


👤 Author

Made with ❤ by Jisnamary
GitHub: https://github.com/Jisnxdcruz
