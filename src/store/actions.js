const { SET_HANDS, SET_N_PLAYERS_CHIPS } = require("./constants");
const { setNPlayersWChips } = require("../utils/miscellaneousHelpers");

/*
This action sets the amount of players, and initializes the state tree players array with
n objects, all with 100 chips each
*/

const setHands = hands => {
  const handsRedux = manipulateHandsForStateTree(hands);
  return {
    type: SET_HANDS,
    payload: {
      hands: handsRedux
    }
  };
};

module.exports = {
  endGame,
  setNPlayers,
  setHands,
  setPlayersChips
};
