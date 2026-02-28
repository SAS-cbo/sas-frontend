import axios from "axios";

const API = "https://sas-backend-smnd.onrender.com/api/auth";

export const login = async (email, password) => {
  const res = await axios.post(`${API}/login`, { email, password });

  // 🔥 STORE TOKEN + USER CORRECTLY
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data));

  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};