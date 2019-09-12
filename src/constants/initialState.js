const initialState = {
personalProjects: {
    1: {
      name: "Elenor",
      description: "Elenor is a portfolio for the talanted artist Shaina Morales. The overall goal was to develop a  minimal site so that the content was the main focus. Navigating throughout the portfolio is controlled by a fixed menu bar, and a user can intuitively browse through a collection of Shaina's work sorted into galleries by category. Code and application design by myself. Art direction by Shaina Morales.",
      image: null,
      languages: ["React", "JavaScript", "Firebase"],
      percentComplete: 75,
      githubURL: "https://github.com/68thandMaine/Eleno-r",
      readMeURL: "https://github.com/68thandMaine/Eleno-r/blob/master/ReadMe.md"
    },
    2: {
      name: "Elenor Server",
      description: "The Elenor Sever project is a C# web api that uses the ORM Entity Framework Core to communicate with a SQL database. Elenor Server contains all the classes necessary for the Elenor application and the Mission Control application to function. Currently, Elenor Server follows a repository design pattern which is total overkill and is currently being refactored into a simplier version.",
      image: null,
      languages: ["C#"],
      percentComplete: 25,
      githubURL: "https://github.com/68thandMaine/ElenorServer/tree/master/ElenorServer",
      readMeURL: "https://github.com/68thandMaine/ElenorServer/blob/master/ElenorServer/ReadMe.md"
    },
    3: {
      name: "Mission-Control",
      description: "The Mission Control application is the admin side to the Elenor portfolio. This tool grants complete control over what is displayed on Elenor by interfacing with the Elenor Server web api. In addition to being a light CMS tool, Mission Control also contains external api's to different open source media vendors giving a user access to scores of vintage magazine pictures, ads, and art.",
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
      languages: ["Angular", "TypeScript"],
      githubURL: "https://github.com/68thandMaine/HypeTown",
      readMeURL: "https://github.com/68thandMaine/HypeTown/blob/master/README.md"
    },
    5: {
      name: "Tumbleweed Bakehouse",
      description: "Tumbleweed Bakehouse was a code school project for a classmates friend who owns a bakery in Colorado. This project uses the C# MVC pattern to manage the inventory and allow for cutomers to place orders for bread. Data is persisted to a MySQL datatable.",
      image: null,
      percentComplete: 90,
      languages: ["C#", "SQL"],
      githubURL: "https://github.com/68thandMaine/tumbleweedbakehouse",
      readMeURL: "https://github.com/68thandMaine/tumbleweedbakehouse/blob/master/README.md"
    }
  }
};

export default initialState;