import "./styles.css";
import { ContextMenu } from "./menu";

const contextMenu = new ContextMenu("#menu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const { clientX, clientY } = event;
  contextMenu.open(clientX, clientY);
});
document.body.addEventListener('click',(event)=>{
	if(event.target == contextMenu){
		contextMenu.close()
	}
})