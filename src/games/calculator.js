import readlineSync from 'readline-sync';
import { greeting, randomNumber, engine } from '../index.js';

export const rules = () => console.log('What is the result of the expression?');

export const game = () => {
  const operands = ['+', '-', '*'];
  const randomOperandItem = Math.floor(Math.random() * operands.length);
  const randomOperand = operands[randomOperandItem];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const answer = readlineSync.question(`Question: ${firstNumber} ${randomOperand} ${secondNumber} \nYour answer: `);
  const userAnswer = Number(answer);
  let correctAnswer;
  if (randomOperand === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (randomOperand === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export const calculator = () => {
  greeting();
  engine(rules, game);
};
