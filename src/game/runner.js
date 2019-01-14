const { getName } = require("../userInput/index");
const { addUser } = require("../store/actions");
const { store } = require("../store/index");

const beginFauxGame = () => {
  return getName()
    .then(result => {
      return store.dispatch(addUser(result));
    })
    .catch(err => {
      return err;
    });
};

module.exports = { beginFauxGame };
