import React from "react";

const Donate = () => {
  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Support Our Mission</h1>

        <p style={subtitle}>
          Your donation helps us provide education, clean water,
          and humanitarian support to vulnerable communities.
        </p>

        <div style={divider}></div>

        <h2 style={sectionTitle}>M-Pesa Paybill Details</h2>

        <div style={paybillBox}>
          <p><strong>Paybill Number:</strong></p>
          <h3 style={highlight}>4039927</h3>

          <p><strong>Account Number:</strong></p>
          <h3 style={highlight}>IFTAR,ORPHANS,WATER,EDUCATION(pick purpose of donation)</h3>
        </div>

        <div style={divider}></div>

        <h3 style={sectionTitle}>How To Donate</h3>

        <ol style={instructions}>
          <li>Go to M-Pesa on your phone</li>
          <li>Select Lipa na M-Pesa</li>
          <li>Select Paybill</li>
          <li>Enter Paybill Number: <strong>123456</strong></li>
          <li>Enter Account Number: <strong>,IFTAR,ORPHANS,WATER,EDUCATION</strong></li>
          <li>Enter the amount</li>
          <li>Enter your M-Pesa PIN and confirm</li>
        </ol>

        <p style={note}>
          After donating, you may contact us with your transaction code
          for acknowledgment and receipt.
        </p>
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
  lineHeight: "1.6",
  color: "#555"
};

const sectionTitle = {
  marginTop: "20px",
  marginBottom: "15px"
};

const paybillBox = {
  background: "#0a3d62",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "15px"
};

const highlight = {
  fontSize: "22px",
  margin: "5px 0"
};

const instructions = {
  textAlign: "left",
  marginTop: "15px",
  lineHeight: "1.8"
};

const divider = {
  height: "1px",
  background: "#eee",
  margin: "25px 0"
};

const note = {
  marginTop: "20px",
  fontSize: "14px",
  color: "#777"
};

export default Donate;