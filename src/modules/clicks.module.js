import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    let countClick = 0;
    document.addEventListener('click', () => {
      countClick++;
    });
    setTimeout(() => {
      alert(`Ну ты и накликал ${countClick-1} раз(а)`);
      document.removeEventListener('click', () => {
        countClick++;
      });
    }, 3000);
  }

  toHTML() {
    return super.toHTML();
  }
}
