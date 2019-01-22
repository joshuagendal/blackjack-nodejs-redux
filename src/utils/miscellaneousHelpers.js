const setNPlayersWChips = n => {
  const players = [];
  let i;
  for (i = 0; i < n; i++) {
    players.push({
      player: i + 1,
      chips: 100
    });
  }
  return players;
};

module.exports = {
  setNPlayersWChips
};
