const { SET_INITIAL_HAND } = require("./constants");

const setInitialHand = hands => ({
  type: SET_INITIAL_HAND,
  payload: {
    hands
  }
});

module.exports = {
  setInitialHand
};
