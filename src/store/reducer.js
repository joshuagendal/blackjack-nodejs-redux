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
    case SET_HANDS:
      return {
        ...state,
        hands: action.payload.hands
      };
    default:
      return state;
  }
};

const playersChipsInitialState = {
  players: null
};

const chipsReducer = (state = playersChipsInitialState, { type, payload }) => {
  switch (type) {
    case SET_N_PLAYERS_CHIPS:
      return {
        players: payload.players
      };
    default:
      return state;
  }
};

module.exports = {
  gameReducer,
  chipsReducer
};
