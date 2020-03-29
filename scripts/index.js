
const root = document.querySelector('.root');


const errorMessage = { ru: {
  emptyInput: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
  wrongType: 'Здесь должна быть ссылка',
  correctInput: ''
  }
};


const card = new Card();

const cardList = new CardList(document.querySelector('.places-list'), card);  // контейнер с карточками

cardList.render(initialCards);

const validation = new Validation(errorMessage.ru);

const popupAddCard = new PopupAddCard(document.querySelector('.popup_type_place'), validation, cardList);
const popupEdit = new PopupEdit(document.querySelector('.popup_type_edit'), validation);
const popupImage = new PopupImage(document.querySelector('.popup_type_picture'));






root.addEventListener('click', e => {
  popupEdit.open(e);
  popupEdit.close(e);

  popupImage.open(e);
  popupImage.close(e);

  popupAddCard.open(e);
  popupAddCard.close(e);

})


cardList.container.addEventListener('click', e => {
  card.like(e);
  card.remove(e);
});



popupEdit.form.addEventListener('input', e => {
  popupEdit.validation.isValid(e);
});
popupEdit.form.addEventListener('submit', e => {
  popupEdit.submit(e);
});


popupAddCard.form.addEventListener('input', e => {
  popupAddCard.validation.isValid(e);
});
popupAddCard.form.addEventListener('submit', e => {
  popupAddCard.submit(e);
});




