//импортируем карточки
import {initialCards} from './CardsData.js';

//определяем элементы
//поля edit
const nameOutput = document.querySelector('.profile__name');
const titleOutput =  document.querySelector('.profile__title');
//попапы edit add img
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addCardPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');
//список карточек
const cardContainer = document.querySelector('.elements__list');
//template карточки
const cardTemplate = document.querySelector('#card').content;
//определяем все кнопки
//кнопки открытия попапов
const openEditButton = document.querySelector('.profile__edit');
const openAddButton = document.querySelector('.profile__add');
//кнопки закрытия попапов
const closeEditButton = document.querySelector('.popup__close_edit-profile');
const closeAddButton = document.querySelector('.popup__close_add-card');
const closeImageButton = document.querySelector('.popup__close_image')
//данные открытой фотографии
const imagePlace =  document.querySelector('.popup__image-full');
const signPlace =  document.querySelector('.popup__image-sign');

//ФУНКЦИИ
//создаём новый массив из изначального

const mapCards = initialCards.map (function (element) {
  return element
});

//добавление карточек
// создание новой карточки

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  cardElement.querySelector(".element__name-title").textContent = name;
  return cardElement;
}

// добавление карточки в начало контейнера

// function appendContainer(name, link) {
//   cardContainer.append(createCard(name, link));
// }
// // добавление карточки в конец контейнера
//
// function prependContainer(name, link) {
//   cardContainer.prepend(createCard(name, link));
// }

function addCard(name, link, isPrepend) {
    if (isPrepend) {
        cardContainer.prepend(createCard(name, link));
    } else {
        cardContainer.append(createCard(name, link));
    }
}
//обходим массив, чтоб создать карточки и добавить в конец контейнера

mapCards.forEach(function (card) {
  addCard(card.name, card.link);
});

//открытие и закрытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//запись текущих данных профиля в Edit и обратно после редактирования

function transferInEdit() {
  nameField.value = nameOutput.textContent;
  titleField.value = titleOutput.textContent;
}
function transferFromEdit() {
  nameOutput.textContent = nameField.value;
  titleOutput.textContent = titleField.value;
}



//обраточики кликов по всем кнопкам
//всё для Edit

openEditButton.addEventListener('click', function () {
  openPopup(editProfilePopup);
  transferInEdit();
});

closeEditButton.addEventListener('click', function () {
  closePopup(editProfilePopup);
});

editProfilePopup.addEventListener('submit', function (event) {
  event.preventDefault();
  transferFromEdit();
  closePopup(editProfilePopup);
});
//всё для Add Image

openAddButton.addEventListener('click', function () {
  openPopup(addCardPopup);
  placeField.value = '';
  sourceField.value = '';
});

addCardPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = placeField.value;
  const link = sourceField.value;
  // const isPrepend = true;
  addCard(name, link, isPrepend);
  closePopup(addCardPopup);
  console.log(isPrepend);
}, true);

closeAddButton.addEventListener('click', function () {
  closePopup(addCardPopup);
});
//всё для img
//открытие превью картинки

function transferImageData() {
  imagePlace.src = event.target.getAttribute("src");
  signPlace.textContent = event.target.getAttribute("alt");
}


closeImageButton.addEventListener('click', function () {
  closePopup(imagePopup);
});


// открытые картинки, добавление/удаление лайка на карточке, удаление карточки

cardContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('element__button-like')) {
    event.target.classList.toggle('element__button-like_active');
  } else  if (event.target.classList.contains('element__image')) {
    openPopup(imagePopup);
    transferImageData();
  } else  if (event.target.classList.contains('element__button-trash')) {
    const cardContainer = event.target.closest('.element');
    cardContainer.remove();
  }
});

//закрытие попапа по клику вне контейнера
document.addEventListener ('click', function (event) {
  if (event.target === popupEdit || event.target === popupImage || event.target === popupAdd) {
    closePopup(editProfilePopup);
    closePopup(addCardPopup);
    closePopup(imagePopup);
  }
});

// закрытие попапа по нажатию Esc
document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    if (keyCode === 27) {
      closePopup(editProfilePopup);
      closePopup(addCardPopup);
      closePopup(imagePopup);
    }
});





document.addEventListener ('click', function (event) {
  console.log(event.target);
});
