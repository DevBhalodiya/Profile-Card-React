import React from "react";
import "./ProfileCard.css"; // Import CSS for styling

const ProfileCard = ({ name, photo, bio }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s profile`} className="profile-photo" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
