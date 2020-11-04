// переменные классов
let nameOutput = document.querySelector('.profile__name');
let titleOutput =  document.querySelector('.profile__title');
let formElement = document.querySelector('.edit-form__fields');
let cardElement = document.querySelector('.add-card__fields');
let popupSelect = document.querySelector('.popup');
let editForm = document.querySelector('.edit-form');
let cardForm = document.querySelector('.add-card');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;


// переменные для всех кнопок
let editButton = document.querySelector('.profile__edit');
let closeFormButton = document.querySelector('.edit-form__close');
let closeCardButton = document.querySelector('.add-card__close');
let saveButton = document.querySelector('.edit-form__button');
let addCardButton = document.querySelector('.profile__add');
let saveCardButton = document.querySelector('.add-card__button');

let currentDocument = document.currentScript.ownerDocument;
//массив с карточками

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1594751240694-f5b728fe4564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=763&q=80'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// функция добавления карточек из массива

initialCards.forEach(function (element) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__name-title').textContent = element.name;
  cardContainer.append(cardElement);
});

function addCard () {
  let newCard = initialCards.slice(0,1);
  newCard.forEach(function (element) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__name-title').textContent = element.name;
    cardContainer.prepend(cardElement);
  });
 }

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет



function formSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameField.value;
    titleOutput.textContent = titleField.value;
    formClassToggle ();
}

function cardSubmitHandler (evt) {
  evt.preventDefault();

  initialCards.unshift({name: placeField.value , link: sourceField.value});
  cardClassToggle ();
  addCard();
  placeField.value = '';
  sourceField.value = '';
  console.log (initialCards);
}

function popupShow() {
  popupSelect.classList.toggle('popup_opened');
}

function cardClassToggle() {
  if (cardForm.classList.contains('add-card')) {
      popupShow();
      cardForm.classList.toggle('add-card_opened');

  }
}

function formClassToggle() {
  if (editForm.classList.contains('edit-form_opened')) {
      popupShow();
      editForm.classList.toggle('edit-form_opened');
  } else {
    popupShow();
    editForm.classList.toggle('edit-form_opened');

    nameField.value = nameOutput.textContent;
    titleField.value = titleOutput.textContent;
  }
}


// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);
cardElement.addEventListener('submit', cardSubmitHandler);

addCardButton.addEventListener('click', cardClassToggle, false);
editButton.addEventListener('click', formClassToggle, false);
closeFormButton.addEventListener('click', formClassToggle, false);
closeCardButton.addEventListener('click', cardClassToggle, false);



currentDocument.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__button-like')) {
    event.target.classList.toggle('element__button-like_active');
  }
});


currentDocument.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__button-trash')) {
    const currentDocument = event.target.closest('.element');
    currentDocument.remove();
  }
});
