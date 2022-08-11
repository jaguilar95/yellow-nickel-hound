import React from "react";

function Resume() {
  return (
    <section>
      <h1>Resume and Proficiencies</h1>
      <p>
        For my resume, please follow{" "}
        <a href="https://docs.google.com/document/d/1h8w_ipHvNSLdoK8E_yJ2bGn_E6hK7AvjhB040EGKifQ/edit?usp=sharing">
          this link
        </a>
      </p>
      <div className="flex-row">
        <div className="mx-1">
          <h2>Back-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="mx-1">
          <h2>Front-end</h2>
          <ul>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL and Sequelize</li>
            <li>Mongo and Mongoose</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
