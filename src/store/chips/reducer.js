const initialState = {
  players: null
};

const chipsReducer = (state = initialState, { type, payload }) => {
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
  chipsReducer
};
