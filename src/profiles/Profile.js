import React from "react";

export const Profile = ({ u }) => {
  return (
    <div className="card">
      <img src={u.name} alt="" />
      <h1>{u.bio}</h1>
      <p>{u.profession}</p>
    </div>
  );
};
