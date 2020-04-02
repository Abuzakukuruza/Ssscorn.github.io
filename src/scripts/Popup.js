export class Popup {
    constructor(popup, nameUser, nameJob) {
        this.popup = popup;
        this.popup.querySelector('.popup-edit__close-edit').addEventListener('click', () => {
            this.close();
        });
        this.nameUser = nameUser;
        this.nameJob = nameJob;

    }
    open() {
        this.popup.classList.add('popup_is-opened');
        this.form = this.popup.querySelector('.popup__form-edit')
        this.form.elements.name.value = this.nameUser.textContent;
        this.form.elements.job.value = this.nameJob.textContent;
        this.popup.querySelector('.popup-edit__button-edit').classList.remove('popup-edit__button-disabled');
        this.popup.querySelector('.popup-edit__button-edit').disabled = false;

    }
    close() {

        this.popup.classList.remove('popup_is-opened');
        this.nameError = this.form.elements.name.closest('div').querySelector('.error-message');
        this.jobError = this.form.elements.job.closest('div').querySelector('.error-message');
        this.nameError.textContent = '';
        this.jobError.textContent = '';


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
