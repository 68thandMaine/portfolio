const initialState = {
  personalProjects: {
      1: {
        name: "Eleno-r",
        description: "The Eleno-r project is a React single page application that serves as a website portfolio (similar to the one you are visiting) for Shaina Morales. A visitor to Eleno-r will have the option to view Shaina's work and contact her. Eleno-r is powered by React, Redux, Firebase, and a C# Web API.",
        image: null,
        languages: ["React", "JavaScript"],
        // readMeURL: "https://"
      },
      2: {
        name: "Elenor Server",
        description: "The Elenor Sever project is a C# web api that uses the ORM Entity Framework Core to communicate with a SQL database. Elenor Server contains all the classes necessary for the Eleno-r application and the Mission Control application to function. Currently, Elenor Server follows a repository design pattern which is total overkill and will be refactored. For more on this see my blog post! It's a deep dive into using Entity Framework with a Repository Design pattern. I explore if this is necessary, and what the benefits are. TL / DR: Don't blindly follow tutorials.",
        image: null,
        languages: ["C#"],
        // readMeUrl: "https://"
      },
      3: {
        name: "Mission-Control",
        description: "Control is necessary in all our lives. Mission-Control will not help you unless you want control over your online presence as a creator. Use Mission-Control to maintain your website portfolio and never worry about how you'll assemble all your work in one place ever again.",
        image: null,
        languages: ["Vue", "JavaScript"]
      },
    4: {
      name: "Hypetown",
      description: "Have you ever heard a band that you wanted to see live? I'm sure you'd be hard pressed to say no. Hypetown is your friend in the entertainment age. Simply put in your location and find new music playing near you.",
      image: null,
      languages: ["JavaScript", "TypeScript"]
    },
    5: {
      name: "Tumbleweed Bakehouse",
      description: "This app was built to help a bread maker with her business",
      image: null,
      languages: ["C#"]
    }
  }
};

export default initialState;