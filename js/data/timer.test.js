import {assert} from 'chai';
import Timer from './timer';

let end = false;
const tellTimerEnd = () => {
  end = true;
  return end;
};

describe(`check game timer`, () => {

  it(`should update timer twice`, () => {
    const newTimer = new Timer(5, tellTimerEnd);
    newTimer.tick();
    newTimer.tick();
    assert.equal(newTimer.time, 3);
  });

  it(`should not allow to tick to negative values`, () => {
    const newTimer = new Timer(0, tellTimerEnd);
    newTimer.tick();
    assert.equal(newTimer.time, 0);
  });

  it(`should call back when time is over`, () => {
    const newTimer = new Timer(1, tellTimerEnd);
    newTimer.tick();
    assert.isTrue(end);
  });

  it(`should have time getter`, () => {
    const newTimer = new Timer(50, tellTimerEnd);
    assert.exists(newTimer.time);
  });

  it(`should update timer once`, () => {
    const newTimer = new Timer(9, tellTimerEnd);
    newTimer.tick();
    assert.equal(newTimer.time, 8);
  });

  it(`shouldn't call back when time is not over`, () => {
    end = false;
    const newTimer = new Timer(30, tellTimerEnd);
    newTimer.tick();
    assert.isFalse(end);
  });

  it(`shouldn't call back, when we are trying to tick to negative values`, () => {
    end = false;
    const newTimer = new Timer(0, tellTimerEnd);
    newTimer.tick();
    assert.isFalse(end);
  });

  it(`should not allow to set negative values`, () => {
    const newTimer = new Timer(-1, tellTimerEnd);
    assert.equal(newTimer.time, 0);
  });
});
