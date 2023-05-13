import { Module } from '../core/module';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.time = 0;
    this.textClock = null;
    this.timerId = null;
    this.createDiv = this.createDiv.bind(this);
    this.timerTime = this.timerTime.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  createDiv() {
    const modalWindowTimer = document.createElement('div');
    modalWindowTimer.id = 'timer-div';
    modalWindowTimer.className = 'modal-window';
    modalWindowTimer.insertAdjacentHTML(
      'beforeend',
      `
    <div class="close-window"></div>
    <form action="#" class="form-modal border">
          <div class="request">
             <label for="input-modal">Задайте время в секундах</label>
             <div class="block-input">
               <input id="input-modal" name="time" class="input-modal">
               <button class="button-modal">Задать время</button>
             </div>
          </div>
       </form>
    `
    );

    this.textClock = document.createElement('p');
    this.textClock.className = 'info hidden';

    const formModal = modalWindowTimer.querySelector('form');
    formModal.append(this.textClock);

    document.body.append(modalWindowTimer);

    setTimeout(() => {
      modalWindowTimer.classList.add('open');
    }, 1000);
  }

  trigger() {
    this.timerTime();
  }

  timerTime() {
    this.createDiv();
    this.requestProcessing();
    this.closeWindow();
  }

  requestProcessing() {
    const formModal = document.querySelector('.form-modal');
    formModal.addEventListener('submit', (event) => {
      event.preventDefault();

      const { target } = event;

      const newTime = target.time.value;
      target.time.value = '';

      if (
        newTime !== null &&
        newTime !== '' &&
        !isNaN(newTime) &&
        newTime >= 0
      ) {
        this.time = Number(newTime);

        const request = document.querySelector('.request');
        request.classList.add('hidden', 'no-height');

        const info = document.querySelector('.info');
        info.classList.remove('margin');
        info.textContent = 'Loading...';

        this.timerId = setInterval(this.updateTimer, 1000);
      } else {
        const info = document.querySelector('.info');
        info.classList.add('margin');
        this.textClock.textContent = 'Некорректное время!';
      }
    });
  }

  updateTimer() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    const modalWindowTimer = document.querySelector('.modal-window');
    const info = modalWindowTimer.querySelector('.info');
    info.classList.remove('margin');

    this.textClock.textContent = `TIMER TIME: ${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    this.time--;

    if (this.time < 0 || !modalWindowTimer) {
      clearInterval(this.timerId);

      info.classList.add('margin');

      this.textClock.textContent = 'TIMER ENDED!';

      const request = document.querySelector('.request');
      request.classList.remove('hidden', 'no-height');
    }
  }

  closeWindow() {
    const modalWindowTimer = document.querySelector('.modal-window');
    const closeWindow = document.querySelector('.close-window');
    closeWindow.addEventListener('click', () => {
      modalWindowTimer.classList.remove('open');
      clearInterval(this.timerId);
      setTimeout(() => {
        modalWindowTimer.remove();
      }, 1000);
    });
  }
}
