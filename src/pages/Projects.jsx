import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "orphanage",
    location: "",
    budget: 0,
    status: "planning"
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const fetchProjects = async () => {
    const res = await axios.get("https://sas-backend-smnd.onrender.com/api/projects");
    setProjects(res.data.reverse()); // newest first
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSelectedImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    selectedImages.forEach((img) => data.append("images", img));

    const res = await axios.post("https://sas-backend-smnd.onrender.com/api/projects", data);
    setProjects([res.data, ...projects]);
    resetForm();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://sas-backend-smnd.onrender.com/api/projects/${id}`);
    setProjects(projects.filter((p) => p._id !== id));
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData(project);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    selectedImages.forEach((img) => data.append("images", img));

    const res = await axios.put(
      `https://sas-backend-smnd.onrender.com/api/projects/${editingId}`,
      data
    );

    setProjects(
      projects.map((p) => (p._id === editingId ? res.data : p))
    );

    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setSelectedImages([]);
    setFormData({
      title: "",
      description: "",
      category: "orphanage",
      location: "",
      budget: 0,
      status: "planning"
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>NGO Projects</h2>

      {/* FORM */}
      <form onSubmit={editingId ? handleUpdate : handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="orphanage">Orphanage</option>
          <option value="water">Water</option>
          <option value="street_feeding">Street Feeding</option>
          <option value="education">Education</option>
          <option value="eid_event">Eid Event</option>
        </select>
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="number" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="planning">Planning</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>

        <input type="file" multiple onChange={handleImageChange} />

        <button type="submit">
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      <hr />

      {projects.map((project) => (
        <div key={project._id} style={{ background: "#fff", padding: "20px", marginBottom: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h3>{project.title}</h3>

          {project.images && project.images.length > 0 && (
            <Slider {...sliderSettings}>
              {project.images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt="project"
                    style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "10px" }}
                  />
                </div>
              ))}
            </Slider>
          )}

          <p>{project.description}</p>
          <p><strong>Status:</strong> {project.status}</p>

          <button onClick={() => handleEdit(project)}>Edit</button>
          <button onClick={() => handleDelete(project._id)} style={{ marginLeft: "10px", background: "red", color: "white" }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;