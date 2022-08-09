import React, { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [sections] = useState([
    {
      name: "About Me",
      description: "A little about who Josue Aguilar is as a web developer.",
    },
    {
      name: "Portfolio",
      description: "Some of Josue Aguilar's most recent projects",
    },
    {
      name: "Contact",
      description: "How to contact Josue Aguilar for employment opportunities",
    },
    {
      name: "Resume",
      description: "Josue Aguilar's most up to date resume",
    },
  ]);

  return (
    <div>
      <Nav sections={sections} />
    </div>
  );
}

export default App;
