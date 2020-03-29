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
// class Popup {
//     constructor(popup, nameUser, nameJob) {
//         this.popup = popup;
//         this.popup.querySelector('.popup-edit__close-edit').addEventListener('click', () => {
//             this.close();
//         });
//         this.nameUser = nameUser;
//         this.nameJob = nameJob;

//     }
//     open() {
//         this.popup.classList.add('popup_is-opened');
//         this.form = this.popup.querySelector('.popup__form-edit')
//         this.form.elements.name.value = this.nameUser.textContent;
//         this.form.elements.job.value = this.nameJob.textContent;
//         this.popup.querySelector('.popup-edit__button-edit').classList.remove('popup-edit__button-disabled');
//         this.popup.querySelector('.popup-edit__button-edit').disabled = false;

//     }
//     close() {

//         this.popup.classList.remove('popup_is-opened');
//         /* REVIEW3. Надо исправить. Требование из задания 8. Нижеследующие 2 инструкции определяют два элемента - исходные данные проекта,
// поэтому, их определение надо перенести в script.js и передавать в UserInfo как параметры, чтобы  было выполнено требование ООП - делать
// класс независимым от конкретной реализации размётки, то есть реальные исходные данные класса определять только в файле -точке входа в
// проект script.js.
// Можно привести аналогию - когда Вы решаете задачку по алгебре, Вы её решаете в общем виде, а потом подставляете конкретные значения и общее решение
// от конкретных чисел не зависит.
// Точно так же и в ООП.
// Константы, которые надо передавать как параметры можно в script.js объединить в объект и потом этот объект и передавать как параметр в Popup, или в сам
// метод.
// Как это делается почитайте здесь http://www.webpupil.ru/javascript_pract_view.php?id=7
// (тут понятный пример и знать о таком методе передачи параметров очень полезно для реальной работы).

// --------------------------------------------------------------------------------------------------------------------------------------------------------
// Перенос определения констант надо сделать во всех классах, а не только в этом.
// -------------------------------------------------------------------------------------------------------------------------------------------------
// // */

//         this.nameError = this.form.elements.name.closest('div').querySelector('.error-message');
//         this.jobError = this.form.elements.job.closest('div').querySelector('.error-message');
//         this.nameError.textContent = '';
//         this.jobError.textContent = '';


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