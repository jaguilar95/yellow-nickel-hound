import React from "react";

function Nav(props) {
  const { sections = [], currentSection, setCurrentSection } = props;
  return (
    <div>
      <nav>
        <ul className="flex-row">
          {sections.map((section) => (
            <li
              className={`mx-2 ${
                currentSection.name === section.name && "navActive"
              }`}
              key={section.name}
            >
              <span onClick={() => setCurrentSection(section.name)}>
                {section.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
