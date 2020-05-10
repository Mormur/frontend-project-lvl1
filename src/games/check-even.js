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
  if (userAnswer === isEven(givenNumber)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven(givenNumber)}".`);
  return false;
};

export const checkEven = () => {
  greeting();
  engine(rules, game);
};
