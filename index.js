// const { beginFauxGame } = require("./src/game/runner");

// beginFauxGame();

const promptly = require("promptly");

var x = () => {
  promptly
    .prompt("Name")
    .then(nameResult => {
      console.log("prom: ", nameResult);
    })
    .catch(err => console.log("error: ", err));
};

// ...call fn
x();
/*
==========
The above is the same as the following
==========
*/

// let answer;
// var x = async () => {
//   const nameResult = await promptly.prompt("Name");
//   answer = nameResult;
//   // console.log(nameResult);
// };

// x();
// console.log("bottom: ", answ);
