# Server for Chris Rudnicky's Portfolio
> _updated 10.30.2019_

**Objective** : This project will serve as the server for all projects that I make for myself.Version 1 of the server will include content for my Portfolio website. In addition to being a server, this project will allow me to further explore writing SQL queries, practice using a repository pattern, and writing with C#.

___

## Table of Contents

| Chapter | Section | Chapter | Section |
|--|--|--|--|
| **I.** | [Description](#descriptoion) | | |
| **II.** | [Server Architecture](#server-architecture) | | |


___

## Description

Version 1.0 of the server will include SQL databases for the classes used by my online portfolio. As I develop more projects they will be connected to the server to persist the data in SQL databases.

___

## Server Architecture

I am building my sever following a **Repository Pattern**. 
> "A Repository pattern is a way to implement data access by encapsulating the set of objects persisted in a data store and the operations performed over them, providing a more object-oriented view of the persistence layer"(Kudchikar, 2019).

This pattern is usually used when there is need to modify data before passing it to the next stage. Some benefits of using a Repository Pattern are an increase in testability and it can be easily swapped out with various data stores without changing the API itself.

To implement this pattern I have given my server the following structure:

- server
  - API
  - Classes
  - Interfaces
  - Services
  
The **API** directory contains the endpoints that the **[Portfolio](http://www.github.com/68thandMaine/portfolio)** calls upon to get it's data. It contains a directory for controllers and a folder for DRYing up the `startup.cs` code.

The **Classes** directory contains the database connection and the models used for the portfolio (in version 1.0).

The **Interfaces** directory contains the Interfaces used by the models in the **Classes** directory.

The **Services** directory contains all the service files that are used by the server. In version 1.0 it only contains a logger service.
