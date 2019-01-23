const actions = require("../actions");
const { END_GAME, SET_N_PLAYERS } = require("../constants");
const Chance = require("chance");
const chance = new Chance();

describe("redux actions for game part of state tree", () => {
  describe("#endGame", () => {
    const { endGame } = actions;
    it("returns action to end game", () => {
      const expectedAction = {
        type: END_GAME,
        payload: {
          gameOver: true
        }
      };
      expect(endGame()).toEqual(expectedAction);
    });
  });

  describe("#setNPlayers", () => {
    const { setNPlayers } = actions;
    const randIntNPlayers = chance.integer({ min: 1, max: 8 });
    it("returns action to set n players", () => {
      const expectedAction = {
        type: SET_N_PLAYERS,
        payload: {
          nPlayers: randIntNPlayers
        }
      };
      expect(setNPlayers(randIntNPlayers)).toEqual(expectedAction);
    });
  });
});
