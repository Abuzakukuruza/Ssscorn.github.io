import { PopupNewPlace } from './PopupNewPlace';

export class PopupWithFormPlace extends PopupNewPlace {
    /* REVIEW3. Здесь Вы передаёте как параметры селекторы классов элементов, и это хорошо - это делает класс независимым от конкретных значений этих селекторов.
    В ООП так и надо стараться по-возможности.*/
    constructor(popup, cardList, nameSelector, linkSelector) {
        super(popup);
        this.cardList = cardList;
        this.form = popup.querySelector('form');
        this.form.addEventListener('submit', this.onSubmit.bind(this));
        this.name = this.form.querySelector(nameSelector);
        this.link = this.form.querySelector(linkSelector);
    }

    onSubmit(event) {
        event.preventDefault();
        this.cardList.addCard({
            name: this.name.value,
            link: this.link.value
        });
        this.close();
    }
}
// class PopupWithFormPlace extends PopupNewPlace {
//     constructor(popup, cardList, nameSelector, linkSelector) {
//         super(popup);
//         this.cardList = cardList;
//         this.form = popup.querySelector('form');
//         this.form.addEventListener('submit', this.onSubmit.bind(this));
//         this.name = this.form.querySelector(nameSelector);
//         this.link = this.form.querySelector(linkSelector);
//     }

//     onSubmit(event) {
//         event.preventDefault();
//         this.cardList.addCard({
//             name: this.name.value,
//             link: this.link.value
//         });
//         this.close();
//     }
// }