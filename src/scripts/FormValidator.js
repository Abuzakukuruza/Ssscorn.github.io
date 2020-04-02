//Валидация формы редактирования профиля

export class FormValidator {

    constructor(popup, ERROR_MESSAGES) {
        this.ERROR_MESSAGES = ERROR_MESSAGES;
        this.form = popup.querySelector('.form');
        this.button = this.form.querySelector('.button');

        this.form.addEventListener('input', this.validate.bind(this));
    }

    validate(event) {
        this.checkInputValidity(event.target, event.target.closest('div').querySelector('.error-message'));
        this.setSubmitButtonState(this.form, this.button);
    }


    checkInputValidity(input, error) {

        this.error = error;

        if (input.validity.valueMissing) {
            return this.error.textContent = this.ERROR_MESSAGES.valueMissing;
        }
        if (input.validity.tooShort) {
            return this.error.textContent = this.ERROR_MESSAGES.tooShort;
        }
        if (input.validity.tooLong) {
            return this.error.textContent = this.ERROR_MESSAGES.tooLong;
        }
        if (input.validity.typeMismatch) {
            return this.error.textContent = this.ERROR_MESSAGES.typeMismatch;
        }
        this.error.textContent = this.ERROR_MESSAGES.noError;
    }

    setSubmitButtonState(form, button) {
        button.disabled = !form.checkValidity();


        if (!form.checkValidity()) {
            return button.classList.add('popup-edit__button-disabled');
        }
        if (!form.checkValidity()) {
            return button.classList.add('popup__button-disabled');
        }
        if (form.checkValidity()) {
            return button.classList.remove('popup-edit__button-disabled');
        }
        if (form.checkValidity())
            return button.classList.remove('popup__button-disabled');
    }

}
