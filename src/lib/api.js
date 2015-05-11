var express = require('express');
var router = express.Router();
var Cards = require('./cards');

var questions = Cards.questions;
var answers = Cards.answers;

const nquestions = questions.length, nanswers = answers.length;
const question = () => { return questions[Math.floor(Math.random()*nquestions)]; };
const answer = () => { return answers[Math.floor(Math.random()*nanswers)]; };
const pick = () => { return { question: question(), answer: answer() }; };

router.get('/question', (req, res) => res.json(question()));
router.get('/questions', (req, res) => res.json(questions));

router.get('/answer', (req, res) => res.json(answer()));
router.get('/answers', (req, res) => res.json(answers));

module.exports = router;
