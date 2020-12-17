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
    this._closeButton.addEventListener('click', () => {
        this._overlayClickClose();
      })
  }
}
class PopupWithImage extends Popup {
  open (data) {
    super.open();
    const popupImage = this._popup.querySelector('.popup__image');
    const popupHeading = this._popup.querySelector('.popup__image-sign');
    popupImage.src = data.link;
    popupHeading.textContent = data.place;
    popupImage.alt = data.place;
    super.setEventListeners();
  }
}

class PopupWithForm extends Popup {
  constructor(popupSelector, { submitHandler }) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__field');
    this._submitButton = this._popup.querySelector('.popup__button_add-card');
	}
  _getInputValues() {
      this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
      this._formValues = {};
      this._inputList.forEach((input) => {
          this._formValues[input.name] = input.value;
      });

      return this._formValues;

  }
  setEventListeners() {
      super.setEventListeners()
      this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitHandler(this._getInputValues());
   });
  }

  close() {
      super.close();
      this._form.reset();
  }
}
const mapCards = initialCards.map (function (element) {
  return element
});

class UserInfo {
    constructor({ profileName, profileTitle }){
        this._name = profileName;
        this._occupation = profileTitle;
    }

    getUserInfo() {
        this._profileInfo = {};

        this._profileInfo.name = this._name.textContent;
        this._profileInfo.title = this._title.textContent;

       return this._profileInfo;

    }

    setUserInfo(profileData) {
        this._name.textContent = profileData.name;
        this._title.textContent = profileData.title;
    }
}

// подключение валидации
const addCardValid = new FormValidator(validationConfig, addCardPopup);
const editProfileValid = new FormValidator(validationConfig, editProfilePopup);

addCardValid.enableValidation();
editProfileValid.enableValidation();
