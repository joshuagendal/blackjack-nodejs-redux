const { END_GAME, ADD_USER } = require("./constants");

const initialState = {
  gameOver: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case END_GAME:
      return {
        ...state,
        endGame: action.payload.gameOver
      };
    case ADD_USER:
      return {
        ...state,
        user: action.user,
        gameOver: true
      };
    default:
      return state;
  }
};

module.exports = {
  reducer
};
