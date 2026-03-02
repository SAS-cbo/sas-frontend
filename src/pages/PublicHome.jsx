import React from "react";
import { Link } from "react-router-dom";

const PublicHome = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Share A Smile Foundation</h1>
      <p>
        We are a non-profit organization committed to supporting communities
        through education, water projects, orphanage support, and more.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/projects">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>
            View Our Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PublicHome;