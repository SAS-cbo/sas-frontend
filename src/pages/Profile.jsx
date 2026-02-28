import React from "react";

const Profile = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name || "N/A"}</p>
          <p><strong>Email:</strong> {user.email || "N/A"}</p>
          <p><strong>Role:</strong> {user.role || "N/A"}</p>
        </>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default Profile;