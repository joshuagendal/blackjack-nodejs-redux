const Chance = require("chance");
jest.mock("promptly");
const promptly = require("promptly");
const { getNPlayers, getNPlayerBets } = require("../promptUser/promptUser");
const chance = new Chance();
describe("The promptUser module", () => {
  describe("#getNPlayers", () => {
    beforeEach(() => {
      promptly.prompt.mockImplementation(() => Promise.resolve(4));
    });
    afterEach(() => {
      promptly.prompt.mockReset();
    });
    it("returns the correct num of players received from user", () => {
      expect.assertions(1);
      return getNPlayers().then(n => expect(n).toBe(4));
    });
    it("calls promptly.prompt exactly once w/ correct arg", () => {
      expect.assertions(2);
      return getNPlayers().then(n => {
        console.log("CALLS: ", promptly.prompt.mock.calls);
        expect(promptly.prompt).toHaveBeenCalledTimes(1);
        expect(promptly.prompt).toHaveBeenCalledWith(
          "How many players would you like to include in this game?"
        );
      });
    });
  });
  describe("#getNPlayerBets", () => {
    let betVal;
    beforeEach(() => {
      const randIntBet = chance.integer({ min: 1, max: 100 });
      betVal = randIntBet;
      promptly.prompt.mockImplementation(() => Promise.resolve(randIntBet));
    });
    afterEach(() => promptly.prompt.mockReset());
    it("calls promptly.prompt n times w/ correct args", () => {
      const randIntNPlayers = chance.integer({ min: 1, max: 8 });
      expect.assertions(2);
      return getNPlayerBets(randIntNPlayers).then(result => {
        expect(promptly.prompt).toHaveBeenCalledTimes(randIntNPlayers);
        const expectedCalls = [];
        for (var i = 0; i < randIntNPlayers; i++) {
          expectedCalls.push([`Player ${i + 1}, what is your bet?`]);
        }
        expect(expectedCalls).toEqual(promptly.prompt.mock.calls);
      });
    });
    it("returns the current object containing the players' bets", () => {
      let randIntNPlayers = chance.integer({ min: 1, max: 8 });
      return getNPlayerBets(randIntNPlayers).then(result => {
        let bets = {};
        for (var i = 0; i < randIntNPlayers; i++) {
          bets[0] = betVal;
        }
        expect(bets).toEqual(bets);
      });
    });
  });
});
