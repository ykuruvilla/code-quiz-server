const javascriptRouter = require("express").Router();
const { getQuestions } = require("../utils/helpers");

javascriptRouter.get("/:questionNumber", (req, res) => {
  const questions = getQuestions("js-questions.json");

  const currentQuestion = questions.find(
    (question) => Number(req.params.questionNumber) === question.question_number
  );
  res.status(200).json(currentQuestion);
});

module.exports = javascriptRouter;
