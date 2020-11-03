// переменные классов
let nameOutput = document.querySelector('.profile__name');
let titleOutput =  document.querySelector('.profile__title');
let formElement = document.querySelector('.edit-form__fields');
let popupSelect = document.querySelector('.popup');
let editForm = document.querySelector('.edit-form');
let cardForm = document.querySelector('.edit-card');
const cardContainer = document.querySelector('.elements__list');

// переменные для всех кнопок
let editButton = document.querySelector('.profile__edit');
let closeFormButton = document.querySelector('.edit-form__close');
let closeCardButton = document.querySelector('.edit-card__close');
let saveButton = document.querySelector('.edit-form__button');
let addCardButton = document.querySelector('.profile__add');
let saveCardButton = document.querySelector('.edit-card__button');

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

// function addCard () {
//   initialCards.unshift('name: ${placeField.textContent} , link: ${sourceField.textContent}')
// }

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет



function formSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameField.value;
    titleOutput.textContent = titleField.value;
    formClassToggle ();
}

function cardClassToggle() {
  if (popupSelect.classList.contains('popup_opened')) {
      popupSelect.classList.toggle('popup_opened');
      cardForm.classList.toggle('edit-card_opened');
  } else {
    popupSelect.classList.toggle('popup_opened');
    cardForm.classList.toggle('edit-card_opened');
  }
}

function formClassToggle() {
  if (popupSelect.classList.contains('popup_opened')) {
      popupSelect.classList.toggle('popup_opened');
      editForm.classList.toggle('edit-form_opened');
  } else {
    popupSelect.classList.toggle('popup_opened');
    editForm.classList.toggle('edit-form_opened');
    nameField.value = nameOutput.textContent;
    titleField.value = titleOutput.textContent;
  }
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

addCardButton.addEventListener('click', cardClassToggle, false);
editButton.addEventListener('click', formClassToggle, false);
closeFormButton.addEventListener('click', formClassToggle, false);
closeCardButton.addEventListener('click', cardClassToggle, false);
