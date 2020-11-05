// переменные классов
const nameOutput = document.querySelector('.profile__name');
const titleOutput =  document.querySelector('.profile__title');
const formElement = document.querySelector('.edit-form__fields');
const cardElement = document.querySelector('.add-card__fields');
const popupSelect = document.querySelector('.popup');
const editForm = document.querySelector('.edit-form');
const cardForm = document.querySelector('.add-card');
const imageForm = document.querySelector('.image-popup');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;
const imagePlace = document.querySelector('.image-popup__image');
const signPlace = document.querySelector('.image-popup__sign');

// переменные для всех кнопок
const editButton = document.querySelector('.profile__edit');
const closeFormButton = document.querySelector('.edit-form__close');
const closeCardButton = document.querySelector('.add-card__close');
const closeImageButton = document.querySelector('.image-popup__close');
const saveButton = document.querySelector('.edit-form__button');
const addCardButton = document.querySelector('.profile__add');
const saveCardButton = document.querySelector('.add-card__button');

// получение импортированного массива
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

//функции открытия/закрытия попапа и формы редактирования профиля

function showPopup() {
  popupSelect.classList.toggle('popup_opened');
}

function toggleFormClass() {
  editForm.classList.toggle('edit-form_opened');
}

function changeFormClass() {
  if (editForm.classList.contains('edit-form_opened')) {
      showPopup();
      toggleFormClass();
  } else {
    showPopup();
    toggleFormClass();
    nameField.value = nameOutput.textContent;
    titleField.value = titleOutput.textContent;
  }
}

// отправление данных из профиля в форму редактирования

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameField.value;
    titleOutput.textContent = titleField.value;
    changeFormClass ();
}

// создание динамических карточек из массива

initialCards.forEach(function (element) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__name-title').textContent = element.name;
  cardContainer.append(cardElement);
});

// функция добавления карточки на первое место в списке

function addCard () {
  let newCard = initialCards.slice(0,1);
  newCard.forEach(function (element) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__image').alt = element.name;
    cardElement.querySelector('.element__name-title').textContent = element.name;
    cardContainer.prepend(cardElement);
  });
 }

 //функция отправки данных из формы добавления карточки в массив

function cardSubmitHandler (evt) {
  evt.preventDefault();

  initialCards.unshift({name: placeField.value , link: sourceField.value});
  toggleCardClass ();
  addCard();
  placeField.value = '';
  sourceField.value = '';
  console.log (initialCards);
}

//функция открытия формы добавления карточки

function toggleCardClass() {
  if (cardForm.classList.contains('add-card')) {
      showPopup();
      cardForm.classList.toggle('add-card_opened');
  }
}
//функция открытия превью картинки

currentDocument.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__image')) {
    showPopup();
    imageForm.classList.add('image-popup_opened');
  }
  if (event.target.classList.contains('image-popup__close')) {
    imageForm.classList.remove('image-popup_opened');
    showPopup();
  }
});
//функция передачи картинки из карточки в попап
currentDocument.addEventListener('click', function (event) {
  if (event.target.classList.contains('element__image')) {
    imagePlace.src = event.target.getAttribute("src");
    signPlace.textContent = event.target.getAttribute("alt");
  }
});

// document.addEventListener("click", (e) => {console.log(e.target); });


// добавление/удалений лайка на карточке

currentDocument.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__button-like')) {
    event.target.classList.toggle('element__button-like_active');
  }
});

//удаление карточки по нажатию на корзину

currentDocument.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__button-trash')) {
    const currentDocument = event.target.closest('.element');
    currentDocument.remove();
  }
});


// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);
cardElement.addEventListener('submit', cardSubmitHandler);
addCardButton.addEventListener('click', toggleCardClass, false);
editButton.addEventListener('click', changeFormClass, false);
closeFormButton.addEventListener('click', changeFormClass, false);
closeCardButton.addEventListener('click', toggleCardClass, false);
