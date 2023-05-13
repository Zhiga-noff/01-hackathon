import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open(positionX, positionY) {
    console.log(this.el);
    this.el.classList.add("open");
    this.el.style.top = `${positionY}px`;
    this.el.style.left = `${positionX}px`;
    const li = document.createElement("li");
    li.textContent = "khdgadshgalkj";
    this.el.append(li);
  }

  close() {
    super.close();
  }

  add() {
    super.add();
  }
}
