const mongoose = require("mongoose");

const jokeSchema = mongoose.Schema({
  setup: String,
  punchline: String,
});

module.exports = mongoose.model("joke", jokeSchema);
