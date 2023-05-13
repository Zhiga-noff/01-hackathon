import {Module} from '../core/module'
export class BackgroundModule extends Module {
	constructor(type,text){
		super(type,text);
	}
	changeColor(){
		document.body.addEventListener('click', ()=>{
			document.body.style.backgroundColor = getRandomColor();
			function getRandomColor() {
				const letters = '0123456789ABCDEF';
				let color = '#';
				for (let i = 0; i < 6; i++) {
				  color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}
		})
	}
}