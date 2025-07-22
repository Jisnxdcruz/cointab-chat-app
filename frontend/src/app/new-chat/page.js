"use client";
import { useState } from "react";

export default function NewChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { role: "bot", content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>🧠 New Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "1rem",
          minHeight: "300px",
          backgroundColor: "#fff",
        }}
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              color: msg.role === "user" ? "#2563eb" : "#111827",
              margin: "0.5rem 0",
            }}
          >
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </p>
        ))}
        {loading && (
          <p style={{ fontStyle: "italic", color: "#555" }}>Bot is typing...</p>
        )}
      </div>

      <textarea
        rows={2}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          resize: "none",
        }}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}