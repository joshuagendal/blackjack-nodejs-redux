const Game = require("../Game");
const print = require("../../userCommunication/print/print");
const promptUser = require("../../userCommunication/promptUser/promptUser");

jest.mock("../../userCommunication/promptUser/promptUser", () => {
  return {
    getNPlayers: jest.fn(() => Promise.resolve(4))
  };
});

jest.mock("../../userCommunication/print/print", () => {
  return {
    print: jest.fn(msg => {
      console.log(msg);
      return;
    })
  };
});

describe("The Game class", () => {
  describe("#initGame", () => {
    let g = new Game();
    it("calls the print fn once w/ correct arg", () => {
      expect.assertions(2);

      g.initGame();
      expect(print.print).toHaveBeenCalledTimes(1);
      expect(print.print).toHaveBeenCalledWith(
        "Hello and welcome to a game of blackjack! \n\n"
      );
    });
  });
});
