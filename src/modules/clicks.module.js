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
    setInterval(() => {
      alert(`Ну ты и накликал ${countClick}`);
      document.removeEventListener('click', () => {
        countClick++;
      });
    }, 3000);
  }

  toHTML() {
    return super.toHTML();
  }
}
