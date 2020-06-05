import engine from '../index.js';

import randomNumber from '../tools.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const checkEven = () => {
  engine(description, getQuestionAndAnswer);
};

export default checkEven;
