import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

export const rules = 'What number is missing in the progression?';

export const game = () => {
  const firstElement = randomNumber();
  const difference = randomNumber();
  const amountNumbersInArray = 10;
  const arrayOfNumbers = [firstElement];
  let nextNumber = firstElement;
  for (let i = 1; i < amountNumbersInArray; i += 1) {
    nextNumber += difference;
    arrayOfNumbers.push(nextNumber);
  }
  const firstIndex = 0;
  const lastIndex = arrayOfNumbers.length - 1;
  const index = Math.floor(Math.random() * (lastIndex - firstIndex + 1)) + firstIndex;
  const arrayWithGap = [...arrayOfNumbers];
  arrayWithGap[index] = '..';
  const answer = readlineSync.question(`Question: ${arrayWithGap.join(' ')} \nYour answer: `);
  const userAnswer = Number(answer);
  const correctAnswer = arrayOfNumbers[index];
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export const progression = () => {
  greeting();
  engine(rules, game);
};
