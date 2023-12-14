const {
  getAllJokes,
  getJoke,
  createJoke,
  updateJoke,
  deleteJoke,
  getRandomJoke,
} = require("../controllers/jokes.controller");

const router = require("express").Router();

router.get("/", getAllJokes);
router.get("/random", getRandomJoke);
router.get("/:id", getJoke);
router.post("/new", createJoke);
router.put("/update/:id", updateJoke);
router.delete("/delete/:id", deleteJoke);

module.exports = router;
