const Game = require("../Game");
const print = require("../../userCommunication/print/print");
const promptUser = require("../../userCommunication/promptUser/promptUser");
const { store } = require("../../store/index");
const { SET_N_PLAYERS } = require("../../store/constants");

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
    beforeEach(() => {
      jest.spyOn(store, "dispatch");
    });
    afterEach(() => {
      print.print.mockClear();
      promptUser.getNPlayers.mockClear();
      store.dispatch.mockRestore();
    });
    it("calls the print fn once w/ correct arg", () => {
      let g = new Game();
      expect.assertions(2);

      return g.initGame().then(result => {
        expect(print.print).toHaveBeenCalledTimes(1);
        expect(print.print).toHaveBeenCalledWith(
          "Hello and welcome to a game of blackjack! \n\n"
        );
      });

      // promptUser.getNPlayers.mockReset();
    });
    it("call getNPlayers() once", () => {
      let g = new Game();
      expect.assertions(1);

      return g
        .initGame()
        .then(result =>
          expect(promptUser.getNPlayers).toHaveBeenCalledTimes(1)
        );
    });
    it("calls store.dispatch w/ correct action", () => {
      let g = new Game();
      expect.assertions(2);

      return g.initGame().then(result => {
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({
          type: SET_N_PLAYERS,
          payload: {
            nPlayers: 4
          }
        });
      });
    });
    it("sets the Game class constructor variable nPlayers to the result of promptUsers.getNPlayers", () => {
      let g = new Game();
      expect.assertions(2);
      return g.initGame().then(result => {
        expect(g.nPlayers).toEqual(result.payload.nPlayers);
        expect(g.nPlayers).toEqual(4);
      });
    });
    it("invokes fn calls in proper order", () => {
      let g = new Game();

      expect.assertions(2);

      return g.initGame().then(result => {
        expect(print.print).toHaveBeenCalledBefore(promptUser.getNPlayers);
        expect(store.dispatch).toHaveBeenCalledAfter(promptUser.getNPlayers);
      });
    });
  });
});
