const { END_GAME, SET_N_PLAYERS } = require("./constants");

const endGame = () => ({
  type: END_GAME,
  payload: {
    gameOver: true
  }
});

const setNPlayers = n => ({
  type: SET_N_PLAYERS,
  payload: {
    nPlayers: n
  }
});

module.exports = {
  endGame,
  setNPlayers
};
