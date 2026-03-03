import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import bg from "../assets/bg.jpg";

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
            href="https://chat.whatsapp.com/FYX1vNzuxhhBSAHpgEAx4r?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#25D366" }}
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="https://instagram.com/_.share.a.smile._"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#E1306C" }}
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://tiktok.com/@Share.a.smile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#000000" }}
          >
            <FaTiktok size={28} />
          </a>

          <a
            href="https://youtube.com/@shareasmilecbo_projects"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtn, backgroundColor: "#FF0000" }}
          >
            <FaYoutube size={28} />
          </a>
        </div>

        <div style={divider}></div>

        <h3 style={sectionTitle}>Direct Contact</h3>

        <p>Email: orphanssmile254@gmail.com</p>
        <p>Phone: +254 7 08768489</p>
        <p>Address: Nairobi</p>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
  fontFamily: "Segoe UI, sans-serif"
};

const card = {
  background: "rgba(255,255,255,0.95)",
  padding: "40px",
  borderRadius: "12px",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
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