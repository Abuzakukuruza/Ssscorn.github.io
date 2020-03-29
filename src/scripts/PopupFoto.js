//Открытие фотографий в popup


export class PopupFoto {

    constructor(popup) {

        this.popup = popup;

        this.image = this.popup.querySelector('.popup-photo__image');
    }

    popupPhotoOpen(event) {

        if (event.target.classList.contains('place-card__image')) {

            this.popup.classList.add('popup-photo_is-opened');

            this.image.src = event.target.style.backgroundImage.slice(5, -2);
        }
    }

    popupPhotoClose(event) {

        if (event.target.classList.contains('popup-photo__close-image')) {

            this.popup.classList.remove('popup-photo_is-opened');

        } else if (event.key === 'Escape') {

            this.popup.classList.remove('popup-photo_is-opened');

        } else if (event.target.classList.contains('popup-photo_is-opened')) {

            this.popup.classList.remove('popup-photo_is-opened');
        }
    }

}