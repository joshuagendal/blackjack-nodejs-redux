const { END_GAME, SET_N_PLAYERS } = require("./constants");

const initialState = {
  gameOver: false,
  nPlayers: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case END_GAME:
      return {
        ...state,
        gameOver: true
      };
    case SET_N_PLAYERS:
      return {
        ...state,
        nPlayers: action.payload.nPlayers
      };
    default:
      return state;
  }
};

module.exports = {
  reducer
};
