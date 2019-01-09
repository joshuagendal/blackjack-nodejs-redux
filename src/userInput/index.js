const promptly = require("promptly");
const { addUser } = require("../store/actions");
const { store } = require("../store/index");
const { dispatch } = store;

const getName = () => {
  return promptly
    .prompt("What is your name?: ")
    .then(result => {
      dispatch(addUser(result));
      resolve(result);
    })
    .catch(err => reject(err));
};

module.exports = {
  getName
};
