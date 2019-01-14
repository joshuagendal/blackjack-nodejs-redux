const promptly = require("promptly");
const { addUser } = require("../store/actions");
const { store } = require("../store/index");

const getName = () => {
  return promptly
    .prompt("What is your name?: ")
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log("ERROR IN GETNAME CATCH BLOCK: ", err);
      return err;
    });
};

module.exports = {
  getName
};
