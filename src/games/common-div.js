import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const game = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const answer = readlineSync.question(`Question: ${firstNumber} ${secondNumber} \nYour answer: `);
  const userAnswer = Number(answer);
  const smallerNumber = Math.min(firstNumber, secondNumber);
  let correctAnswer;
  for (let i = 1; i <= smallerNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  return { userAnswer, correctAnswer };
};

export const commonDiv = () => {
  greeting();
  engine(rules, game);
};
