const cardHelpers = require("../cardHelpers");

describe("cardHelpers utility functions", () => {
  describe("#getInitialHand", () => {
    // @TODO: mock chance.integer to more appropriately test this function
    it("returns two items in an array", () => {
      const result = cardHelpers.getInitialHand();
      expect(result.length).toBe(2);
      expect(result).toBeArray;
    });
  });
  describe("#initialCardNumericalConverter", () => {
    const { initialCardNumericalConverter } = cardHelpers;
    describe("when fed a number", () => {
      it("returns that number", () => {
        const result = initialCardNumericalConverter(4);
        expect(result).toBe(4);
      });
    });
    describe("when fed a face card", () => {
      it("returns 10", () => {
        const result = initialCardNumericalConverter("J");
        expect(result).toBe(10);
      });
    });
    describe("when fed an Ace", () => {
      it("returns 'A'", () => {
        const result = initialCardNumericalConverter("A");
        expect(result).toBe("A");
      });
    });
  });
  describe("#initialAveValidation", () => {
    const { initialAceValidation } = cardHelpers;
    describe("when fed an ace and a 10", () => {
      it("returns 21", () => {
        const result = initialAceValidation(["A", 10]);
        expect(result).toBe(21);
      });
    });
    describe("when fed an ace and a number that is not 10", () => {
      it("returns undefined", () => {
        const result = initialAceValidation(["A", 3]);
        expect(result).toBeUndefined();
      });
    });
  });
});
