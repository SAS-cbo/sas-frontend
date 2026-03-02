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
      <section style={heroSection}>
        <h2 style={heroTitle}>Empowering Communities. Transforming Lives.</h2>

        <p style={heroText}>
          We are committed to supporting vulnerable communities through
          education, clean water projects, orphanage care, street feeding,
          and sustainable humanitarian initiatives.
        </p>

        <div style={{ marginTop: "25px" }}>
          <Link to="/projects">
            <button style={primaryButton}>View Our Projects</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section style={section}>
        <h2 style={sectionTitle}>Who We Are</h2>
        <p style={sectionText}>
          Since our founding, Share A Smile Foundation has impacted thousands
          of lives by delivering sustainable solutions to communities in need.
          We believe every child deserves education, every family deserves clean
          water, and every community deserves hope.
        </p>
      </section>

      {/* Impact Statistics */}
      <section style={statsSection}>
        <div style={statCard}>
          <h2 style={statNumber}>5,000+</h2>
          <p>Lives Impacted</p>
        </div>

        <div style={statCard}>
          <h2 style={statNumber}>120+</h2>
          <p>Projects Completed</p>
        </div>

        <div style={statCard}>
          <h2 style={statNumber}>30+</h2>
          <p>Active Volunteers</p>
        </div>

        <div style={statCard}>
          <h2 style={statNumber}>15+</h2>
          <p>Communities Reached</p>
        </div>
      </section>

      {/* Call To Action */}
      <section style={ctaSection}>
        <h2 style={{ marginBottom: "20px" }}>
          Your Support Can Change a Life Today
        </h2>

        <Link to="/projects">
          <button style={ctaButton}>Support Our Mission</button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={footer}>
        <p>© {new Date().getFullYear()} Share A Smile Foundation</p>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>
          Together we build stronger, happier communities.
        </p>
      </footer>
    </div>
  );
};

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f6f9",
  fontFamily: "Segoe UI, sans-serif"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "#0a3d62",
  color: "white"
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

const heroSection = {
  textAlign: "center",
  padding: "80px 20px"
};

const heroTitle = {
  fontSize: "36px",
  marginBottom: "20px"
};

const heroText = {
  maxWidth: "650px",
  margin: "0 auto",
  lineHeight: "1.7",
  fontSize: "17px"
};

const section = {
  padding: "60px 20px",
  textAlign: "center",
  background: "white"
};

const sectionTitle = {
  marginBottom: "20px",
  fontSize: "28px"
};

const sectionText = {
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.7"
};

const statsSection = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "30px",
  padding: "60px 20px",
  background: "#eaf2f8"
};

const statCard = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

const statNumber = {
  color: "#0a3d62",
  fontSize: "28px",
  marginBottom: "10px"
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

const ctaSection = {
  padding: "70px 20px",
  textAlign: "center",
  background: "#0a3d62",
  color: "white"
};

const ctaButton = {
  padding: "12px 30px",
  fontSize: "16px",
  background: "white",
  color: "#0a3d62",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const footer = {
  textAlign: "center",
  padding: "30px",
  background: "#111",
  color: "white"
};

export default PublicHome;