const { ADD_USER } = require("../../store/constants");
const { beginFauxGame } = require("../runner");
const userInput = require("../../userInput/index");
const { store } = require("../../store");

jest.mock("../../userInput/index", () => {
  return {
    getName: jest.fn(() => Promise.resolve("josh"))
  };
});

describe("#beginFauxGame", () => {
  it("calls store.dispatch once w/ correct arg", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");

    expect.assertions(2);
    return beginFauxGame().then(result => {
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchSpy).toHaveBeenCalledWith({
        type: ADD_USER,
        payload: {
          user: "josh",
          gameOver: true
        }
      });
      dispatchSpy.mockRestore();
    });
  });
});
