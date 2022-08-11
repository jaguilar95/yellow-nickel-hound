import React, { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

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
      <Header sections={sections} />
      <main>
        <About />
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
