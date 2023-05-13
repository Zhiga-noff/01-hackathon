import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open(positionX, positionY) {
    this.el.classList.add("open");

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    this.add();

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
    super.close();
  }

  add() {
    super.add();
  }
}
