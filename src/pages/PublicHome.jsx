import React from "react";
import { Link } from "react-router-dom";

const PublicHome = () => {
  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h1 style={{ margin: 0 }}>Share A Smile Foundation</h1>

        <Link to="/login">
          <button style={loginButton}>Admin Login</button>
        </Link>
      </div>

      {/* Hero Section */}
      <div style={{ marginTop: "60px" }}>
        <h2>Making Communities Smile Again</h2>

        <p style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.6" }}>
          We are a non-profit organization committed to supporting communities
          through education, water projects, orphanage support, street feeding,
          and humanitarian initiatives across vulnerable regions.
        </p>

        <Link to="/projects">
          <button style={primaryButton}>
            View Our Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f6f9",
  padding: "20px"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "#0a3d62",
  color: "white",
  borderRadius: "8px"
};

const loginButton = {
  padding: "8px 18px",
  background: "white",
  color: "#0a3d62",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const primaryButton = {
  padding: "12px 25px",
  fontSize: "16px",
  background: "#0a3d62",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default PublicHome;