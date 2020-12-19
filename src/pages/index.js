//имопрты
import './index.css'
import {nameOutput, titleOutput, openEditButton, openAddButton, popupNameField, popupTitleField, popupPlaceField, popupSourceField, cardContainer, editProfileForm, addCardForm, validationConfig} from '../utils/constants.js';
import {initialCards} from '../components/cardsdata.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//отрисовка карточек из массива и создание новой
const mapCards = initialCards.map (function (element) {
  return element
});

const cardRender = (item) => {
    const card = new Card({ data: item, openPopup: () => {
      showCardPopup.open(item);
    }
  }, '#card');
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
};

const cardList = new Section({ items: mapCards, renderer: (item) => {
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
    popupEdit.querySelector('.popup__button').classList.remove('popup__button_inactive');
    popupEdit.querySelector('.popup__button').disabled = false;
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
});

addCardPopup.setEventListeners();

//фулл картинки в карточке
const showCardPopup = new PopupWithImage('.popup_image');

// подключение валидации
const addCardValid = new FormValidator(validationConfig, addCardForm);
const editProfileValid = new FormValidator(validationConfig, editProfileForm);

addCardValid.enableValidation();
editProfileValid.enableValidation();
