import axios from "axios";

export const api = axios.create({
  baseURL: "https://sas-backend-smnd.onrender.com/api", // Node backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: attach token if you implement JWT
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});