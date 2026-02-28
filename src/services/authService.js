// src/services/authService.js
import { api } from "../api/api";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getProfile = async () => {
  const res = await api.get("/auth/profile");
  return res.data;
};