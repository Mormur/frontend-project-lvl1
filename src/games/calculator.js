import readlineSync from 'readline-sync';
import { congrats, failure, randomNumber } from '../index.js';

const calculator = () => {
  console.log('What is the result of the expression?');
  const operands = ['+', '-', '*'];
  for (let i = 1; i < 4;) {
    const randomOperandItem = Math.floor(Math.random() * operands.length);
    const randomOperand = operands[randomOperandItem];
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const userAnswer = Number(readlineSync.question(`Question: ${firstNumber} ${randomOperand} ${secondNumber} \nYour answer: `));
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
      i += 1;
      if (i === 4) {
        congrats();
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      failure();
      break;
    }
  }
};

export default calculator;
