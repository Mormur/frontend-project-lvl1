import readlineSync from 'readline-sync';
import { congrats, failure } from'./index.js';

const isEven = (number) => {
	if (number % 2 === 0) {
		return 'yes'}
	return 'no';
};

const checkEven = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	const firstNumber = Math.floor(Math.random() * 100);
	const secondNumber = Math.floor(Math.random() * 100);
	const thirdNumber = Math.floor(Math.random() * 100);
	const givenNumbers = [firstNumber, secondNumber, thirdNumber];
	for (let i = 0; i < givenNumbers.length;) {
		const userAnswer = readlineSync.question(`Question: ${givenNumbers[i]} \nYour answer: `);
		if (userAnswer === isEven(givenNumbers[i])) {
			console.log('Correct!');
			i += 1;
			if (i === 3) {
				congrats();
			}
		} else {
			console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven(givenNumbers[i])}".`);
				failure();
				break;
		}
	}
};

export default checkEven;
