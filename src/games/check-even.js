import { randomNumber, engine } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const game = () => {
  const data = randomNumber();
  const correctAnswer = isEven(data) ? 'yes' : 'no';
  return { data, correctAnswer };
};

export const checkEven = () => {
  engine(rules, game);
};
