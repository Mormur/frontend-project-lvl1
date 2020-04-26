import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to The Brain Games! \nMay I have your name? ');

export const greeting = () => {
  console.log(`Hi ${userName}!`);
};

export const congrats = () => {
	console.log(`Congratulations ${userName}!`);
};

export const failure = () => {
	console.log(`Let's try again, ${userName}!`);
};


