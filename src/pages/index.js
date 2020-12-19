//импорты
import './index.css'
import {validationConfig} from '../utils/constants.js';
import {initialCards} from '../utils/cardsdata.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//поля edit
export const nameOutput = document.querySelector('.profile__name');
export const titleOutput =  document.querySelector('.profile__title');

//кнопки открытия попапов
export const openEditButton = document.querySelector('.profile__edit');
export const openAddButton = document.querySelector('.profile__add');

//переменные полей ввода редактирования профиля
export const popupNameField = document.querySelector('.popup__field_name');
export const popupTitleField = document.querySelector('.popup__field_title');

//переменные полей ввода добавления карточки
export const popupPlaceField = document.querySelector('.popup__field_place');
export const popupSourceField = document.querySelector('.popup__field_source');
//форма профиля и добавления карточки
export const editProfileForm = document.querySelector('.popup__fields_edit-profile');
export const addCardForm = document.querySelector('.popup__fields_add-card');
//список карточек
export const cardContainer = document.querySelector('.elements__list');


//отрисовка карточек из массива и создание новой

const cardRender = (item) => {
    const card = new Card({ data: item, openPopup: () => {
      showCardPopup.open(item);
    }
  }, '#card');
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
};

const cardList = new Section({ items: initialCards, renderer: (item) => {
        cardRender(item);
 }
}, cardContainer);

cardList.renderItems();

//отображение профиля + попап редактирования
const profileData = new UserInfo({name: nameOutput, about: titleOutput});

const editProfilePopup = new PopupWithForm('.popup_edit-profile', { submitHandler: (userData) => {
    profileData.setUserInfo(userData);
    editProfilePopup.close();
}});

openEditButton.addEventListener('click', () => {
    editProfilePopup.open();
    const profile = profileData.getUserInfo();
    popupNameField.value = nameOutput.textContent;
    popupTitleField.value = titleOutput.textContent;
    editProfileValid.resetValidationState();
});

editProfilePopup.setEventListeners();

//попап добавления карточки
const addCardPopup = new PopupWithForm('.popup_add-card', { submitHandler: (item) => {
    cardRender(item);
    addCardPopup.close();
  }
});

openAddButton.addEventListener('click', () => {
    addCardPopup.open();
    addCardValid.resetValidationState();
});

addCardPopup.setEventListeners();

//фулл картинки в карточке
const showCardPopup = new PopupWithImage('.popup_image');

showCardPopup.setEventListeners();

// подключение валидации
const addCardValid = new FormValidator(validationConfig, addCardForm);
const editProfileValid = new FormValidator(validationConfig, editProfileForm);

addCardValid.enableValidation();
editProfileValid.enableValidation();
