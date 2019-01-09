const { END_GAME, ADD_USER } = require("./constants");

const endGame = () => ({
  type: END_GAME,
  payload: {
    gameOver: true
  }
});

const addUser = user => ({
  type: ADD_USER,
  payload: {
    user,
    gameOver: true
  }
});

module.exports = {
  endGame,
  addUser
};
