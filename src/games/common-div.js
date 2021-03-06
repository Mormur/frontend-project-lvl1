import engine from '../index.js';

import randomNumber from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreateCommonDivisor = (firstNumber, secondNumber) => {
  const smallerNumber = Math.min(firstNumber, secondNumber);
  let commonDivisor = 1;
  for (let i = 2; i <= smallerNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
};

const getQuestionAndAnswer = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const commonDivisor = findGreateCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = String(commonDivisor);
  return { question, correctAnswer };
};

const startGame = () => {
  engine(description, getQuestionAndAnswer);
};

export default startGame;
