import { randomNumber, engine } from '../index.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const game = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const data = `${firstNumber} ${secondNumber}`;
  const smallerNumber = Math.min(firstNumber, secondNumber);
  let commonDivisor;
  for (let i = 1; i <= smallerNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      commonDivisor = i;
    }
  }
  const correctAnswer = String(commonDivisor);
  return { data, correctAnswer };
};

export const commonDiv = () => {
  engine(rules, game);
};
