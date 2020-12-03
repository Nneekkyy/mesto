//имопрт карточек и валидации
import {initialCards} from './CardsData.js';
// import {enableValidation} from './validate.js';

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
const addButton = document.querySelector('.popup__button_add-card');
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

// открытые картинки, добавление/удаление лайка на карточке, удаление карточки
// const handleLikeIcon = (evt) => {
//   if (evt.target.classList.contains('element__button-like')) {
//     evt.target.classList.toggle('element__button-like_active');
//   }
// };
// const handleTrashButton = (evt) => {
//   if (evt.target.classList.contains('element__button-trash')) {
//       const cardContainer = event.target.closest('.element');
//       cardContainer.remove();
//   }
// };
// const handleImageOpen = (evt) => {
//   if (evt.target.classList.contains('element__image')) {
//     openPopup(imagePopup);
//     transferImageData();
//   }
// };


// создание новых карточек
class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
   const cardElement = document
     .querySelector(this._cardSelector)
     .content
     .querySelector('.element')
     .cloneNode(true);
   return cardElement;
 }
 _handleTrashButton(){
   const cardContainer = event.target.closest('.element');
   event.target.closest('.element').remove();
 }
 _handleLikeIcon(){
   this._likeButton.classList.toggle('element__button-like_active');
 }
 _handleImageOpen(){
       openPopup(imagePopup);
       transferImageData();
 }
 _addListeners () {
  this._deleteButton.addEventListener('click', () => {
      this._handleTrashButton();
    })
  this._likeButton.addEventListener('click', () => {
    this._handleLikeIcon();
  })
  this._cardImage.addEventListener('click', () => {
    this._handleImageOpen();
  })
}
 generateCard() {
  this._element = this._getTemplate();
  this._element.querySelector('.element__name-title').textContent = this._name;
  this._element.querySelector('.element__image').src = this._link;
  this._element.querySelector('.element__image').alt = this._name;
  this._likeButton = this._element.querySelector('.element__button-like');
  this._deleteButton = this._element.querySelector('.element__button-trash');
  this._cardImage = this._element.querySelector('.element__image');
  this._addListeners();
  return this._element;
}
}
// function addCard(item, cardSelector, isPrepend) {
//
//     if (isPrepend) {
//         cardContainer.prepend(cardElement);
//     } else {
//         cardContainer.append(cardElement);
//     }
//
//   })
// }
//обходим массив, чтоб создать карточки и добавить в конец контейнера

mapCards.forEach(function (name, link, cardSelector) {
  addCard(name, link);
});
function addCard(name, link, cardSelector) {
  const card = new Card(name, link, '#card');
  const cardElement = card.generateCard();
  cardContainer.append(cardElement);
}
// mapCards.forEach((item, cardSelector) => {
//
// });
// mapCards.forEach((item, cardSelector) => {
//   const card = new Card(item.name, item.link, '#card');
//   const cardElement = card.generateCard();
//   cardContainer.append(cardElement);
// });
// mapCards.forEach((item) => {
// 	const card = new Card(item, '#card');
// 	const cardElement = card.generateCard();
//
//   cardContainer.append(cardElement);
// });
// function createCard(name, link) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const elementImage = cardElement.querySelector('.element__image');
//   elementImage.src = link;
//   elementImage.alt = name;
//   cardElement.querySelector(".element__name-title").textContent = name;
//   cardContainer.addEventListener('click', handleLikeIcon);
//   cardContainer.addEventListener('click', handleImageOpen);
//   cardContainer.addEventListener('click', handleTrashButton);
//   return cardElement;
// }

// добавление карточки
//
// function addCard(item, cardSelector, isPrepend) {
//
//     if (isPrepend) {
//         cardContainer.prepend(cardElement);
//     } else {
//         cardContainer.append(cardElement);
//     }
//
//   })
// }
//обходим массив, чтоб создать карточки и добавить в конец контейнера

// mapCards.forEach(function (card) {
//   addCard(card.name, card.link);
// });

//очистка ошибки при закрытии попапа
const clearErrors = () => {
  document.querySelectorAll('.popup__field-error').forEach((span) => {
   span.textContent = '';
  span.classList.remove('popup__field-error');
  });
  document.querySelectorAll('.popup__field').forEach((input) => {
    input.classList.remove('popup__field_invalid');
  });
};

// закрытие попапа по нажатию Esc
const escButton = 27;

const closeAtEscButton = (evt) => {
  if (evt.keyCode === escButton) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

// Открытие/закрытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeAtEscButton);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeAtEscButton);
  clearErrors();
}

//запись текущих данных профиля в Edit и обратно после редактирования

function transferInEdit() {
  nameField.value = nameOutput.textContent;
  titleField.value = titleOutput.textContent;
};
function transferFromEdit() {
  nameOutput.textContent = nameField.value;
  titleOutput.textContent = titleField.value;
};
function resetForm() {
  document.getElementById("popupForm").reset();
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
  resetForm();
  addButton.classList.add('popup__button_inactive');
});

addCardPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  const isPrepend = true;
  addCard(placeField.value, sourceField.value, isPrepend);
  resetForm();
  closePopup(addCardPopup);
});

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


//закрытие попапа по клику вне контейнера
document.addEventListener ('click', function (event) {
  const popupOpened = document.querySelector('.popup_opened');
  if (event.target ===  popupOpened) {
    closePopup(popupOpened);
  }
});
