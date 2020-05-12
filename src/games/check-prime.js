import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const game = () => {
  const shownNumber = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${shownNumber} \nYour answer: `);
  let correctAnswer;
  if (isPrime(shownNumber) === true) {
    correctAnswer = 'yes';
  }
  if (isPrime(shownNumber) === false) {
    correctAnswer = 'no';
  }
  return { userAnswer, correctAnswer };
};

export const checkPrime = () => {
  greeting();
  engine(rules, game);
};
