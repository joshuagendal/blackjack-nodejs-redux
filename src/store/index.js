const { createStore, combineReducers } = require("redux");
const reducer = require("./reducer");

const rootReducer = combineReducers(reducer);

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

module.exports = { store };
