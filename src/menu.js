import { Menu } from "./core/menu";
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open(positionX, positionY) {
    this.close()
    this.el.classList.add("open");

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

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

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    console.log(module);
    const moduleHTML = module.toHTML(); //так как модуль возвращает HTML, создаем ноду
    this.el.insertAdjacentHTML('beforeend', moduleHTML); //добавление в пунт меню.
    let moduleNode = this.el.querySelector(`[data-type=${module.type}`);
    
    if (typeof moduleNode !== null) { //обработка клика
      moduleNode.addEventListener('click', (event) => {
        module.trigger();
        this.close();
      });
    }
  }
}
