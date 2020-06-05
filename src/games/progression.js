import engine from '../index.js';

import randomNumber from '../tools.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElement = randomNumber();
  const difference = randomNumber();
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const addedElement = firstElement + difference * i;
    progression.push(addedElement);
  }
  const firstIndex = 0;
  const lastIndex = progression.length - 1;
  const indexOfGap = Math.floor(Math.random() * (lastIndex - firstIndex + 1)) + firstIndex;
  const progressionWithGap = [...progression];
  progressionWithGap[indexOfGap] = '..';
  const question = `${progressionWithGap.join(' ')}`;
  const missedNumber = progression[indexOfGap];
  const correctAnswer = String(missedNumber);
  return { question, correctAnswer };
};

const progression = () => {
  engine(description, getQuestionAndAnswer);
};

export default progression;
