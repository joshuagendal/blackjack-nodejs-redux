const promptly = require("promptly");
const { addUser } = require("../store/actions");
const { store } = require("../index");

promptly
  .prompt("Name?: ")
  .then(result => {
    store.dispatch(addUser(result));
  })
  .catch(err => console.log(err));
