# The Portfolio of Chris Rudnicky
[![Netlify Status](https://api.netlify.com/api/v1/badges/f794c326-2545-40b3-811f-dca0f79417ac/deploy-status)](https://app.netlify.com/sites/naughty-williams-0f0c7a/deploys)

_Created by Chris Rudnicky._

> Version: 1.0  
> Last ReadMe Update: 09/16/19
___

This repository is for the project website and contains all the source code necessary for providing a complete clone of my portfolio.

___

## Table of Contents

| Section | Title | Section | Title |
|---|---|---|---|
|I|[Description](#I.-description)|V.| [Project Architecture](#V.-project-architecture) |
|II|[Installation](#II.-installation)| VI. | [Next Steps](#VI.-next-steps)|
|III|[Technologies Used](#III.-technologies-used)| VII. | [Testing The App](#VII.-testing-the-app) |
|IV |[Reference Material](#IV.-reference-material)| VIII. | [Copyright and Licensing Information](#VII.-copyright-and-licensing-information) |

___

### I. Description

As noted earlier, this repoitory contains the materials and source code necessary for building my online portfolio. I have chosen to keep **this a frontend only project** for the time being, but plan to incorporate a .NET backend in future versions. My portfolio serves as a code playground of sorts for me and is where I use new tools and practice my development skills. I have designed and built all of this website, and integrated external API's and frameworks to acheive a look and feel I can be proud of. Please refer to the [Reference Material](#reference-material) for further information.

Throughout the course of this project I will be taking notes and documenting my devlopment experience as reference material which will eventually turn into blog content. Ultimately I plan to use this website as a platform to display my creative content, web portfolio, and blog.

Version 1 will include the following main views:

- Home
- About
- Projects
- Contact
___

### II. Installation

To install this application on your personal machine **you will need to have node installed** on your machine. Then use the following instructions to get started.

| Step | Command | Instruction |
|---|---|---|
| **1**| _e.g._ `$ cd documents/projects/` | Open the command line and navigate to the directory you wish to clone into. |
| **2**| `$ git clone https://github.com/68thandMaine/portfolio.git && cd portfolio` | Clone down the repository and move the command line focus into the new directory. |
|**3**| `$ npm install` | Install the project dependencies with NPM. |

At this point you now will have the most current version of my portfolio that is **in production**. There are several commands you may run from here:

|Command| Purpose|
|---|---|
|**`$ npm run start`**| Running this command will start the development server on localhost:3000.|
|**`$ npm run cypress`**| Running this command will open the Cypress Test Runner where you can view all **integration tests** for the website views. |
|**`$ git checkout -track origin/develop`** | This command will create a local branch  that tracks the develop branch. By using this command you will be able to explore the new features that have been successfully built in preparation for the next version release.|

One last thing. My project uses EmailJS to send emails from the contact form to my email address. To duplicate this functionality you will need to obtain your own EmaiJS account and create a key. Instructions for how to obtain this can be found [here](https://www.emailjs.com/docs/tutorial/overview/).

___

### III. Technologies Used

- ChartJS
- Cypress
- EmailJS
- React
- React-Transisition-Group
- Redux

___

### IV Reference Material

This project uses a variety of exeternal libraries, fonts, and images all created by different artists. The open source world is wonderful and you should check out their work by visiting my [Reference](./documentation/References.md).

### V. Project Architecture

The main directory has two folders that will be of interest to engineers:

1. /cypress
      - This directory contains the files necessary for creating and configuring integration tests using [Cypress.io](https://www.cypress.io/).
      - Note that a ```cypress.json``` file is also in the top level directory. This file contains global configurations for the testing suites.
2. /src
      - This directory contains the meat of the project. I will explain more below.

___

#### The /src directory

The table below provides an overview of each subdirectory within ```/src```. More information about the subdirectories contents can be found by following the appropriate link.

|Directory|Purpose|More Information|
|---|---|---|
|`/actions`| This directory is used to hold the functions that send information to the Redux store. | My portfolio uses Redux to manage content on the projects page through api calls. As of **9/16/19** only two actions exist: one for getting repos, and the other for recieving repos from Github.|
|`/assets`| The assets directory holds the static content I use for custom fonts and imagery| [For more infromation about `/assets` click me](/documentation/directories/Assets.md)|
|`/components`|The components directory holds the individual React components that make up the various pags a user can visit| [For more infromation about `/components` click me](/documentation/directories/Components.md)|
|`/constants`|This directory is used to hold the constants for my portfolio.| As of **9/16/19** this directory contains an file for the project action types, the intial state file that I use for my projects in development, and an index file.|
|`/reducers`| The reducer directory holds the Redux reducers I use for my projects.| [For more infromation about `/reducers` click me](/documentation/directories/Reducers.md)|
|`/routes`| This directory contains the router file for the application| I decided to use declare my router as a component so that I could organize all my routes in one file. Additionally this allowed me to use [**React Transisition Group**](https://reactcommunity.org/react-transition-group/) to animate my route changes across the different views.|
|`/services`|This directory holds files concerend with external API integration.| [For more infromation about `/services` click me](/documentation/directories/Services.md)|
|`/styles`| This directory contains global styles used in the application| I placed fonts, animations, and a normalizer css file in this directory.|
|`/views` | This directory holds higher order components used to create each page a visitor sees.|[For more infromation about `/views` click me](/documentation/directories/Views.md)|
> Please note that as of **9/16/19** the supplemental files have not been created.

___

### VI. Next Steps

This is currently version 1.0 of my portfolio, and I fully intend to continue to build on this project throughout the rest of my life. I have plans to include several new features, and will undoubtedly change the layout and conent as the project grows. That being said there are several refactors and devops projects that must be addressed before any new features are added.

#### Major Refactors

I built version 1 of my portfolio hastily, and as a way to reintroduce myself to React after a stint working in Vue. This has left my code full of refactorable code. Below are the refactors I've identified **as of 09/16/19**.

|Refactor| Reason | Complete|
|---|---|---|
| Add media queries| My portfolio was not built with a mobile first mindset. I will refactor the project to be mobile friendly | [X] |
| Change class based components to functional components. | Halfway through development I decided to start exploring the **React Hooks API**. I quickly began to wite functional components using `setState` and `useEffect`, but did not change many of the older class based components over. **Using of the Hooks API will eliminate my need for Redux and make my components easier to understand**.| [ ]  |
| Integrate SASS | The performance of the application can be improved by decreasing my CSS bundle, and the HTTP requests that are made from importing all of the CSS files in each view and component. **SASS will allow me to us nesting, partials, variables, and mixins to increase control over my CSS and make it more efficient and performant**. | [ ] |

#### Dev Ops

Version 1 contains some integration test files, but no unit tests or a CI/CD pipeline. Before creating new feature it is critica that the integrity of my application is ensured. I will finish writing integration tests with Cypress and add unit Tests with Jasmine before investigating CI tools.

    [ ] Write integration tests for the application views.

    [ ] Write unit tests for the application funtions.

    [ ] Create a CI/CD pipeline

#### Features

The next versions of the application will grow the capabilites of the portfolio, and possibly add layout changes over time.

|Feature | Purpose | Complete |
|---|---|---|
| Backend ***refactor*** | As the portfolio project grows I will need more control over managing the content. I will create a C# backend and a MySQL database to back my portfolio content. | [ ] |
| Blog | As I develop, I write to help me remember. I intend to publish these writings on my portfolio because everyone else is doing it. Maybe it'll help someone. | [ ] |
|Photography Gallery | I want my portfolio to be about me, not just my development. I love photography and have a ton of pictures on my laptop. I will make a gallery to display them all that will start as a view on my portfolio before becoming a standalone website. | [ ] |

[ ] Layout Refactor.

- After checking off all the above boxes I will create a new layout and theme for my portfolio.

___

### VII. Testing The App

> As of **09/16/19** there are only a few integration tests in the app,

My portolio will have both unit tests and integration tests written for all views and paths before advancing to the next version. I currently am using **Jest** and **Cypress** for the unit and end-to-end testing frameworks.

#### End-To-End Tests

I use [The JavaScript End to End Testing Framework Cypress](https://www.cypress.io) and you should too.

Cypress is an open source testing framework that creates a cleaner development experience. It increases the debugability of tests, provides real time reloads, can be incorporated into a CI/CD pipeline, and has a pretty nifty test runner. Developers can harness the power of Cypress for total network control over tests and managing the state of the application without using realtime HTTP requests.

I use Cypress to test the routing, style, and behavior of the application and the various integrated components.

For more information on the tests that I have written [Please click here](./documentation/IntegrationTests.md).

#### Unit Tests

There are currently no unit tests on my portfolio, but I am adding them as soon as possible.

#### CI/CD Pipeline

I am using Jenkins and CircleCI to create a CI/CD pipeline. It does not exist, but will soon.

___

### VIII. Copyright and Licensing Information

For specific references to open source creators please refer to [the reference section](#IV.-reference-material). 

This is my personal portfolio. All images were taken by me, Chris Rudnicky. Please reference me if you take an image off this page.
