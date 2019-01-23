const actions = require("../actions");
const { SET_N_PLAYERS_CHIPS } = require("../constants");
const Chance = require("chance");
const chance = new Chance();
const miscHelpers = require("../../../utils/miscellaneousHelpers");

const randIntNPlayers = chance.integer({ min: 1, max: 8 });
// this is the mock result of miscHelpers.setNPlayersWChips(randIntNPlayers)
const mockPlayerChipsData = [];
for (var i = 0; i < randIntNPlayers; i++) {
  mockPlayerChipsData.push({
    player: i + 1,
    chips: 100
  });
}

jest.mock("../../../utils/miscellaneousHelpers", () => {
  return {
    setNPlayersWChips: jest.fn(randIntNPlayers => mockPlayerChipsData)
  };
});

describe("redux actions for the chips part of tree", () => {
  const { setPlayersChips } = actions;
  describe("#setPlayersChips", () => {
    afterEach(() => miscHelpers.setNPlayersWChips.mockClear());
    it("returns correct action", () => {
      expect.assertions(1);
      const expectedAction = {
        type: SET_N_PLAYERS_CHIPS,
        payload: {
          players: mockPlayerChipsData
        }
      };
      expect(setPlayersChips(randIntNPlayers)).toEqual(expectedAction);
    });
    it("calls miscHelpers.setNPlayersChips once w/ n fed to action as arg", () => {
      expect.assertions(2);
      setPlayersChips(randIntNPlayers);
      expect(miscHelpers.setNPlayersWChips).toHaveBeenCalledTimes(1);
      expect(miscHelpers.setNPlayersWChips).toHaveBeenCalledWith(
        randIntNPlayers
      );
    });
  });
});
