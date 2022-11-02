const reactRouter = require("express").Router();
const { getQuestions } = require("../utils/helpers");

reactRouter.get("/:questionNumber", (req, res) => {
  const questions = getQuestions("react-questions.json");

  const currentQuestion = questions.find(
    (question) => Number(req.params.questionNumber) === question.question_number
  );
  res.status(200).json(currentQuestion);
});

module.exports = reactRouter;
