# Hello and Welcome to my Personal Portfolio :)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f794c326-2545-40b3-811f-dca0f79417ac/deploy-status)](https://app.netlify.com/sites/naughty-williams-0f0c7a/deploys)
_Created by Chris Rudnicky._

___

This repository is for the project website and contains all the source code necessary for providing a complete clone of my portfolio.

___

## Table of Contents

| Section | Title | Section | Title |
|---|---|---|---|
|I|[Description](#description)|V.| [Project Architecture](#project-architecture) |
|II|[Installation](#installation)| VI. | [Next Steps](#next-steps)|
|III|[Technologies Used](#technologies-used)| VII. | [Testing The App](#testing-the-app) |
|IV |[Reference Material](#reference-material)| VIII. | Copyright and Licensing Information |

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
