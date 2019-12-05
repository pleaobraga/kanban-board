# React Scaffold

This is a React based project, which I built from scratch, that helps you to quickly start your own new React Project.

It is integrated with the newest libraries of:

- Redux
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

There is a small implementation that can helps you to:

- Improve the architecture of your project
- Test you project with Jest and Enzyme
- Increase the performance of your project using dynamic imports
- See practical examples of the new \***\*React Hooks feature**
- See some implementation of the new React-redux features like useSelector and useDispatch
- Document your project with Storybook
- Improve your code using Prettier and ESlint

# Quick Start

## Installing dependencies

To start the project use this command in your terminal

```
yarn i
```

in your terminal to install all dependencies

## Starting the project

To start the project use this command in your terminal

```
yarn start
```

wait for a few seconds and the project will open a new tab in your browser automatically

### Changing default port

The default port is 3000 but if you want to change it to the port 3000 use this command

```
yarn start -- --port=3000
```

## Build the project

```
yarn run build
```

## Testing the project

There are some commands to test the project

### Test all project

```
yarn run test
```

This command executes the Jest and test all **.test.js** files in your project

### Watch Tests in the project

```
yarn run test:watch
```

This command executes the Jest watchAll and observes all your tests

### Update snapshots

```
yarn run test:update
```

This command executes update all snapshots

### Check the coverage

```
yarn run test:coverage
```

This command executes Jest coverage and checks the coverage of your tests

## Using Storybok

To start the Storybook use the command:

```
yarn run storybook
```

This will open a new webpage with Storybook running on port 9000

### Addons

This storybook is already configured with some addons like Knobs, Actions, and Info.

### Create a new story

To create a new story you create the file {yourComponent}.stories.js
Export the story and import it to **./.storybook/index.stories.js**
You can check this file **./.storybook/index.stories.js** and other examples in the project to better understand the process.

### Create a new story with Redux

Check the **src/pages/ContentPage/ContentPage.stories.js** to see how to use the Redux with Storybook

## Commits

This project uses Husk.js and everytime you push the code it will run the pre-commit task to check the lint and run all tests, **so the code will only be pushed if it follows the lint rules and does not have any test errors.**

## Project Architecture

The project achitechture is page based, and usin SOLID principles and the source folder is like:

```
src
  components
  pages
  reducers
  utils
  routes.js
  index
```

### Components Pages

The architecture for the js files is like follow the example

```
components
  Component
    index.js
    Component.test.js
    Component.storie.js (what makes sense)
    Component.scss (what makes sense)
    Component.jsx
```

So each component has its on test, storie, jsx file and a index to export all of it.

This architechture is easy to mantain because to fix a component you can go in its folder and change ereything from it.

### Reducers

For this example I did not split the reducer from the action creators because this project is too small, but if the project increase so slit reducer from actions.

### Utils

In the utils folder I keep some functions and the contants files

## Dynamic Import and Performance

Nowadays we need to pay attention on performace, if we do not take care of it your project wold work but slowly and the client expetrience become very frustated.

I created in ths project a component called DynamicImport, it is integrate with the webpack so you can create diferent bundles with it and import them dynamically so you only will import the correct bundle for that page.

It is applyed on the **routes.js** file, so each page you import will automaticaly create a new bandle performaticly bundle.

Check on the routes file how to use it and check the DynamicImport component to see how it works

This component is better than **React.lazy** because it can handle 3 diferents situation:

- Loading
- Error
- Component

diferent from **React.lazy** and **React.Suspense** which could only handle:

- Loading
- Component

## Vendors

The webpack is configurated to create a vendors file with common libraries like react, redux ...
