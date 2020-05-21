import { randomNumber, engine } from '../index.js';

export const rules = 'What number is missing in the progression?';

export const game = () => {
  const firstElement = randomNumber();
  const difference = randomNumber();
  const amountNumbersInArray = 10;
  const arrayOfNumbers = [];
  for (let i = 1; i < amountNumbersInArray; i += 1) {
    const addedElement = firstElement + difference * i;
    arrayOfNumbers.push(addedElement);
  }
  const firstIndex = 0;
  const lastIndex = arrayOfNumbers.length - 1;
  const index = Math.floor(Math.random() * (lastIndex - firstIndex + 1)) + firstIndex;
  const arrayWithGap = [...arrayOfNumbers];
  arrayWithGap[index] = '..';
  const data = `${arrayWithGap.join(' ')}`;
  const progression = arrayOfNumbers[index];
  const correctAnswer = String(progression);
  return { data, correctAnswer };
};

export const progression = () => {
  engine(rules, game);
};
