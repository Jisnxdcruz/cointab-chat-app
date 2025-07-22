"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function SidebarWrapper({ children }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/chats")
      .then((res) => res.json())
      .then((data) => setChats(data))
      .catch((err) => console.error("Failed to fetch chats", err));
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#1e1e2f",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "#ff71c1", marginBottom: "20px" }}>🧠 SkillSync</h2>

        <Link href="/new-chat" style={{ color: "#00bfff", display: "block", marginBottom: "20px" }}>
          ➕ New Chat
        </Link>
        <Link href="/" style={{ color: "#ccc", display: "block", marginBottom: "20px" }}>
          🏠 Home
        </Link>

        <h4>Previous Chats</h4>
        {chats.length === 0 ? (
          <p style={{ color: "#aaa" }}>No chats yet</p>
        ) : (
          chats
            .filter((chat) => chat.role === "user")
            .slice(-10)
            .map((chat, index) => (
              <div key={index} style={{ marginBottom: "10px", fontSize: "14px" }}>
                {chat.content.slice(0, 30)}...
              </div>
            ))
        )}
      </aside>

      <main style={{ flex: 1, padding: "20px", background: "#fff" }}>{children}</main>
    </div>
  );
}