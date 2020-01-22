window.addEventListener('DOMContentLoaded', function() {
	// Modal
    "use strict";
    const 
            html = document.querySelector('html'),
            overlay = document.querySelector('.modal-overlay'), //оврелей фона
            modalMass = [...(document.querySelectorAll('.Modal'))], //все модальные окна
            open_modal = document.querySelectorAll('.open_modal'); //все кнопки вызова модального окна
    let modal = null;
    const closeModal = (e) => { //Закрытие модального окна
        e.preventDefault();
        const target = e.target;
        if (target.classList.contains('modal-overlay') || target.closest('.close-modal')) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            html.classList.remove('modal-is-locked');
            modal.style.display = 'none';
            overlay.removeEventListener('click', closeModal);
        }
    };
    const shoyPopup = (modal) => {
        modal.classList.add('active');
        overlay.classList.add('active');
        html.classList.add('modal-is-locked');
        modal.style.display = 'flex';
    };
    const creatorPopup = (val) => {
        const atr = val.dataset; //все значения data атрибутов
        const modalContent = modal.querySelector('.modal-content');
        modalContent.innerHTML = `<h3>${atr.header}</h3>`
    };
    const openModal = (e) => {
        const dataAction = event.target.dataset.action; // дата атрибут элемента по каторому нажали
        modal = modalMass.filter(el => el.dataset.target == dataAction)[0];// получение модального окна со значением равному data-target
        shoyPopup(modal); // ф. открывает попап.
        if (dataAction === 'first') {
            creatorPopup(event.target);
        }
        if (dataAction === 'second') {
            creatorPopup(event.target)
        }
        overlay.addEventListener('click', closeModal);
    };
    open_modal.forEach((el) => el.addEventListener('click', openModal));
});