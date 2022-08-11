import React from "react";

function ProjectList() {
  const photos = [
    {
      name: "Voting with Friends",
      description: "Create polls and share with friends",
      docName: "VotingWithFriends.png",
    },
    {
      name: "Budget Tracker",
      description: "Track your expenses on the go",
      docName: "secure-sierra-42105.herokuapp.com_.png",
    },
    {
      name: "Note Taker",
      description: "Dynamically create notes saved locally",
      docName: "aqua-iron-dane.herokuapp.com_(iPad Air).png",
    },
    {
      name: "Deck of Many Things",
      description: "Randomly draw from the Deck of Many Things",
      docName: "127.0.0.1_5500_domt-app_index.html(iPad Air).png",
    },
    {
      name: "Weather Dashboard",
      description: "Get local 5-day weather forecast",
      docName: "127.0.0.1_5500_index.html_.png",
    },
    {
      name: "Work Day Scheduler",
      description: "A simple calendar for scheduling your work day",
      docName: "jaguilar95.github.io_gray-brass-spaniel_.png",
    },
  ];
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="flex-row">
        {photos.map((image) => (
          <img
            src={require(`../../assets/ProjectList/${image.docName}`)}
            alt={image.description}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
