import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import RegisterUser from "../components/RegisterUser";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [donations, setDonations] = useState([]);
  const [finance, setFinance] = useState([]);

  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const sliderSettings = { 
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1 
  };

  useEffect(() => {
    const fetchData = async () => {
      const [projectsRes, donationsRes] = await Promise.all([
        axios.get("https://sas-backend-smnd.onrender.com/api/projects", config),
        axios.get("https://sas-backend-smnd.onrender.com/api/donations", config)
      ]);

      setProjects(projectsRes.data.slice(0, 3));
      setDonations(donationsRes.data);

      try {
        const financeRes = await axios.get("https://sas-backend-smnd.onrender.com/api/finance", config);
        setFinance(financeRes.data);
      } catch {
        console.log("Finance not accessible");
      }
    };

    fetchData();
  }, []);

  const totalDonations = donations.reduce(
    (sum, d) => sum + Number(d.amount || 0), 
    0
  );

  const totalIncome = finance
    .filter(r => r.type === "income")
    .reduce((sum, r) => sum + r.amount, 0);

  const totalExpense = finance
    .filter(r => r.type === "expense")
    .reduce((sum, r) => sum + r.amount, 0);

  const balance = totalIncome - totalExpense;

  const cardStyle = { 
    background: "#fff", 
    padding: "20px", 
    borderRadius: "10px", 
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)", 
    flex: 1 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard Overview</h2>

      <RegisterUser />

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Projects</h3>
          <p>{projects.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Donations</h3>
          <p>${totalDonations}</p>
        </div>

        <div style={cardStyle}>
          <h3>Finance Balance</h3>
          <p>${balance}</p>
        </div>
      </div>

      <h2>Recent Projects</h2>

      {projects.map(p => (
        <div 
          key={p._id} 
          style={{ 
            marginBottom: "30px", 
            background: "#fff", 
            padding: "20px", 
            borderRadius: "10px", 
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)" 
          }}
        >
          <h3>{p.title}</h3>

          {p.images?.length > 0 && (
            <Slider {...sliderSettings}>
              {p.images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt="project"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />
                </div>
              ))}
            </Slider>
          )}

          {p.description && (
            <p style={{ marginTop: "15px", color: "#555" }}>
              {p.description}
            </p>
          )}

          {p.amountUsed !== undefined && (
            <p>
              <strong>Amount Used:</strong> KES{p.amountUsed}
            </p>
          )}

          {p.status && (
            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    p.status === "completed"
                      ? "green"
                      : p.status === "ongoing"
                      ? "orange"
                      : "gray",
                  fontWeight: "bold"
                }}
              >
                {p.status}
              </span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;