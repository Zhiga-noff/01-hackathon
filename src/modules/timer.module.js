import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor() {
        this.time = 0;
        this.text = null;
        this.timerId = null;
        this.createDiv = this.createDiv.bind(this);
        this.timer = this.timer.bind(this);
        this.timerTime = this.timerTime.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
      }
    
      createDiv() {
        const div = document.createElement("div");
        div.id = "timer-div";
        this.text = document.createElement("p");
        div.appendChild(this.text);
        document.body.append(div);
        return div;
      }
    
      timer() {
        this.timerTime();
      }
    
      timerTime() {
        const newTime = prompt("Задайте время в секундах", this.time);
        if (newTime !== null && newTime !== "" && !isNaN(newTime) && newTime >= 0) {
          this.time = Number(newTime);
          const div = document.getElementById("timer-div");
          if (div) {
            div.remove();
          }
          this.createDiv();
          this.timerId = setInterval(this.updateTimer, 1000);
        } else {
          console.log("Некорректное время!");
        }
      }
    
      updateTimer() {
        const minutes = Math.floor(this.time / 60);
        const seconds = this.time % 60;
        this.text.textContent = `TIMER TIME: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        this.time--;
        if (this.time < 0) {
          clearInterval(this.timerId);
          this.text.textContent = "TIMER ENDED!";
          setTimeout(() => {
            const div = document.getElementById("timer-div");
            if (div) {
              div.remove();
            }
          }, 5000);
        }
      }
    }
