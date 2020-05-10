import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to The Brain Games! \nMay I have your name? ');

export const greeting = () => {
  console.log(`Hi ${userName}!`);
};

export const randomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const congrats = () => {
  console.log(`Congratulations ${userName}!`);
};

const failure = () => {
  console.log(`Let's try again, ${userName}!`);
};

export const engine = (rules, game) => {
  console.log(rules);
  for (let round = 1; round < 4;) {
    const result = game();
    if (result === true) {
      round += 1;
    }
    if (round === 4) {
      congrats();
    }
    if (result === false) {
      failure();
      break;
    }
  }
};
