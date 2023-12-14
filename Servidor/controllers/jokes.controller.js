const jokeModel = require("../models/jokes.model");

module.exports.getAllJokes = async (req, res, next) => {
  const jobs = await jokeModel.find();
  if (!jobs) {
    res.status(200).json({
      success: false,
      message: "There are no jokes in the book. Better write some first.",
    });
  }
};

module.exports.getJoke = async (req, res, next) => {
  const job = await jokeModel.findById(req.params.id);
  if (!job) {
    res.status(200).json({
      success: false,
      message: "Sorry, we did not find that joke",
    });
  }
};

module.exports.createJoke = async (req, res, next) => {
  const joke = await jokeModel.create(req.body);
  if (!joke) {
    res.status(200).json({
      success: false,
      message: "Sorry, we did not create that joke",
    });
  }
};

module.exports.updateJoke = async (req, res, next) => {
  try {
    const updatedJoke = await jokeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedJoke) {
      return res.status(404).json({
        success: false,
        message: "Joke not found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedJoke,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports.deleteJoke = async (req, res, next) => {
  try {
    const joke = await jokeModel.findByIdAndDelete(req.params.id);
    if (!joke) {
      return res.status(404).json({
        success: false,
        message: "Joke not found",
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports.getRandomJoke = async (req, res, next) => {
  try {
    const jokeCount = await jokeModel.countDocuments();
    const randomIndex = Math.floor(Math.random() * jokeCount);
    const randomJoke = await jokeModel.findOne().skip(randomIndex);
    if (!randomJoke) {
      return res.status(404).json({
        success: false,
        message: "No jokes found",
      });
    }
    res.status(200).json({
      success: true,
      data: randomJoke,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
