require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const jsRouter = require("./routes/jsRoutes");
const reactRouter = require("./routes/reactRoutes");

app.use(cors());

app.use("/javascript", jsRouter);
app.use("/react", reactRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
