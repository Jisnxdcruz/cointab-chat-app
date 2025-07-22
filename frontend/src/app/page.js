"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f9fafb",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#111827" }}>
        👋 Welcome to <span style={{ color: "#2563eb" }}>SkillSync</span>
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#4b5563", marginBottom: "2rem" }}>
        Your personal AI chat assistant — simple, fast, and local.
      </p>

      <button
        onClick={() => router.push("/new-chat")}
        style={{
          padding: "0.8rem 1.5rem",
          backgroundColor: "#2563eb",
          color: "white",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.background = "#1e40af")}
        onMouseOut={(e) => (e.target.style.background = "#2563eb")}
      >
        ➕ Start New Chat
      </button>
    </main>
  );
}