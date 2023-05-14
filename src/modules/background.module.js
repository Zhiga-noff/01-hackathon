import { Module } from '../core/module';
export class BackgroundModule extends Module {
	constructor(type, text) {
   	super(type, text);
}
// Метод рандомного выбора цвета заднего фона 
trigger() {
//	Тут мы нашли body и присвоили ему 'return' функции 'getRandomColor'
   document.body.style.backgroundColor = getRandomColor();
// Собственно сама функция генератор случайного числа
	function getRandomColor() {
// Переменные которые будут дальше использоваться в цикле
      const letters = '0123456789ABCDEF';
      let color = '#';
/* 
	Цикл который берет значения переменных 
	и с каждой итерацией добавляет по одной случайной цифре
	в переменную 'color', пока i < 6 
*/
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
/* 
	Возвращает итоговый результат как код цвета,
	который в свою очерез принимает как параметр 
	'document.body.style.backgroundColor'
*/
      return color;
   }
	}
}
