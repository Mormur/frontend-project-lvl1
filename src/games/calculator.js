import { randomNumber, engine } from '../index.js';

export const rules = 'What is the result of the expression?';

export const game = () => {
  const operands = ['+', '-', '*'];
  const randomOperandItem = randomNumber(0, 2);
  const randomOperand = operands[randomOperandItem];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const data = `${firstNumber} ${randomOperand} ${secondNumber}`;
  let resultOfCalculation;
  switch (randomOperand) {
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
      resultOfCalculation = undefined;
  }
  const correctAnswer = String(resultOfCalculation);
  return { data, correctAnswer };
};

export const calculator = () => {
  engine(rules, game);
};
