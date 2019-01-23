const { gameReducer } = require("../reducer");
const { END_GAME, SET_N_PLAYERS } = require("../constants");
const Chance = require("chance");
const chance = new Chance();

const initialState = {
  gameOver: false,
  nPlayers: null
};

describe("game reducer", () => {
  describe("when fed an unidentified action as second arg", () => {
    it("should return initial state", () => {
      expect(gameReducer((state = initialState), {})).toEqual(initialState);
    });
  });
  describe("when fed END_GAME action type", () => {
    it("should return the correct modified state", () => {
      expect(
        gameReducer((state = initialState), {
          type: END_GAME,
          payload: {
            gameOver: true
          }
        })
      ).toEqual({ gameOver: true, nPlayers: null });
    });
  });
  describe("when fed SET_N_PLAYERS action type", () => {
    const randIntNPlayers = chance.integer({ min: 1, max: 8 });
    it("should return the correct modified state", () => {
      expect(
        gameReducer((state = initialState), {
          type: SET_N_PLAYERS,
          payload: {
            nPlayers: randIntNPlayers
          }
        })
      ).toEqual({ gameOver: false, nPlayers: randIntNPlayers });
    });
  });
});
