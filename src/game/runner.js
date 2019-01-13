const { getName } = require("../userInput/index");
const { store } = require("../store/index");

const beginFauxGame = () => {
  return getName()
    .then(result => {
      console.log("begin game: ", result);
      store.dispatch(addUser(result));
      return result;
    })
    .catch(err => {
      return err;
    });
};

module.exports = { beginFauxGame };
