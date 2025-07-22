"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/chats");
        const data = await res.json();
        setChats(data);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
      }
    };

    fetchChats();
  }, []);

  return (
    <aside
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        padding: "1rem",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>💬 SkillSync</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              🏠 Home
            </Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link href="/new-chat" style={{ color: "white", textDecoration: "none" }}>
              ➕ New Chat
            </Link>
          </li>
          <li>
            <p style={{ marginBottom: "0.5rem", color: "#9ca3af" }}>Previous Chats:</p>
            {chats.length > 0 ? (
              chats.map((chat, index) => (
                <p key={index} style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
                  • {chat.content.slice(0, 30)}...
                </p>
              ))
            ) : (
              <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>No chats yet</p>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}