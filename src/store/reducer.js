const {
  END_GAME,
  SET_N_PLAYERS,
  SET_HANDS,
  SET_N_PLAYERS_CHIPS
} = require("./constants");

const initialState = {
  gameOver: false,
  nPlayers: null
};

const gameReducer = (state = initialState, action) => {
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
  gameReducer,
  chipsReducer
};
