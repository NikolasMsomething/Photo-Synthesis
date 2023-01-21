# Photo-Synthesis

Welcome to
![Photo-Synthesis](https://user-images.githubusercontent.com/30378890/213864893-52f5cc56-c5ea-4761-b517-a623c2f5b08b.png)

The Problem:

> We need a program to help query for photo albums and log their record's titles and ids.

The Solution:

> Photo-Synthesis allows users to interact with the terminal to do so!

## Tech

This is the tech that Photo-Synthesis relies on:

- [Node.js](https://nodejs.org/en/) - Evented I/O for the backend!
- [Chalk](https://www.npmjs.com/package/chalk) - Terminal string styling!
- [Husky](https://www.npmjs.com/package/husky) - Modern native Git hooks made easy!
- [Jasmine](https://jasmine.github.io/) - An open-source testing framework for JavaScript!

## Node version

Photo-Syntesis requires [Node.js](https://nodejs.org/) v18+ to run.
This project has an `.nvmrc` file, so if you use [nvm](https://github.com/nvm-sh/nvm) please follow along to switch to the project's node version.

`$ nvm install` to install the this project's version of node (if you do not have the version already installed)

`$ nvm use` to swap to this project's version of node

## Install dependencies

`$ npm install`

## How to run

`$ npm run execute`

## How to use

You will be prompted with a question.

Enter a valid input within the available album range (1-100).

Example:

    >Which picture album do you want to view?
    >2

    [242] vitae ut sequi explicabo perspiciatis repudiandae omnis et qui
    [243] sed nobis consequatur dolores
    [244] aut doloribus quia unde quia

## Testing

Tests are located in `./spec/tests`

`$ npm run test`
