const initialState = {
  personalProjects: {
    1: {
      name: "Eleno-r",
      description: "This is the portfolio for the talanted artist Shaina Morales. The goal was to have a very minimal site so that the content was the main focus. Navigation is controlled by a fixed menu bar, and a user can intuitively browse through a collection of Shaina's work. Code and Applicatoin Design by myself. Art Direction by Shaina Morales.",
      image: null,
      languages: ["React", "JavaScript", "Firebase"],
      percentComplete: 75,
      githubURL: "https://github.com/68thandMaine/Eleno-r",
      readMeURL: "https://github.com/68thandMaine/Eleno-r/blob/master/ReadMe.md"
    },
    2: {
      name: "Elenor Server",
      description: "The Elenor Sever project is a C# web api that uses the ORM Entity Framework Core to communicate with a SQL database. Elenor Server contains all the classes necessary for the Eleno-r application and the Mission Control application to function. Currently, Elenor Server follows a repository design pattern which is total overkill and will be refactored. For more on this see my blog post! It's a deep dive into using Entity Framework with a Repository Design pattern. I explore if this is necessary, and what the benefits are. TL / DR: Don't blindly follow tutorials.",
      image: null,
      languages: ["C#"],
      percentComplete: 25,
      githubURL: "https://github.com/68thandMaine/ElenorServer/tree/master/ElenorServer",
      readMeURL: "https://github.com/68thandMaine/ElenorServer/blob/master/ElenorServer/ReadMe.md"
    },
    3: {
      name: "Mission-Control",
      description: "I am building Mission Control for the artist Shaina Morales. This project is a web app that controls content on her portfolio. It also is a tool that she can use to source content for her collage work.",
      image: null,
      percentComplete: 25,
      languages: ["Vue", "JavaScript"],
      githubURL: "https://github.com/68thandMaine/MissionControl",
      readMeURL: "https://github.com/68thandMaine/MissionControl/blob/master/README.md"
    },
    4: {
      name: "Hypetown",
      description: "Have you ever heard a band that you wanted to see live? I'm sure you'd be hard pressed to say no. Hypetown is your friend in the entertainment age. Simply put in your location and find new music playing near you.",
      image: null,
      percentComplete: 85,
      languages: ["JavaScript", "TypeScript"],
      githubURL: "https://github.com/68thandMaine/HypeTown",
      readMeURL: "https://github.com/68thandMaine/HypeTown/blob/master/README.md"
    },
    5: {
      name: "Tumbleweed Bakehouse",
      description: "This app was built to help a bread maker with her business",
      image: null,
      percentComplete: 90,
      languages: ["C#"],
      githubURL: "https://github.com/68thandMaine/tumbleweedbakehouse",
      readMeURL: "https://github.com/68thandMaine/tumbleweedbakehouse/blob/master/README.md"
    }
  }
};

export default initialState;