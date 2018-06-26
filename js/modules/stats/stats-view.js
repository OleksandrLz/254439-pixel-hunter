import AbstractView from '../abstract-view';
import headerStaticTemplate from '../../templates/header-static';
import footerTemplate from '../../templates/footer';
import statsTableTemplate from '../../templates/stats-table-template';

export default class StatsView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  get template() {
    return `${headerStaticTemplate}<div class="result"><h1>${this.state.lives ? `Победа!` : `Проигрыш`}</h1>${statsTableTemplate(this.state, this.answers, 1)}</div>${footerTemplate}`;
  }

  bind() {
    this.element.querySelector(`button.back`).addEventListener(`click`, () => {
      this.onRestart();
    });
  }

  onRestart() {
  }
}
