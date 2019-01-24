const { SET_INITIAL_HAND } = require("./constants");
const { manipulateHandsForStateTree } = require("../../utils/cardHelpers");

const setInitialHand = hands => {
  const handsForRedux = manipulateHandsForStateTree(hands);
  return {
    type: SET_INITIAL_HAND,
    payload: {
      hands: handsForRedux
    }
  };
};

module.exports = {
  setInitialHand
};
