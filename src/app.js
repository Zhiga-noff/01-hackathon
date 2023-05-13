import "./styles.css";
import { ContextMenu } from "./menu";

const contextMenu = new ContextMenu("#menu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
  contextMenu.open(clientX, clientY);
});
