const express = require("express");
const app = express();
// Import jokes router
const jokesRouter = require("./routes/jokes.routes");
require("dotenv").config({ path: "./config/config.env" });
app.use(express.json());

// Import mongoose config
require("./config/mongoose.config");

// Use jokes router
app.use("/api/jokes", jokesRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
