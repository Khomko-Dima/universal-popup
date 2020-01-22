window.addEventListener('DOMContentLoaded', function() {
	// Modal
    "use strict";
    const 
            html = document.querySelector('html'),
            overlay = document.querySelector('.modal-overlay'), //оврелей фона
            modalMass = [...(document.querySelectorAll('.Modal'))], //все модальные окна
            open_modal = document.querySelectorAll('.open_modal'); //все кнопки вызова модального окна
    let modal = null;
    const closeModal = (modal) => { //Закрытие модального окна
        modal.querySelector('.closeModal').addEventListener('click', ()=>{
            closeModalFunc(modal);
        })
        overlay.addEventListener('click', (e)=>{
            if (!e.target.classList.contains('modal-overlay')) return; 
            closeModalFunc(modal);
        }); //закрытие при нажатии вне модального окна
    };
    const closeModalFunc = (modal) => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        html.classList.remove('modal-is-locked');
    };
    const shoyPopup = (modal, overlay) => {
        modal.classList.add('active');
        overlay.classList.add('active');
        html.classList.add('modal-is-locked');
    };
    open_modal.forEach((el) => el.addEventListener('click', function(event) {
        const dataAction = event.target.dataset.action; // дата атрибут элемента по каторому нажали
        modal = modalMass.filter(el => el.dataset.target == dataAction)[0];// получение модального окна со значением равному data-target
        const ollModal = [];
        shoyPopup(modal, overlay); // ф. открывает попап.

        const modal_first = [modal.querySelector('.Modal_Head')];

        switch(dataAction){
            case 'first':
                ollModal.push(...modal_first);
                creatorPopup(event.target, ollModal); // ф. заполняет поля попап окна из data свойст кнопки.
                break;   
        };
        closeModal(modal);
    }));
    
    const creatorPopup = (val, ollModal) => {
        const [popupHeader, popupContent, popupInput] = ollModal;
        const atr = val.dataset; //все значения data атрибутов

        try {
            popupHeader.innerText = atr.header;
            popupContent.innerHTML = atr.contentHtml;
        	popupInput.value = atr.inputValue;
		}catch (e) {}
        
    };

});