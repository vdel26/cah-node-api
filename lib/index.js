"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var http = _interopRequire(require("http"));

var _cards = require("./cards");

var questions = _cards.questions;
var answers = _cards.answers;
var floor = Math.floor;
var random = Math.random;

var nquestions = questions.length,
    nanswers = answers.length;
var question = function () {
  return questions[floor(random() * nquestions)];
};
var answer = function () {
  return answers[floor(random() * nanswers)];
};
var pick = function () {
  return { question: question(), answer: answer() };
};

http.createServer(function (req, res) {
  res.writeHead(200, "Content-Type: application/json");

  if (req.url === "/question") res.write(question());else if (req.url === "/answer") res.write(answer());else if (req.url === "/pick") res.write(JSON.stringify(pick()));else res.write("USAGE:\n               /question - get a random white card\n               /answer - get a random black card\n               /pick - get a question and answer randomly chosen");

  return res.end();
}).listen(parseInt(process.env.PORT) || 5000);
