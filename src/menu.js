import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  // Метод принимает в себя позицию указателя мыши
  open(positionX, positionY) {
    this.close();
    this.el.classList.add('open');

    // Получаю ширину и высоту окна браузера
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    // Если окно не помещается в рамках окна браузера, оно сдвигается
    // в противополжную сторону
    if (positionX + this.el.offsetWidth >= windowWidth) {
      this.el.style.left = `${positionX - this.el.offsetWidth}px`;
    } else {
      this.el.style.left = `${positionX}px`;
    }

    if (positionY + this.el.offsetHeight >= windowHeight) {
      this.el.style.top = `${positionY - this.el.offsetHeight}px`;
    } else {
      this.el.style.top = `${positionY}px`;
    }
  }

  /* Этот метод удаляет класс 'open', 
    для того чтобы контестное меню не отображалось*/

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    console.log(module);
    const moduleHTML = module.toHTML(); //так как модуль возвращает HTML, создаем ноду
    this.el.insertAdjacentHTML('beforeend', moduleHTML); //добавление в пунт меню.
    let moduleNode = this.el.querySelector(`[data-type=${module.type}`);

    if (typeof moduleNode !== null) {
      //обработка клика
      moduleNode.addEventListener('click', (event) => {
        module.trigger();
        this.close();
      });
    }
  }
}
