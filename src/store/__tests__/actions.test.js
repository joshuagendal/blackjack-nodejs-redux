const actions = require("../actions");
const { END_GAME, SET_N_PLAYERS } = require("../constants");

describe("redux actions", () => {
  describe("#endGame", () => {
    it("returns action to end game", () => {
      const expectedAction = {
        type: END_GAME,
        payload: {
          gameOver: true
        }
      };
      expect(actions.endGame()).toEqual(expectedAction);
    });
  });
  describe("#setNPlayers", () => {
    const exPlayersArray = [
      { chips: 100 },
      { chips: 100 },
      { chips: 100 },
      { chips: 100 }
    ];
    it("returns action to set n players", () => {
      const expectedAction = {
        type: SET_N_PLAYERS,
        payload: {
          nPlayers: 4,
          players: exPlayersArray
        }
      };
      expect(actions.setNPlayers(4)).toEqual(expectedAction);
    });
  });
});
