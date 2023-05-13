import {Module} from '../core/module'

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
    const modalWindowTimer = document.createElement('div')
    modalWindowTimer.id = "timer-div";
    modalWindowTimer.className = 'modal-window'

    const closeWindow = document.createElement('div')
    closeWindow.className = 'close-window'
    modalWindowTimer.append(closeWindow)

    const formModal = document.createElement('form')
    formModal.className = 'form-modal'
    modalWindowTimer.append(formModal)

    const labelInput = document.createElement('label')
    labelInput.setAttribute('for', 'input-modal')
    labelInput.textContent = 'Задайте время в секундах'
    formModal.append(labelInput)

    const inputModal = document.createElement('input')
    inputModal.id = 'input-modal'
    inputModal.name = 'Time'
    formModal.append(inputModal)

    const buttonModal = document.createElement('button')
    buttonModal.className = 'button-modal'
    buttonModal.textContent = 'Задать время'
    formModal.append(buttonModal)


     this.textClock = document.createElement('p')
     this.textClock.className = 'count-click hidden'
    modalWindowTimer.append( this.textClock)

    document.body.append(modalWindowTimer)

    setTimeout(()=>{
      modalWindowTimer.classList.add('open')
    }, 1000)

    return modalWindowTimer
  }

  trigger() {
    this.timerTime();
  }
  
  timerTime() {
    // const newTime = prompt("Задайте время в секундах");
    this.createDiv()
    this.metod()
    // const newTime = this.metod()
    // console.log(newTime);
    //
    // if (newTime !== null && newTime !== "" && !isNaN(newTime) && newTime >= 0) {
    //   this.time = Number(newTime);
    //   const div = document.getElementById("timer-div");
    //
    //   // this.createDiv();
    //
    //   this.timerId = setInterval(this.updateTimer, 1000);
    //
    // } else {
    //   // this.createDiv()
    //   this.textClock.textContent = 'Некорректное время!'
    // }

    this.closeWindow()
  }
  metod() {
    const formModal = document.querySelector('.form-modal')
    formModal.addEventListener('submit', (event)=>{
      event.preventDefault()

      const {target} = event

      const newTime = target.Time.value

      if (newTime !== null && newTime !== "" && !isNaN(newTime) && newTime >= 0) {
        this.time = Number(newTime);
        const div = document.getElementById("timer-div");

        // this.createDiv();

        this.timerId = setInterval(this.updateTimer, 1000);

      } else {
        // this.createDiv()
        this.textClock.textContent = 'Некорректное время!'
      }
    })
  }

  updateTimer() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    const modalWindowTimer = document.querySelector('.modal-window')

   this.textClock.textContent = `TIMER TIME: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    this.time--;
    if (this.time < 0 || !modalWindowTimer) {
      clearInterval(this.timerId);
      this.textClock.textContent = "TIMER ENDED!";

      // setTimeout(() => {
      //   if (modalWindowTimer) {
      //     modalWindowTimer.classList.remove('open')
      //     setTimeout(()=>{
      //       modalWindowTimer.remove()
      //     }, 1000)
      //   }
      // }, 2000);
    }
  }

  closeWindow() {
    const modalWindowTimer = document.querySelector('.modal-window')
    const closeWindow = document.querySelector('.close-window')
    closeWindow.addEventListener('click', ()=>{
      modalWindowTimer.classList.remove('open')
      setTimeout(()=>{
        modalWindowTimer.remove()
      }, 1000)
    })
  }
}
