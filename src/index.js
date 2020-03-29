// ПЕРЕМЕННЫЕ

// Токен: 72c21e45-064e-408d-8880-9cc3f4690a39
// Идентификатор группы: cohort8
// _id: "a4954c0f7488eea50ba868ce"

import './index.css';

import { Api } from './scripts/api';
import { Card } from './scripts/Card';
import { Cardlist } from './scripts/CardList';
import { FormValidator } from './scripts/FormValidator';
import { NewPlace } from './scripts/NewPlace';
import { PopupFoto } from './scripts/PopupFoto';
import { PopupWithForm } from './scripts/PopupWithForm';
import { PopupWithFormPlace } from './scripts/PopupWithFormPlace';
import { UserInfo } from './scripts/UserInfo';



(function() {


    const placesList = document.querySelector('.places-list');
    const button = document.querySelector('.user-info__button');
    const buttonEdit = document.querySelector('.user-info__edit');
    const popup = document.querySelector('.popup');
    const popupEdit = document.querySelector('.popup-edit');
    const userName = document.querySelector('.user-info__name');
    const userJob = document.querySelector('.user-info__job');
    const popupPhoto = document.querySelector('.popup-photo');
    const popupImageClose = document.querySelector('.popup-photo__close-image');

    const ERROR_MESSAGES = {
        valueMissing: 'Это обязательное поле',
        tooShort: 'Должно быть от 2 до 30 символов',
        tooLong: 'Должно быть от 2 до 30 символов',
        typeMismatch: 'Здесь должна быть ссылка',
        noError: ''
    }

    const url = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort8' : 'https://praktikum.tk/cohort8';

    // ЭКЗЕМПЛЯРЫ КЛАССОВ

    const card = new Card();
    const api = new Api({
        baseUrl: url,
        headers: {
            authorization: '72c21e45-064e-408d-8880-9cc3f4690a39',
            'Content-Type': 'application/json'
        }
    });

    const userInfo = new UserInfo(document.querySelector('.user-info'), api);
    const cardList = new Cardlist(placesList, card, api, userInfo);
    const popupEditProfile = new PopupWithForm(popupEdit, userName, userJob, '.popup__input_type_name-user', '.popup__input_type_job', userInfo, api);


    Promise.all([
            api.getInitialCards(),
            api.getUser(),
        ])
        .then(([initialCards, user]) => {
            cardList.render(initialCards)
            userInfo.userAvatar(user.avatar);
            userInfo.setUserInfo(user._id, user.name, user.about);
            userInfo.updateUserInfo();
        })
        .catch(err => {
            console.log(err);
        })


    const newPlace = new NewPlace(placesList);
    const popupNewPlace = new PopupWithFormPlace(popup, cardList, '.popup__input_type_name', '.popup__input_type_link-url');
    const formValidator = new FormValidator(popupEdit, ERROR_MESSAGES);
    const formPlaceValidator = new FormValidator(popup, ERROR_MESSAGES);
    const popupFoto = new PopupFoto(popupPhoto);



    //СЛУШАТЕЛИ

    buttonEdit.addEventListener('click', popupEditProfile.open.bind(popupEditProfile));
    button.addEventListener('click', popupNewPlace.open.bind(popupNewPlace));
    placesList.addEventListener('click', card.like);
    placesList.addEventListener('click', card.remove);
    placesList.addEventListener('click', popupFoto.popupPhotoOpen.bind(popupFoto));
    popupImageClose.addEventListener('click', popupFoto.popupPhotoClose.bind(popupFoto));
    document.addEventListener('keydown', popupNewPlace.exitClickKey.bind(popupNewPlace));
    document.addEventListener('click', popupNewPlace.exitClickKey.bind(popupNewPlace));
    document.addEventListener('keydown', popupEditProfile.exitClickKey.bind(popupEditProfile));
    document.addEventListener('click', popupEditProfile.exitClickKey.bind(popupEditProfile));
    document.addEventListener('keydown', popupFoto.popupPhotoClose.bind(popupFoto));
    document.addEventListener('click', popupFoto.popupPhotoClose.bind(popupFoto));


})()