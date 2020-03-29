//Добавление нового места


export class NewPlace {
    constructor(container) {
        this.nameContainer = container.querySelector('.popup__input_type_name');
        this.urlContainer = container.querySelector('.popup__input_type_link-url');
    }

    updatePlaceInfo(name, link) {
        this.nameContainer.textContent = name;
        this.urlContainer.textContent = link;
    }
}