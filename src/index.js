var http = require('http');
var Cards = require('./cards');
var app = require('express')();

var questions = Cards.questions;
var answers = Cards.answers;

const nquestions = questions.length, nanswers = answers.length;
const question = () => { return questions[Math.floor(Math.random()*nquestions)] };
const answer = () => { return answers[Math.floor(Math.random()*nanswers)] };
const pick = () => { return { question: question(), answer: answer() } };

app.get('/api/question', (req, res) => res.json(question()));
app.get('/api/questions', (req, res) => res.json(questions));

app.get('/api/answer', (req, res) => res.json(answer()));
app.get('/api/answers', (req, res) => res.json(answers));

app.get('/pick', (req, res) => {
    res.send();
});

app.get('/', (req, res) => res.send());


var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('VCAH API listening at http://%s:%s', host, port);

});
