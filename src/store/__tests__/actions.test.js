const actions = require("../actions");
const { END_GAME, ADD_USER } = require("../constants");

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
  describe("#addUser", () => {
    it("returns action to add User and end game ", () => {
      const user = "joe shmo";
      const expectedAction = {
        type: ADD_USER,
        payload: {
          user,
          gameOver: true
        }
      };
      expect(actions.addUser(user)).toEqual(expectedAction);
    });
  });
});
