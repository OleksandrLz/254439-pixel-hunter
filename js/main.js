const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const mouseClickArrows = `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
      cursor: pointer;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;

const mainScreen = document.querySelector(`.central`);
const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

const selectSlide = (element) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element.cloneNode(true));
};

selectSlide(screens[0]);

let current = 0;

const select = (index) => {
  index = (index < 0) ? 0 : (index >= screens.length) ? (screens.length - 1) : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

const miceArrows = document.createElement(`div`);
miceArrows.classList.add(`arrows__wrap`);
miceArrows.innerHTML = mouseClickArrows;
document.body.appendChild(miceArrows);

const arrowClickLeft = miceArrows.children[1];
const arrowClickRight = miceArrows.children[2];
console.log(arrowClickLeft)

arrowClickLeft.addEventListener(`click`, () => {
  select(current - 1);
});

arrowClickRight.addEventListener(`click`, () => {
  select(current + 1);
});
