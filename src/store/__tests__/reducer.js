const { reducer } = require("../reducer");
const { END_GAME, ADD_USER } = require("../constants");

const initialState = {
  gameOver: false,
  user: null
};

describe("example game reducer", () => {
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
      ).toEqual({ gameOver: true, user: null });
    });
  });
  describe("when fed ADD_USER as action type", () => {
    it("should return the correct modified state", () => {
      expect(
        reducer((state = initialState), {
          type: ADD_USER,
          payload: {
            user: "joe schmo"
          }
        })
      ).toEqual({ user: "joe schmo", gameOver: true });
    });
  });
});
