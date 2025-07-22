const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// PostgreSQL setup
const pool = new Pool({
  user: "postgres",         // ← your pgAdmin user
  host: "localhost",
  database: "cointab-chat", // ← your DB name
  password: "1234",         // ← your password
  port: 5432,
});

// Save chat message
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  console.log("Received:", message);

  try {
    const botReply = You said: ${message};

    await pool.query(
      "INSERT INTO chats (role, content) VALUES ($1, $2), ($3, $4)",
      ["user", message, "bot", botReply]
    );

    res.json({ reply: botReply });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Get all chats
app.get("/api/chats", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM chats ORDER BY created_at ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("DB Read Error:", err);
    res.status(500).json({ error: "Failed to fetch chats" });
  }
});

app.listen(PORT, () => {
  console.log(✅ Server running at http://localhost:${PORT});
});