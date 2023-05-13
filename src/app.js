import "./styles.css";
import { ContextMenu } from "./menu";

import { BackgroundModule } from './modules/background.module.js';
import { FigureModule } from './modules/figure.module';
import { ClicksModule } from './modules/clicks.module';
import { hiddenMenu } from './utils';
import { TimerModule } from './modules/timer.module';

const moduleFeatches = [
  new ClicksModule('clicks', 'Считать клики (за 3 секунды)'),
  new BackgroundModule('background', 'Поменять цвет'),
  new FigureModule('figure', 'Создать фигуру'),
  new TimerModule('timer', 'Запустить обратный отчет'),
];


const contextMenu = new ContextMenu("#menu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const { clientX, clientY } = event;
  contextMenu.open(clientX, clientY);
  hiddenMenu()
});


//перенес сюда. Чтобы не добавлялись повторно в меню.
moduleFeatches.forEach(module => {
  contextMenu.add(module);
});

