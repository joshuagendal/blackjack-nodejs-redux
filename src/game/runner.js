const { getName } = require("../userInput/index");

const beginFauxGame = () => {
  return getName()
    .then(result => {
      console.log("begin game: ", result);
      return result;
    })
    .catch(err => {
      return err;
    });
};

module.exports = { beginFauxGame };
