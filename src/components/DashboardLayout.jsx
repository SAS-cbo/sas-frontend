import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaDonate,
  FaMoneyCheckAlt,
  FaUser,
  FaSignOutAlt,
  FaBars
} from "react-icons/fa";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const styles = {
    container: { display: "flex", height: "100vh", fontFamily: "Segoe UI, sans-serif" },
    sidebar: {
      width: collapsed ? "70px" : "220px",
      backgroundColor: "#1f2937",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      transition: "width 0.3s ease",
    },
    sidebarHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)" },
    collapseBtn: { background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "1.2rem" },
    sidebarUser: { padding: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)", fontWeight: "bold" },
    sidebarNav: { display: "flex", flexDirection: "column", padding: "10px 0", flex: 1 },
    navLink: { color: "#cbd5e1", padding: "12px 20px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", borderRadius: "6px", transition: "background 0.2s" },
    navLinkActive: { backgroundColor: "#374151", color: "#fff" },
    logoutBtn: { backgroundColor: "#ef4444", color: "#fff", border: "none", margin: "15px", padding: "10px", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", fontWeight: "bold", justifyContent: "center" },
    main: { flex: 1, backgroundColor: "#f3f4f6", padding: "20px", overflowY: "auto" }
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h3>{collapsed ? "NGO" : "NGO Panel"}</h3>
          <button style={styles.collapseBtn} onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>

        <div style={styles.sidebarUser}>{user?.name}</div>

        <nav style={styles.sidebarNav}>
          <NavLink to="/admin/dashboard" style={({isActive}) => isActive ? {...styles.navLink, ...styles.navLinkActive} : styles.navLink}><FaTachometerAlt /> Dashboard</NavLink>
          <NavLink to="/admin/projects" style={({isActive}) => isActive ? {...styles.navLink, ...styles.navLinkActive} : styles.navLink}><FaProjectDiagram /> Projects</NavLink>
          <NavLink to="/admin/donations" style={({isActive}) => isActive ? {...styles.navLink, ...styles.navLinkActive} : styles.navLink}><FaDonate /> Donations</NavLink>
          <NavLink to="/admin/finance" style={({isActive}) => isActive ? {...styles.navLink, ...styles.navLinkActive} : styles.navLink}><FaMoneyCheckAlt /> Finance</NavLink>
          <NavLink to="/admin/profile" style={({isActive}) => isActive ? {...styles.navLink, ...styles.navLinkActive} : styles.navLink}><FaUser /> Profile</NavLink>
        </nav>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;