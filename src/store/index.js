const { createStore, combineReducers, applyMiddleware } = require("redux");
const createCLILogger = require("redux-cli-logger").default;
// const reducers = require("./reducer");
const { playersReducer } = require("./chips/reducer");
const { gameReducer } = require("./game/reducer");

const reducers = {
  playerss: playersReducer,
  game: gameReducer
};

const rootReducer = combineReducers(reducers);

// redux-cli-logger config
const loggerOptions = {
  predicate: (getState, action) => !action.MONITOR_ACTION
};
const logger = createCLILogger(loggerOptions);

const store = createStore(rootReducer, applyMiddleware(logger));

module.exports = { store };
