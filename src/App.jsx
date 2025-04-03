import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" }}>
      <ProfileCard
        name="Dev Bhalodiya"
        photo="https://randomuser.me/api/portraits/men/1.jpg"
        bio="Web Developer & React Enthusiast."
      />
    </div>
  );
}

export default App;
