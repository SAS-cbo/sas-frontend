import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserCircle,
  FaSignOutAlt,
  FaProjectDiagram,
  FaDonate,
  FaBars
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="sidebar-header">
        <h2>{collapsed ? "SAS" : "SAS Admin"}</h2>
        <FaBars className="toggle-btn" onClick={() => setCollapsed(!collapsed)} />
      </div>

      <ul className="sidebar-menu">
        <li>
          <Link to="/">
            <FaTachometerAlt />
            {!collapsed && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link to="/users">
            <FaUsers />
            {!collapsed && <span>Users</span>}
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <FaProjectDiagram />
            {!collapsed && <span>Projects</span>}
          </Link>
        </li>

        <li>
          <Link to="/donations">
            <FaDonate />
            {!collapsed && <span>Donations</span>}
          </Link>
        </li>

        {/* Finance visible ONLY to admin & finance */}
        {(user?.role === "admin" || user?.role === "finance") && (
          <li>
            <Link to="/admin/finance">
              <FaUserCircle />
              {!collapsed && <span>Finance</span>}
            </Link>
          </li>
        )}

        <li>
          <Link to="/profile">
            <FaUserCircle />
            {!collapsed && <span>Profile</span>}
          </Link>
        </li>

        <li onClick={handleLogout} className="logout">
          <FaSignOutAlt />
          {!collapsed && <span>Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;