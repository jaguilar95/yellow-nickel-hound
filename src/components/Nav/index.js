import React from "react";

function Nav(props) {
  const { sections = [] } = props;
  return (
    <div>
      <nav>
        <ul className="flex-row">
          {sections.map((section) => (
            <li className="mx-1" key={section.name}>
              {section.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
