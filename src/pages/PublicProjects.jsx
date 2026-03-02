import React, { useEffect, useState } from "react";
import axios from "axios";

const PublicProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        "https://sas-backend-smnd.onrender.com/api/projects"
      );
      setProjects(res.data);
    };

    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Our Projects</h2>

      {projects.map((project) => (
        <div
          key={project._id}
          style={{
            background: "#fff",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{project.title}</h3>

          {project.images && project.images.length > 0 && (
            <img
              src={project.images[0]}
              alt="project"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          )}

          <p>{project.description}</p>

          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Budget:</strong> KES{project.budget}</p>
          <p><strong>Location:</strong> {project.location}</p>
        </div>
      ))}
    </div>
  );
};

export default PublicProjects;