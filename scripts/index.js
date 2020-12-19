//имопрт карточек и валидации
import {initialCards} from './cardsdata.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {validationConfig} from './validate.js';

//определяем элементы
//поля edit
const nameOutput = document.querySelector('.profile__name');
const titleOutput =  document.querySelector('.profile__title');
//попапы edit add img
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addCardPopup = document.querySelector('.popup_add-card');
export const imagePopup = document.querySelector('.popup_image');
//список карточек
const cardContainer = document.querySelector('.elements__list');

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
//переменные полей ввода редактирования профиля
const popupNameField = document.querySelector('.popup__field_name');
const popupTitleField = document.querySelector('.popup__field_title');
//переменные полей ввода добавления карточки
const popupPlaceField = document.querySelector('.popup__field_place');
const popupSourceField = document.querySelector('.popup__field_source');


//ФУНКЦИИ
//создаём новый массив из изначального
class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem (element) {
    this._container.prepend(element);
  }
  renderer () {
    this._renderedItems.forEach(item => this._renderer(item));
  }
}
// Открытие/закрытие попапа
export function openPopup(popup) {


}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeAtEscButton);
}
//всё для img
//открытие превью картинки

export function transferImageData() {
  imagePlace.src = event.target.getAttribute("src");
  signPlace.textContent = event.target.getAttribute("alt");
}


closeImageButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

// передать в конст
const escButton = 27;




//закрытие попапа по клику вне контейнера


class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.document.querySelector('.popup__close');
    this._escapeHandler = this._handleEscClose.bind(this);
    this._overlayHandler = this._overlayClickClose.bind(this);
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escapeHandler);
    this._popup.addEventListener('click', this._overlayHandler);
  }
  close () {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escapeHandler);
    this._popup.removeEventListener('click', this._overlayHandler);
  }
  _handleEscClose (evt) {
    if (evt.keyCode === escButton) {
      this._close;
    }
  }
  _overlayClickClose (event){
    const popupOpened = document.querySelector('.popup_opened');
    if (event.target ===  popupOpened) {
      close(popupOpened);
    }
  }
  setEventListeners () {

  }
}
const mapCards = initialCards.map (function (element) {
  return element
});

//добавление карточек
// создание новой карточки
function addCard(name, link, isPrepend) {
  const card = new Card(name, link, '#card');
    if (isPrepend) {
        cardContainer.prepend(card.generateCard());
      } else {
        cardContainer.append(card.generateCard());
    }
}

mapCards.forEach(function (card) {
  addCard(card.name, card.link);
});




const closeAtEscButton = (evt) => {
  if (evt.keyCode === escButton) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

// Открытие/закрытие попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeAtEscButton);
}

function closePopup(popup) {

  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeAtEscButton);
}

//запись текущих данных профиля в Edit и обратно после редактирования

function transferInEdit() {
  popupNameField.value = nameOutput.textContent;
  popupTitleField.value = titleOutput.textContent;
};
function transferFromEdit() {
  nameOutput.textContent = popupNameField.value;
  titleOutput.textContent = popupTitleField.value;
};
function resetForm() {
  document.getElementById("popupForm").reset();
}


//обраточики кликов по всем кнопкам
//всё для Edit

openEditButton.addEventListener('click', function () {
  openPopup(editProfilePopup);
  transferInEdit();
  editProfileValid.resetValidationState();
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
  addCardValid.resetValidationState();
  addButton.classList.add('popup__button_inactive');
});

addCardPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  const isPrepend = true;
  addCard(popupPlaceField.value, popupSourceField.value, isPrepend);
  resetForm();
  closePopup(addCardPopup);
});

closeAddButton.addEventListener('click', function () {
  closePopup(addCardPopup);
});

// подключение валидации
const addCardValid = new FormValidator(validationConfig, addCardPopup);
const editProfileValid = new FormValidator(validationConfig, editProfilePopup);

addCardValid.enableValidation();
editProfileValid.enableValidation(); 
