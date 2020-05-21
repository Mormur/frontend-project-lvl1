import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to The Brain Games! \nMay I have your name? ');

const randomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const engine = (rules, game) => {
  console.log(`Hi ${userName}!`);
  console.log(rules);
  const amountOfRounds = 3;
  for (let round = 1; round <= amountOfRounds;) {
    const { data, correctAnswer } = game();
    const userAnswer = readlineSync.question(`Question: ${data} \nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      round += 1;
    }
    if (round > amountOfRounds) {
      console.log(`Congratulations ${userName}!`);
    } if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export { randomNumber, engine };
