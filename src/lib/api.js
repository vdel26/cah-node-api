var express = require('express');
var router = express.Router();
var Cards = require('./cards');

var questions = Cards.questions;
var answers = Cards.answers;

const nquestions = questions.length;
const nanswers = answers.length;
const question = () => questions[Math.floor(Math.random() * nquestions)];
const answer = () => answers[Math.floor(Math.random() * nanswers)];
const pick = () => ({
  question: question(),
  answer: answer()
});

router.get('/question', (req, res) => res.json(question()));
router.get('/questions', (req, res) => res.json(questions));

router.get('/answer', (req, res) => res.json(answer()));
router.get('/answers', (req, res) => res.json(answers));

module.exports = router;
