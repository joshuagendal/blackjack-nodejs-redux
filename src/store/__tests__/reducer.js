const { reducer } = require("../reducer");
const { END_GAME, SET_N_PLAYERS } = require("../constants");

const initialState = {
  gameOver: false,
  nPlayers: null
};

describe("game reducer", () => {
  describe("when fed an unidentified action as second arg", () => {
    it("should return initial state", () => {
      expect(reducer((state = initialState), {})).toEqual(initialState);
    });
  });
  describe("when fed END_GAME action type", () => {
    it("should return the correct modified state", () => {
      expect(
        reducer((state = initialState), {
          type: END_GAME
        })
      ).toEqual({ gameOver: true, nPlayers: null });
    });
  });
  describe("when fed SET_N_PLAYERS action type", () => {
    it("should return the correct modified state", () => {
      expect(
        reducer((state = initialState), {
          type: SET_N_PLAYERS,
          payload: {
            nPlayers: 4
          }
        })
      ).toEqual({ gameOver: false, nPlayers: 4 });
    });
  });
});
