const Game = require("../Game");
const print = require("../../../userCommunication/print/print");
const promptUser = require("../../../userCommunication/promptUser/promptUser");
const { store } = require("../../../store/index");
const { SET_N_PLAYERS } = require("../../../store/game/constants");
const { SET_N_PLAYERS_CHIPS } = require("../../../store/chips/constants");
const Chance = require("chance");
const chance = new Chance();

const mockNPlayers = chance.integer({ min: 1, max: 8 });

jest.mock("../../../userCommunication/promptUser/promptUser", () => {
  return {
    getNPlayers: jest.fn(() => Promise.resolve(mockNPlayers))
  };
});

jest.mock("../../../userCommunication/print/print", () => {
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
    });
    it("calls getNPlayers() once", () => {
      let g = new Game();
      expect.assertions(1);

      return g
        .initGame()
        .then(result =>
          expect(promptUser.getNPlayers).toHaveBeenCalledTimes(1)
        );
    });
    it("calls store.dispatch twice w/ correct action as arg", () => {
      let g = new Game();
      expect.assertions(3);

      const mockPlayerChipsData = [];
      for (var i = 0; i < mockNPlayers; i++) {
        mockPlayerChipsData.push({
          player: i + 1,
          chips: 100
        });
      }

      return g.initGame().then(result => {
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenNthCalledWith(1, {
          type: SET_N_PLAYERS,
          payload: {
            nPlayers: mockNPlayers
          }
        });
        expect(store.dispatch).toHaveBeenNthCalledWith(2, {
          type: SET_N_PLAYERS_CHIPS,
          payload: {
            players: mockPlayerChipsData
          }
        });
      });
    });
    it("sets the Game class constructor variable nPlayers to mockNPlayers", () => {
      let g = new Game();
      expect.assertions(2);
      return g.initGame().then(result => {
        expect(result).toBe(mockNPlayers);
        expect(g.nPlayers).toBe(mockNPlayers);
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
