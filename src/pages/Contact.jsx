import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Contact Us</h1>

        <p style={subtitle}>
          Connect with us through our social media platforms and be part of
          our growing community.
        </p>

        <div style={divider}></div>

        <h3 style={sectionTitle}>Follow & Join Us</h3>

        <div style={iconContainer}>
          <a
            href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#25D366" }}
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#E1306C" }}
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://tiktok.com/@YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#000000" }}
          >
            <FaTiktok size={28} />
          </a>

          <a
            href="https://youtube.com/@YOUR_CHANNEL"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#FF0000" }}
          >
            <FaYoutube size={28} />
          </a>
        </div>

        <div style={divider}></div>

        <h3 style={sectionTitle}>Direct Contact</h3>

        <p>Email: your@email.com</p>
        <p>Phone: +2547XXXXXXXX</p>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f6f9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
  fontFamily: "Segoe UI, sans-serif"
};

const card = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  textAlign: "center"
};

const title = {
  fontSize: "32px",
  marginBottom: "10px"
};

const subtitle = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.6"
};

const sectionTitle = {
  marginTop: "20px",
  marginBottom: "15px"
};

const iconContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px"
};

const iconBtn = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textDecoration: "none",
  transition: "transform 0.2s ease"
};

const divider = {
  height: "1px",
  background: "#eee",
  margin: "25px 0"
};

export default Contact;