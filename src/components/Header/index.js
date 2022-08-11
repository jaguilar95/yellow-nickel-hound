import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { sections = [] } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">j.aguilar</a>
      </h2>
      <Nav sections={sections} />
    </header>
  );
}

export default Header;
