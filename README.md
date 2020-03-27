# FeatherJS Template

[![Author](https://img.shields.io/badge/author-%40tuanlao-blue)](https://github.com/tuanlao)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/tuanlao/feathers-template/blob/master/LICENSE.md)

## Getting started

A boilerplate/template project for quickly building production-ready RESTful APIs using Node.js, FeathersJS, and Mongoose.

It comes with many built-in features, such as authentication using JWT, request validation, unit tests, docker support, etc. For more details about the features, check the list below.

## Features

- **ES6**
- [Express](https://expressjs.com/)
- [FeathersJS](https://docs.feathersjs.com/guides/)
- **NoSQL database**: [MongoDB](https://docs.mongodb.com/manual/)
- [Mongoose](https://mongoosejs.com/)
- **Validation**: using [feathers-hooks-common](https://feathers-plus.github.io/v1/feathers-hooks-common/) and [json-schema](http://json-schema.org/)
- **Testing**: unit tests using [Jest](https://jestjs.io/)
- **Docker support**
- **Linting**: with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- **Logger**: [winston](https://www.npmjs.com/package/winston)

## Convention

- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Always use ES6 syntax

  - No `var`, `const`/`let` instead
  - No `function`, `=>` instead, unless required by framework

## How to install

### Using Git

Clone the project from github. Change "myproject" to your project name.

```
git clone https://github.com/tuanlao/feathers-template.git ./myproject
```

### Install npm dependencies after installing

```
cd myproject
npm install
```

## How to run

### Running in development mode

```
npm start
```

Your app should now be running on :

```
http://localhost:3030
```

### Running tests

It´s a good practice to do tests at your code, so a sample of how to do that in Jest is also included in the `/test` directory

```
npm run test
```

### Linting code

Lint your code with ESLint by typing:

```
npm run lint
```
