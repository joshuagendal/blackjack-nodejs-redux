const { END_GAME, SET_N_PLAYERS, SET_HANDS } = require("./constants");

const initialState = {
  gameOver: false,
  nPlayers: null,
  hands: null
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
    case SET_HANDS:
      return {
        ...state,
        hands: action.payload.hands
      };
    default:
      return state;
  }
};

module.exports = {
  reducer
};
