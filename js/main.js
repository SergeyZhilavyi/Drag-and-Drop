'use strict';



const dragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');

    /* Скрываем карточку, во время перетаскивания */
    const dragStart = function() {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };


    /* Показываем карточку на её изначальной позиции */
    const dragEnd = function() {
        this.classList.remove('hide');
    };

    /* Срабатывает над элементом, когда в него можно осуществить drop */
    const dragOver = function(e) {
        e.preventDefault();
    };

    /* Сработает, когда карточка попадёт в пределы ячейки */
    const dragEnter = function(e) {
        e.preventDefault();
        this.classList.add('hovered');
    };

    /* Срабатывает каждый раз, когда карточка покидает ячейку */
    const dragLeave = function() {
        this.classList.remove('hovered');
    };

    /* Добавляем карточку в нужную ячейку */
    const dragDrop = function() {
        this.append(card);
        this.classList.remove('hovered');
    };

    /* Работаем с ячейками */
    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
};
dragAndDrop();

