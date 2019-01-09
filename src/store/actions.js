const { END_GAME, ADD_USER } = require("./constants");

const endGame = () => ({
  type: END_GAME
});

const addUser = user => ({
  type: ADD_USER,
  user
});

module.exports = {
  endGame,
  addUser
};
