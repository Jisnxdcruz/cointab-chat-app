// src/app/layout.js
import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "SkillSync",
  description: "Chat with your local LLM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", minHeight: "100vh", margin: 0 }}>
        <aside
          style={{
            width: "200px",
            backgroundColor: "#111827",
            color: "white",
            padding: "1rem",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>💬 SkillSync</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>🏠 Home</Link>
            <Link href="/new-chat" style={{ color: "white", textDecoration: "none" }}>➕ New Chat</Link>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          {children}
        </main>
      </body>
    </html>
  );
}