# Kanban Board - Server

This is a Node based project and server the back end of the application

it uses hapi as a node framework an its modules

- hapi
- hapi/boom
- hapi/glue
- hapi/joi

# Quick Start

## Installing dependencies

To start the project use this command in your terminal

```
yarn add
```

in your terminal to install all dependencies

## Config the .env

Before start the server do not forget to set up the .env file, with your db credentials, define the port ...

## Starting the project

To start the project use this command in your terminal

```
yarn run start
```

wait for a few seconds and the project will open a new tab in your browser automatically

## Project Architecture

### Root folder

The project achichitecture was based on SOLID principles and the server folder is like:

```
server
  config
  models
  plugin
  schema
```

### Routes/plugins

it was used the hapi/glue in this project so the plugin solution was implemented.

The plugins were plited into separate folders each one and its achitecture is:

```
plugin
  handler
  index
```

handler contains the handlers functions of the routes and the index exports the routes to the manifest

### DataBase and validations

It was used the **sequelized** library to handle with the data base, **hapi/joy** and **hapi/boom** to validate and handle the messages

it was created 2 different folders models, and schema to make the code more reusable.

```
server
  schema
    index
  models
    model
    index
```

the schema folder handle with the Joi schema, and the model the sequelize models

### Configurations

there is one folder on the served to handle the configurations

```
server
  config
    config
    manifest
  .env
```

the config file exports the .env configurations to the application and the manifests deal with routes configs based on **hapi/glue** especification

it was used the babel to transpile the JS code, so the new javascrip features were applied into it, like import and export
