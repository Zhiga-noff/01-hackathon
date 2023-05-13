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

      this.createModalWindow(countClick)
      document.removeEventListener('click', () => {
        countClick++;
      });
    }, 3000);
  }

  toHTML() {
    return super.toHTML();
  }

  createModalWindow(count) {
    const modalWindow = document.createElement('div')
    modalWindow.className = 'modal-window'

    const closeWindow = document.createElement('div')
    closeWindow.className = 'close-window'
    modalWindow.append(closeWindow)

    const infoAboutClick = document.createElement('p')
    infoAboutClick.className = 'count-click'
    infoAboutClick.textContent = `Ну ты и накликал конечно, ${count-1} раз(а)`
    modalWindow.append(infoAboutClick)

    document.body.append(modalWindow)

    setTimeout(()=>{
      modalWindow.classList.add('open')
    }, 500)

    closeWindow.addEventListener('click', ()=>{
      modalWindow.classList.remove('open')
      setTimeout(()=>{
        modalWindow.remove()
      }, 1000)
    })
  }
}
