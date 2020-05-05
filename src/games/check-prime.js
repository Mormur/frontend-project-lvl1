import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const rules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const game = () => {
  const givenNumber = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${givenNumber} \nYour answer: `);
  if (userAnswer === isPrime(givenNumber)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isPrime(givenNumber)}".`);
  return false;
};

export const checkPrime = () => {
  greeting();
  engine(rules, game);
};
