# React Repo Finder.

## Demo
Demo: https://lendo-cart.netlify.app/ <br/>

## Demo status
[![Netlify Status](https://api.netlify.com/api/v1/badges/d7246197-587b-46a6-9b8d-36353e5e07ad/deploy-status)](https://app.netlify.com/sites/lendo-cart/deploys)

<br/><br/>


## Description :newspaper:

Lendo cart is an assigment given from lendo group to asses the technical capability of the candidate.
This is my take on the assignment.
<br/>
This project uses react and its core features to complete the given task.
<br/><br/>

## Installing :wrench:

- Copy the url https://github.com/charitha95/lendo-cart.git
- Do a `git clone` with the url.
- Run `npm i` in terminal to install modules.
  <br/><br/>

## Running and testing the project :runner:

- Run `npm run start` in terminal to run the project. This will spin up the app and open in a browser.<br/>
- Uni Test `npm run test:unit` in terminal to run the unit tests. This will run all unit tests inside the unit folder.
- E2E Test `npm run test:e2e` in terminal to run the e2e tests. This will spin up a server and open in a testing broweser.
  <br/><br/>

## Plugins and libraries used

- typescript `^4.7.4`
- eslint `^8.18.0`
- prettier `^2.7.1`
- husky `^8.0.0`
- react-router-dom `^6.3.0`
- sass `^1.53.0`
- framer-motion `^6.3.16`
- jest `^27.5.2`
- testing library `^^13.3.0`
- pupperteer `^2.7.1`
- jest-pupperteer `^6.1.0`

<br/><br/>

## Configurations

#### ts

App has been initialized with `--template typescript`, which gives you the typescript configuration out of the box.

#### ESLint

This project uses `airbnb` stye guideline for eslint rules, some i've overriden according to the project's requirements.

#### Prettier

Uses an own set of formatting rules and configurations to make sure the project follows a good file format mechanism.

#### Husky

Configured to run eslint before comming anything to the branch with `huskey` pre commit hook.

#### Jest

Uses jest to run test cases written with `testing-library`.

#### Pupperteer

`Pupperteer` used to automate and run e2e test cases. Read more about configurations in `jest.config.js` and `jest-puppeteer.config.js`.

<br/><br/>

## Best practices :sparkles:

Following are some of the features and best practices that this project concered about.

✅ Separation of Concern (SoC).

✅ Single source of truth.

✅ Component based architecture.

✅ Typescript.

✅ Use cutting edge features from react (hooks and context api).

✅ Pure CSS without any css frameworks.

✅ Motion graphic user feedbacks.

✅ CSS Preprocessors.

✅ CSS Modules.

✅ Linting.

✅ File formatting.

✅ Pre commit hooks.

✅ Unit Testing.

✅ E2E Testing.

✅ Sleek UI with reusable components.
