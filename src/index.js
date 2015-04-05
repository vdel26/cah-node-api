import http from 'http';
import { questions, answers } from './cards';

const { floor: floor, random: random } = Math;
const nquestions = questions.length, nanswers = answers.length;
const question = () => { return questions[floor(random()*nquestions)] };
const answer = () => { return answers[floor(random()*nanswers)] };
const pick = () => { return { question: question(), answer: answer() } };

http.createServer((req, res) => {
  res.writeHead(200, 'Content-Type: application/json');

  if (req.url === '/question')
    res.write(question());
  else if (req.url === '/answer')
    res.write(answer());
  else if (req.url === '/pick')
    res.write(JSON.stringify(pick()));
  else
    res.write(`USAGE:
               /question - get a random white card
               /answer - get a random black card
               /pick - get a question and answer randomly chosen`);

  return res.end();

}).listen(parseInt(process.env.PORT) || 5000);

