import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Donations from "./pages/Donations";
import Finance from "./pages/Finance";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";
import PublicHome from "./pages/PublicHome";
import PublicProjects from "./pages/PublicProjects";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC WEBSITE ================= */}
      <Route path="/" element={<PublicHome />} />
      <Route path="/projects" element={<PublicProjects />} />
      <Route path="/login" element={<Login />} />

      {/* ================= ADMIN SYSTEM ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="donations" element={<Donations />} />

        <Route
          path="finance"
          element={
            <ProtectedRoute roles={["admin", "finance"]}>
              <Finance />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;