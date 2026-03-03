import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PublicHome = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://sas-backend-smnd.onrender.com/api/projects"
        );
        setProjects(res.data.slice(0, 3));
      } catch (err) {
        console.log("Error fetching projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h1 style={{ margin: 0 }}>Share A Smile Foundation</h1>

        <div>
          <Link to="/donate">
            <button style={donateHeaderBtn}>Donate</button>
          </Link>

          <Link to="/login">
            <button style={loginButton}>Admin Login</button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section style={heroSection}>
        <h2 style={heroTitle}>
          Empowering Communities. Transforming Lives.
        </h2>

        <p style={heroText}>
          We provide clean water, education support, orphanage care,
          and humanitarian relief to vulnerable communities.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/projects">
            <button style={primaryButton}>View Our Projects</button>
          </Link>
        </div>
      </section>

      {/* About */}
      <section style={section}>
        <h2 style={sectionTitle}>Who We Are</h2>
        <p style={sectionText}>
          Share A Smile Foundation is a non-profit organization committed to
          sustainable community development. We focus on water access,
          education empowerment, feeding programs, and long-term impact
          initiatives across underserved regions.
        </p>
      </section>

      {/* Stats */}
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
          <p>Volunteers</p>
        </div>

        <div style={statCard}>
          <h2 style={statNumber}>15+</h2>
          <p>Communities Reached</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={section}>
        <h2 style={sectionTitle}>Featured Projects</h2>

        <div style={projectGrid}>
          {projects.map((project) => (
            <div
              key={project._id}
              style={projectCard}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={projectImage}
                />
              )}

              <h3>{project.title}</h3>

              <p style={{ fontSize: "14px" }}>
                {project.description?.substring(0, 100)}...
              </p>

              <Link to="/projects">
                <button style={primaryButton}>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2>Your Support Can Change a Life Today</h2>

        <Link to="/donate">
          <button style={ctaButton}>Donate Now</button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={footer}>
        <p>© {new Date().getFullYear()} Share A Smile Foundation</p>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>
          Together we build stronger communities.
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
  marginLeft: "10px",
  padding: "8px 16px",
  background: "white",
  color: "#0a3d62",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const donateHeaderBtn = {
  padding: "8px 16px",
  background: "#f39c12",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const heroSection = {
  textAlign: "center",
  padding: "120px 20px",
  color: "white",
  backgroundImage:
    "linear-gradient(rgba(10,61,98,0.75), rgba(10,61,98,0.75)), url('https://images.unsplash.com/photo-1509099836639-18ba1795216d')",
  backgroundSize: "cover",
  backgroundPosition: "center"
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
  fontSize: "28px",
  marginBottom: "20px"
};

const sectionText = {
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.7"
};

const statsSection = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
  padding: "60px 20px",
  background: "#eaf2f8"
};

const statCard = {
  background: "white",
  padding: "30px",
  width: "200px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

const statNumber = {
  color: "#0a3d62",
  fontSize: "28px",
  marginBottom: "10px"
};

const projectGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "center",
  marginTop: "40px"
};

const projectCard = {
  width: "280px",
  background: "white",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  transition: "transform 0.3s ease",
  cursor: "pointer"
};

const projectImage = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "15px"
};

const primaryButton = {
  padding: "10px 20px",
  marginTop: "10px",
  background: "#0a3d62",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const ctaSection = {
  padding: "80px 20px",
  textAlign: "center",
  background: "#0a3d62",
  color: "white"
};

const ctaButton = {
  marginTop: "20px",
  padding: "12px 30px",
  background: "#f39c12",
  color: "white",
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