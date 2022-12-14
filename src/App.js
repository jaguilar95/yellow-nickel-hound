import React, { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

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

  const [currentSection, setCurrentSection] = useState(sections[0]);

  function setSection() {
    switch (currentSection) {
      case "About Me":
        return <About />;
        break;
      case "Portfolio":
        return <ProjectList />;
        break;
      case "Contact":
        return <Contact />;
        break;
      case "Resume":
        return <Resume />;
        break;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>{setSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
