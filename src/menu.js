import { Menu } from "./core/menu";
import { BackgroundModule } from '../src/modules/background.module.js';
import { FigureModule } from '../src/modules/figure.module';
import { ClicksModule } from '../src/modules/clicks.module';

const moduleFeatches = [
  new ClicksModule('clicks', 'Считать клики (за 3 секунды)'),
  new BackgroundModule('background', 'Поменять цвет'),
  new FigureModule('figure', 'Создать фигуру'),
];

export class ContextMenu extends Menu {
  #moduleName

  constructor(selector) {
    super(selector);
  }

  open(positionX, positionY) {
    this.close()
    this.el.classList.add("open");

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    moduleFeatches.forEach(module => {
      this.add(module);
    });

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
	console.log('close');
	this.el.classList.remove('open');
	  document.querySelectorAll('li').forEach(elem => elem.remove());
  }

  add(module) {
    const moduleHTML = module.toHTML(); //так как модуль возвращает HTML, создаем ноду
    this.el.insertAdjacentHTML('beforeend', moduleHTML); //добавление в пунт меню.
    let moduleNode = this.el.querySelector(`[data-type=${module.type}`);
    
    if (typeof moduleNode !== null) { //обработка клика
      moduleNode.addEventListener('click', () => {
        const nameModule = moduleNode.dataset.type;
        const activeModule = moduleFeatches.find(modul => modul.type === nameModule);
        activeModule.trigger();
      });
    }
  }
}
