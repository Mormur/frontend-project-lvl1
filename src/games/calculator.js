import engine from '../index.js';

import randomNumber from '../tools.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const lastOperatorIndex = operators.length - 1;
  const randomOperatorItem = randomNumber(0, lastOperatorIndex);
  const randomOperator = operators[randomOperatorItem];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  let resultOfCalculation;
  switch (randomOperator) {
    case '+':
      resultOfCalculation = firstNumber + secondNumber;
      break;
    case '-':
      resultOfCalculation = firstNumber - secondNumber;
      break;
    case '*':
      resultOfCalculation = firstNumber * secondNumber;
      break;
    default:
      return null;
  }
  const correctAnswer = String(resultOfCalculation);
  return { question, correctAnswer };
};

const startGame = () => {
  engine(description, getQuestionAndAnswer);
};

export default startGame;
