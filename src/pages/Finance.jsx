import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import jsPDF from "jspdf";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Finance = () => {
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    type: "income",
    title: "",
    amount: "",
    category: "",
    description: ""
  });

  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  // ✅ Fetch finance records
  const fetchFinance = async () => {
    try {
      const res = await axios.get("https://sas-backend-smnd.onrender.com/api/finance", config);
      setRecords(res.data);
    } catch (err) {
      console.error("Finance fetch error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchFinance();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(
          `https://sas-backend-smnd.onrender.com/api/finance/${editingId}`,
          form,
          config
        );
      } else {
        await axios.post("https://sas-backend-smnd.onrender.com/api/finance", form, config);
      }
      resetForm();
      fetchFinance();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;
    try {
      await axios.delete(`https://sas-backend-smnd.onrender.com/api/finance/${id}`, config);
      fetchFinance();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record._id);
    setForm({
      type: record.type,
      title: record.title,
      amount: record.amount,
      category: record.category || "",
      description: record.description || ""
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      type: "income",
      title: "",
      amount: "",
      category: "",
      description: ""
    });
  };

  // Totals
  const totalIncome = records
    .filter((r) => r.type === "income")
    .reduce((sum, r) => sum + r.amount, 0);

  const totalExpense = records
    .filter((r) => r.type === "expense")
    .reduce((sum, r) => sum + r.amount, 0);

  const balance = totalIncome - totalExpense;

  // Monthly chart data
  const monthlyData = {};
  records.forEach((r) => {
    const month = new Date(r.createdAt).toLocaleString("default", { month: "short" });
    monthlyData[month] = (monthlyData[month] || 0) + r.amount;
  });

  const chartData = {
    labels: Object.keys(monthlyData),
    datasets: [{ label: "Monthly Finance", data: Object.values(monthlyData) }]
  };

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Finance Report", 20, 20);
    doc.text(`Total Income: $${totalIncome}`, 20, 40);
    doc.text(`Total Expense: $${totalExpense}`, 20, 50);
    doc.text(`Balance: $${balance}`, 20, 60);
    doc.save("finance-report.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Finance Department</h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={card}>Income: ${totalIncome}</div>
        <div style={card}>Expense: ${totalExpense}</div>
        <div style={card}>Balance: ${balance}</div>
      </div>

      <Bar data={chartData} />

      <button onClick={exportPDF} style={{ marginTop: "20px" }}>
        Export PDF
      </button>

      <hr />

      <form onSubmit={handleSubmit}>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit">{editingId ? "Update Record" : "Add Record"}</button>
      </form>

      <hr />

      {records.map((record) => (
        <div key={record._id} style={recordStyle}>
          <div>
            {record.title} — {record.type} — ${record.amount}
          </div>
          <div>
            <button onClick={() => handleEdit(record)}>Edit</button>
            <button
              onClick={() => handleDelete(record._id)}
              style={{ background: "red", color: "white", marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const recordStyle = {
  background: "#f4f6f9",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "space-between"
};

export default Finance;