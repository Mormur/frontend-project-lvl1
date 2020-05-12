import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const game = () => {
  const givenNumber = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${givenNumber} \nYour answer: `);
  const correctAnswer = isEven(givenNumber);
  return { userAnswer, correctAnswer };
};

export const checkEven = () => {
  greeting();
  engine(rules, game);
};
