import React from "react";

const Donate = () => {
  return (
    <div style={container}>
      <h1 style={title}>Support Our Mission</h1>

      <p style={text}>
        Your donation helps us provide education, clean water,
        and life-changing humanitarian support to vulnerable communities.
      </p>

      <div style={buttonContainer}>
        <button style={btn}>Donate $10</button>
        <button style={btn}>Donate $25</button>
        <button style={btn}>Donate $50</button>
      </div>
    </div>
  );
};

/* ============ STYLES ============ */

const container = {
  minHeight: "100vh",
  padding: "100px 20px",
  textAlign: "center",
  background: "#f4f6f9",
  fontFamily: "Segoe UI, sans-serif"
};

const title = {
  fontSize: "32px",
  marginBottom: "20px"
};

const text = {
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.7"
};

const buttonContainer = {
  marginTop: "40px"
};

const btn = {
  margin: "10px",
  padding: "12px 25px",
  background: "#0a3d62",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px"
};

export default Donate;