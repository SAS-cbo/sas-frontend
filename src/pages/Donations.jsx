import React, { useEffect, useState } from "react";
import axios from "axios";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    donorName: "",
    amount: "",
    description: ""
  });

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const fetchDonations = async () => {
    const res = await axios.get(
      "https://sas-backend-smnd.onrender.com/api/donations",
      config
    );
    setDonations(res.data);
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(
        `https://sas-backend-smnd.onrender.com/api/donations/${editingId}`,
        form,
        config
      );
    } else {
      await axios.post(
        "https://sas-backend-smnd.onrender.com/api/donations",
        form,
        config
      );
    }

    resetForm();
    fetchDonations();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this donation?")) return;

    await axios.delete(
      `https://sas-backend-smnd.onrender.com/api/donations/${id}`,
      config
    );

    fetchDonations();
  };

  const handleEdit = (donation) => {
    setEditingId(donation._id);
    setForm({
      donorName: donation.donorName,
      amount: donation.amount,
      description: donation.description
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      donorName: "",
      amount: "",
      description: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Donations</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Donor Name"
          value={form.donorName}
          onChange={e => setForm({ ...form, donorName: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })}
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit">
          {editingId ? "Update Donation" : "Add Donation"}
        </button>
      </form>

      <hr />

      {donations.map(d => (
        <div key={d._id} style={donationStyle}>
          <div>
            <strong>{d.donorName}</strong> — ${d.amount}
            <p>{d.description}</p>
            {d.image && (
              <img
                src={d.image}
                alt="donation"
                style={{ width: "150px", marginTop: "10px" }}
              />
            )}
          </div>

          <div>
            <button onClick={() => handleEdit(d)}>Edit</button>
            <button
              onClick={() => handleDelete(d._id)}
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

const donationStyle = {
  background: "#f4f6f9",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "15px",
  display: "flex",
  justifyContent: "space-between"
};

export default Donations;