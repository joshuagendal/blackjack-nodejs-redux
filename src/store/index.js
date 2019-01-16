const { createStore, combineReducers, applyMiddleware } = require("redux");
const createCLILogger = require("redux-cli-logger").default;
const reducer = require("./reducer");

const rootReducer = combineReducers(reducer);

// redux-cli-logger config
const loggerOptions = {
  predicate: (getState, action) => !action.MONITOR_ACTION
};
const logger = createCLILogger(loggerOptions);

// const enhancer = compose(applyMiddleware(logger));

const store = createStore(rootReducer, applyMiddleware(logger));

module.exports = { store };
