import React from "react";

function Nav(props) {
  const { sections = [] } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">j.aguilar</a>
      </h2>
      <nav>
        <ul className="flex-row">
          {sections.map((section) => (
            <li className="mx-1" key={section.name}>
              {section.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
