const { getName } = require("../userInput/index");

const beginFauxGame = () => {
  return new Promise((resolve, reject) => {
    getName()
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
};

module.exports = { beginFauxGame };
