import {INITIAL_GAME, Limit} from './data';

import {quests} from './quest-data.js';

const getLevel = (state) => quests[`game-${state.level}`];

const tick = (time) => {
  if (time > 0) {
    time--;
  }
  return time;
};

const generateState = (game) => {
  return Object.assign({}, game);
};

// создает объект ответа
const generateAnswerStat = (answerStatus, time) => {
  const answerResult = {
    correctAnswer: answerStatus,
    answerTime: time
  };
  return answerResult;
};

class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  get answers() {
    return this._answers;
  }

  generateTrueAnswer() {
    this._answers.push(generateAnswerStat(true, this._state.time));
  }

  generateFalseAnswer() {
    this._answers.push(generateAnswerStat(false, this._state.time));
  }

  nextLevel() {
    this._state.level++;
  }

  die() {
    this._state.lives--;
  }

  restart() {
    this._state = generateState(INITIAL_GAME);
    this._answers = [];
  }

  isDead() {
    return this._state.lives === 0;
  }

  isEnd() {
    return this._state.level === Limit.LEVELS;
   }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  tick() {
    this._state.time = tick(this._state.time);
  }

  resetTime() {
    this._state.time = Limit.TIME;
  }

  isTimeEnd() {
    return this._state.time === 0;
  }

}

export default GameModel;
