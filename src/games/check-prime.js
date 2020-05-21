import { randomNumber, engine } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const game = () => {
  const data = randomNumber();
  const correctAnswer = isPrime(data) ? 'yes' : 'no';
  return { data, correctAnswer };
};

export const checkPrime = () => {
  engine(rules, game);
};
