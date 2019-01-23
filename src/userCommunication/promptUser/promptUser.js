const promptly = require("promptly");

const getNPlayers = () => {
  return promptly
    .prompt("How many players would you like to include in this game?")
    .then(n => {
      return n;
    })
    .catch(err => console.log(err));
};

const getNPlayerBets = async n => {
  // This bets object will hold n k/v pairs: playerIndex: bet
  let bets = {};
  let i;
  for (i = 0; i < n; i++) {
    try {
      const bet = await promptly.prompt(`Player ${i + 1}, what is your bet?`);
      bets[i] = bet;
    } catch (error) {
      console.error(`error getting player ${i + 1}'s bet... \n\n`);
    }
  }
  return bets;
};

module.exports = {
  getNPlayers,
  getNPlayerBets
};
