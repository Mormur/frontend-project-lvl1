import readlineSync from 'readline-sync';
import { congrats, failure, randomNumber } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i < 4;) {
    const givenNumber = randomNumber();
    const userAnswer = readlineSync.question(`Question: ${givenNumber} \nYour answer: `);
    if (userAnswer === isEven(givenNumber)) {
      console.log('Correct!');
      i += 1;
      if (i === 4) {
        congrats();
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven(givenNumber)}".`);
      failure();
      break;
    }
  }
};

export default checkEven;
