# blackjack-nodejs-redux

Blackjack game made w/ nodejs as server and redux as state manager. No UI, game is run through npm CLI package promptly.

INSTALL INSTRUCTIONS:
clone
cd bjack-node
npm i
npm start

RUN TESTS:
jest

I am writing this blackjack app for two reasons:

1. To solidify my foundation of software development principles, mainly of seperation of concerns. When writing front-end or back-end apps with
   reactjs or nodejs, so much focus is inherently devoted to learning the proper frameworks/associated tools to accomplish application specifics.
   One must deeply grasp software development principles and, hopefully, use the seemingly endless node modules in a way that extends
   these proper principles. This project will be a way for me to explore using minimum npm modules to build an application that is built with
   proper principles in mind. Mainly seperation of concerns, and how this seperation of concerns inherently leads to code that is easier to test
   and easier for others to understand.

2. To explore the javascript programming language more deeply, using classes when appropriate.

\*\*NOTE: I am using promises rather than async/await to more directly work with the promise API. I undderstand that async/await makes code cleaner, but a fantastic foundation of how promises work leads to proper use of async/await.

TOOLS USED
redux for app state management.
promptly to communicate with the user of the terminal and accept user's input
jest for unit testing

DIAGRAM OF APPLICATION BEHAVIOR AND HOW CONCERNS WILL BE SEPERATED

USER <-----> PROMPTLY <-----> GAME CTR <-----> REDUX STORE

... The game controller will be the central controller for the game. The game controller will utilize outsourced promptly functions to communicate w/ user. This controller will also dispatch actions to and retrieve game data info
(i.e. the players' cards) from the redux store.

... READ ME IS WORK IN PROGRES ...
