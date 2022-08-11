import React from "react";

function ProjectList() {
  const photos = [
    {
      name: "Voting with Friends",
      description: "Create polls and share with friends",
      docName: "VotingWithFriends.png",
      github:
        "https://github.com/jaguilar95/thejake989-PurpleAluminiumShih-Tzu",
    },
    {
      name: "Budget Tracker",
      description: "Track your expenses on the go",
      docName: "secure-sierra-42105.herokuapp.com_.png",
      github: "https://github.com/jaguilar95/navy-bronze-terrier",
    },
    {
      name: "Note Taker",
      description: "Dynamically create notes saved locally",
      docName: "aqua-iron-dane.herokuapp.com_(iPad Air).png",
      github: "https://github.com/jaguilar95/aqua-iron-dane",
    },
    {
      name: "Deck of Many Things",
      description: "Randomly draw from the Deck of Many Things",
      docName: "127.0.0.1_5500_domt-app_index.html(iPad Air).png",
      github: "https://github.com/tj-tieso/domt-app",
    },
    {
      name: "Weather Dashboard",
      description: "Get local 5-day weather forecast",
      docName: "127.0.0.1_5500_index.html_.png",
      github: "https://github.com/jaguilar95/white-mercury-dalmatian",
    },
    {
      name: "Work Day Scheduler",
      description: "A simple calendar for scheduling your work day",
      docName: "jaguilar95.github.io_gray-brass-spaniel_.png",
      github: "https://github.com/jaguilar95/gray-brass-spaniel",
    },
  ];
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="flex-row">
        {photos.map((image) => (
          <a href={image.github}>
            <img
              src={require(`../../assets/ProjectList/${image.docName}`)}
              alt={image.description}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
