export class PopupNewPlace {
    constructor(popup) {
        this.popup = popup;
        this.popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        });
    }
    open() {
        this.popup.classList.add('popup_is-opened');
    }
    close() {
        this.popup.classList.remove('popup_is-opened');
        this.form = this.popup.querySelector('.popup__form');
        this.form.reset();
        this.nameError = this.form.elements.name.closest('div').querySelector('.error-message');
        this.linkError = this.form.elements.link.closest('div').querySelector('.error-message');
        this.nameError.textContent = '';
        this.linkError.textContent = '';
        this.popupButton = this.popup.querySelector('.popup__button');
        this.popupButton.disabled = true;

    }
    exitClickKey() {

        if (event.key === 'Escape') {
            this.close();
            return;
        }
        if (event.target.classList.contains('popup_is-opened')) {
            this.close();
            return;
        }
    }
}
// class PopupNewPlace {
//     constructor(popup) {
//         this.popup = popup;
//         this.popup.querySelector('.popup__close').addEventListener('click', () => {
//             this.close()
//         });
//     }
//     open() {
//         this.popup.classList.add('popup_is-opened');
//     }
//     close() {
//         this.popup.classList.remove('popup_is-opened');
//         this.form = this.popup.querySelector('.popup__form');
//         this.form.reset();
//         this.nameError = this.form.elements.name.closest('div').querySelector('.error-message');
//         this.linkError = this.form.elements.link.closest('div').querySelector('.error-message');
//         this.nameError.textContent = '';
//         this.linkError.textContent = '';
//         this.popupButton = this.popup.querySelector('.popup__button');
//         this.popupButton.disabled = true;

//     }
//     exitClickKey() {

//         if (event.key === 'Escape') {
//             this.close();
//             return;
//         }
//         if (event.target.classList.contains('popup_is-opened')) {
//             this.close();
//             return;
//         }
//     }
// }