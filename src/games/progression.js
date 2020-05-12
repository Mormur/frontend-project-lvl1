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
  const userAnswer = readlineSync.question(`Question: ${arrayWithGap.join(' ')} \nYour answer: `);
  const progression = arrayOfNumbers[index];
  const correctAnswer = String(progression);
  return { userAnswer, correctAnswer };
};

export const progression = () => {
  greeting();
  engine(rules, game);
};
