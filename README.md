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
|II|[Installation](#installation)| VI. | |
|III|[Technologies Used](#technologies-used)| VII. | |
|IV |[Reference Material](#reference-material)| VIII. | Copyright and Licensing Information |

___

### I. Description

**!! !! THIS PROJECT IS CURRENTLY UNDER DEVELOPMENT !! !!**

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

One last thing. My project uses EmailJS to send emails from the contact form to my email address. To duplicate this functionality you will need to obtain your own EmaiJS account and create a key. Instructions for how to obtain this can be found [here]('https://www.emailjs.com/docs/tutorial/overview/').

___

### III. Technologies Used

- ChartJS
- Cypress
- EmailJS
- React
- React-Transisition-Group
- Redux

___

### Reference Material

This project uses a variety of exeternal libraries, fonts, and images all created by different artists. The open source world is wonderful and you should check out ther work by visiting my [Reference](./documentation/References.md).

