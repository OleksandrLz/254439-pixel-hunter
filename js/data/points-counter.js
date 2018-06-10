const MIN_RIGHT_ANSWERS = 10;
const RIGHT_ANSWER_POINTS = 100;
const FAST_ANSWER_POINTS = 50;
const SLOW_ANSWER_POINTS = 50;
const FAST_ANSWER_TIME = 9;
const SLOW_ANSWER_TIME = 15;
const LIFE_BONUS = 50;

const countPoints = (answers, lives) => {

  if (answers.length < MIN_RIGHT_ANSWERS) {
    return -1;
  }

  answers.points = answers.reduce(
      (acc, answer) => {

        if (answer.correctAnswer) {
          acc += RIGHT_ANSWER_POINTS;
          acc += answer.answerTime < FAST_ANSWER_TIME ? FAST_ANSWER_POINTS : 0;
          acc -= answer.answerTime > SLOW_ANSWER_TIME ? SLOW_ANSWER_POINTS : 0;
        }
        return acc;
      }, 0
  );

  return answers.points + (lives * LIFE_BONUS);
};

export default countPoints;
