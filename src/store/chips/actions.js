const { SET_N_PLAYERS_CHIPS } = require("./constants");
const { setNPlayersWChips } = require("../../utils/miscellaneousHelpers");

const setPlayersChips = n => {
  const players = setNPlayersWChips(n);
  return {
    type: SET_N_PLAYERS_CHIPS,
    payload: {
      players
    }
  };
};

module.exports = {
  setPlayersChips
};
