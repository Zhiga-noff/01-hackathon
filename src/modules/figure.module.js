import { Module } from '../core/module';
import { random } from '../utils';

export class FigureModule extends Module {
    #maxWidth
    #minWidth
    #maxHeight
    #minHeight

    constructor(type, text) {
        super(type, text);
        this.#minWidth = 70;
        this.#maxWidth = 200;
        this.#minHeight = 70;
        this.#maxHeight = 200;
        this.baseColor = 'tomato';
    }

    trigger() {

        const figure = document.querySelectorAll('.figure');
        if (figure.length) {
            figure.forEach(item => {
                item.classList.add('animation--hide');
               
                setTimeout(() => {
                    item.classList.remove('animation--show');
                }, 500);

                setTimeout(this.remove, 1000, item);
            });
        } 

        const newFigure = this.create(); 
        newFigure.style.background = this.baseColor;
        const borderRadius = random(1,  50);

        const width = random(this.#minWidth,  this.#maxWidth);
        const height = random(this.#minHeight,  this.#maxHeight);        
        newFigure.style.width = `${width}px`;
        newFigure.style.height = `${height}px`;
        newFigure.style.borderRadius = `${borderRadius}%`;
        this.setPosition(newFigure, width, height);
        document.body.append(newFigure);
    }

    create() {
        const figure = document.createElement('div');
        figure.classList.add('figure', 'animation', 'animation--show');
        return figure;
    }

    remove(figure) {
        figure.remove(figure);
    }

    setPosition(el, elWidth, elHeight) {
        const position = document.body.getBoundingClientRect();
        const posX = random(1, position.width - elWidth);
        const posY = random(1, position.height - elHeight);
        el.style.left = `${posX}px`;
        el.style.top = `${posY}px`;
    }
}