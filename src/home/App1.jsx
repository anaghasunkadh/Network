import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { useParams } from "react-router";
import data from "./data.json";
import { Navbar, ProfileInfo, ProfileTab, SkillsAbout } from "./home";
export function App1() {
  let { id } = useParams();
  const [index, setIndex] = useState(id);
  return (
    <div>
      <Navbar />
      <ProfileInfo data={data} index={index} />
      <ProfileTab />

      <SkillsAbout data={data} index={index} setIndex={setIndex} />
    </div>
  );
}

export default App1;
