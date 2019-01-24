const initialState = {
  hands: null
};
const { SET_INITIAL_HAND } = require("./constants");

const handsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INITIAL_HAND:
      return {
        ...state,
        hands: payload.hands
      };
    default:
      return state;
  }
};

module.exports = { handsReducer };
