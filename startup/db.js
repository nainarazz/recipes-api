const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect("mongodb://localhost/recipes")
    .then(() => console.log("connected to mongo"))
    .catch(err => console.log("connection failed", err.message));
}

module.exports = connectToDb;
