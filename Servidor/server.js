const express = require("express");
const app = express();
// Import jokes router
const jokesRouter = require("./routes/jokes.routes");

// Import mongoose config
require("./config/mongoose.config");

// Use jokes router
app.use("/api/jokes", jokesRouter);
app.use(express.json());

app.listen(3000, () => console.log("Listening on port 3000"));
