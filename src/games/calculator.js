import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

export const rules = 'What is the result of the expression?';

export const game = () => {
  const operands = ['+', '-', '*'];
  const randomOperandItem = Math.floor(Math.random() * operands.length);
  const randomOperand = operands[randomOperandItem];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${randomOperand} ${secondNumber} \nYour answer: `);
  let resultOfCalculation;
  switch (randomOperand) {
    case '+':
      resultOfCalculation = firstNumber + secondNumber;
      break;
    case '-':
      resultOfCalculation = firstNumber - secondNumber;
      break;
    default:
      resultOfCalculation = firstNumber * secondNumber;
  }
  const correctAnswer = String(resultOfCalculation);
  return { userAnswer, correctAnswer };
};

export const calculator = () => {
  greeting();
  engine(rules, game);
};
