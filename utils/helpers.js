const fs = require("fs");

const getQuestions = (fileName) => {
  const fileContent = fs.readFileSync(`./data/${fileName}`);
  return JSON.parse(fileContent);
};

module.exports = { getQuestions };
