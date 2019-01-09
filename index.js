const { createStore, combineReducers, dispatch } = require("redux");
const reducer = require("./store/reducer");
const { endGame } = require("./store/actions");

const rootReducer = combineReducers(reducer);

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

module.exports = { store };
