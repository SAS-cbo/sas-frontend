import React, { useState } from "react";
import axios from "axios";

const RegisterUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "staff"
  });

  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://sas-backend-smnd.onrender.com/api/auth/register",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("User registered successfully ✅");
      setForm({ name: "", email: "", password: "", role: "staff" });

    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Register User</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="staff">Staff</option>
          <option value="finance">Finance</option>
          <option value="admin">Admin</option>
          <option value="volunteer">Volunteer</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;