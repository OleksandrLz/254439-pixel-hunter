const minRightAnswers = 10;
const rightAnswerPoints = 100;
const fastAnswerPoints = 50;
const slowAnswerPoints = 50;
const fastAnswerTime = 9;
const slowAnswerTime = 15;
const lifeBonus = 50;

const countPoints = (answers, lives) => {
  let sum = 0;
  if (answers.length < minRightAnswers) {
    sum = -1;
  } else {
    answers.forEach((el) => {
      if (el.correctAnswer) {
        sum += rightAnswerPoints;
        sum += el.answerTime < fastAnswerTime ? fastAnswerPoints : 0;
        sum -= el.answerTime > slowAnswerTime ? slowAnswerPoints : 0;
      }
    });
    sum += lives * lifeBonus;
  }
  return sum;
};

export default countPoints;
