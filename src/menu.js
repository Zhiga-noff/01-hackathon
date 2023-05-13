import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open(positionX, positionY) {
    console.log(this.el);
    this.el.classList.add("open");

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    // console.log(windowWidth, windowHeight);
    console.log(this.el.offsetWidth);

    const li = document.createElement("li");
		li.classList = 'menu-item';
		li.textContent = "Считать клики (за 3 секунды)";
		const li2 = document.createElement("li");
		li2.classList = 'menu-item';
		li2.textContent = "Создать фигуру";
		const li3 = document.createElement("li");
		li3.classList = 'menu-item';
		li3.textContent = "Поменять цвет";
		const li4 = document.createElement("li");
		li4.classList = 'menu-item';
		li4.textContent = "Вызвать сообщение";
		this.el.append(li,li2,li3,li4);

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

  add() {
    super.add();
  }
}
