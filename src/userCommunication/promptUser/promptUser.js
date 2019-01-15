const promptly = require("promptly");

const getNPlayers = () => {
  return promptly
    .prompt("How many players would you like to include in this game?")
    .then(n => {
      console.log("n: ", n);
      return n;
    })
    .catch(err => console.log(err));
};

module.exports = {
  getNPlayers
};
