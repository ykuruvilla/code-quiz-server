require("dotenv").config();
const express = require("express");
const app = express();

app.use(express);

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
