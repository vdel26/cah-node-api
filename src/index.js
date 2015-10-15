import http from 'http';
import url from 'url';
import { questions, answers } from './cards';

const { floor: floor, random: random } = Math;
const nquestions = questions.length, nanswers = answers.length;
const question = () => { return questions[floor(random()*nquestions)] };
const answer = () => { return answers[floor(random()*nanswers)] };
const pick = () => { return { question: question(), answer: answer() } };

http.createServer((req, res) => {
  res.writeHead(200, 'Content-Type: application/json');

  let path = url.parse(req.url).pathname;
  if (path === '/question')
    res.write(question());
  else if (path === '/answer')
    res.write(answer());
  else if (path === '/pick')
    res.write(JSON.stringify(pick()));
  else
    res.write(`USAGE:
               /question - get a random white card
               /answer - get a random black card
               /pick - get a question and answer randomly chosen`);

  return res.end();

}).listen(parseInt(process.env.PORT) || 5000);

