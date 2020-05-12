import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

export const rules = 'What is the result of the expression?';

export const game = () => {
  const operands = ['+', '-', '*'];
  const randomOperandItem = Math.floor(Math.random() * operands.length);
  const randomOperand = operands[randomOperandItem];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const answer = readlineSync.question(`Question: ${firstNumber} ${randomOperand} ${secondNumber} \nYour answer: `);
  const userAnswer = Number(answer);
  let correctAnswer;
  switch (randomOperand) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    default:
      correctAnswer = firstNumber * secondNumber;
  }
  return { userAnswer, correctAnswer };
};

export const calculator = () => {
  greeting();
  engine(rules, game);
};
