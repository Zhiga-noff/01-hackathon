import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    // Реализация подсчета кликов
    let countClick = 0;
    document.addEventListener('click', () => {
      countClick++;
    });

    // Удаляет прослушку через 3 секунды
    setTimeout(() => {
      this.createModalWindow(countClick);
      document.removeEventListener('click', () => {
        countClick++;
      });
    }, 3000);
  }

  toHTML() {
    return super.toHTML();
  }

  // Метод создающий модальное окно
  createModalWindow(count) {
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';

    const closeWindow = document.createElement('div');
    closeWindow.className = 'close-window';
    modalWindow.append(closeWindow);

    const infoAboutClick = document.createElement('p');
    infoAboutClick.className = 'info border';
    infoAboutClick.textContent = `Ну ты и накликал конечно, ${
      count - 1
    } раз(а)`;
    modalWindow.append(infoAboutClick);

    document.body.append(modalWindow);

    setTimeout(() => {
      modalWindow.classList.add('open');
    }, 500);

    // Метод удаляющий модальное окно
    closeWindow.addEventListener('click', () => {
      modalWindow.classList.remove('open');
      setTimeout(() => {
        modalWindow.remove();
      }, 1000);
    });
  }
}
