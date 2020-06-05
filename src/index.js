import readlineSync from 'readline-sync';

const engine = (description, getQuestionAndAnswer) => {
  console.log('Welcome to The Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(description);
  const amountOfRounds = 3;
  for (let round = 1; round <= amountOfRounds;) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (round === 3) {
        console.log(`Congratulations ${userName}!`);
      }
      round += 1;
    }
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default engine;
