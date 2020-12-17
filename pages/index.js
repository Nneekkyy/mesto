//имопрты
import {nameOutput, titleOutput, openEditButton, openAddButton, popupNameField, popupTitleField, popupPlaceField, popupSourceField, cardContainer, validationConfig} from '../utils/constants.js';
import {initialCards} from '../components/cardsdata.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const profileInfo = new UserInfo({name: nameOutput, about: titleOutput});

const editProfilePopup = new PopupWithForm('.popup_edit-profile', { submitHandler: (formData) => {
    profileInfo.setUserInfo(formData);
    editProfilePopup.close();
}});

const addCardPopup = new PopupWithForm('.popup_add-card', { submitHandler: (item) => {
    cardRenderer(item);
    addCardPopup.close();
}
});

const showCardPopup = new PopupWithImage('.popup_image');
export const popupEdit = document.querySelector('.popup__fields_edit-profile');
export const popupAdd = document.querySelector('.popup__fields_add-card');
openEditButton.addEventListener('click', () => {
    editProfilePopup.open();
    const profileData = profileInfo.getUserInfo();
      popupNameField.value = nameOutput.textContent;
      popupTitleField.value = titleOutput.textContent;
    popupEdit.querySelector('.popup__button').classList.remove('popup__button_inactive');
    popupEdit.querySelector('.popup__button').disabled = false;
});

editProfilePopup.setEventListeners();

openAddButton.addEventListener('click', () => {
    addCardPopup.open();
    popupAdd.querySelector('.popup__button').classList.add('popup__button_inactive');
    popupAdd.querySelector('.popup__button').disabled = true;
});

addCardPopup.setEventListeners();

const cardRenderer = (item) => {
    const card = new Card({ data: item, openPopupHandler: () => {
        showCardPopup.open(item);
    }
}, '#card');
    const cardElement = card.createCard();
    cardGrid.addItem(cardElement);
};

const cardGrid = new Section({ items: initialCards, renderer: (item) => {
        cardRenderer(item);
}
}, cardContainer);


cardGrid.renderItems();



// //попапы edit add img
// const editProfilePopup = document.querySelector('.popup_edit-profile');
// const addCardPopup = document.querySelector('.popup_add-card');
// export const imagePopup = document.querySelector('.popup_image');
//
//
// //определяем все кнопки
//
// const addButton = document.querySelector('.popup__button_add-card');
// //кнопки закрытия попапов
// const closeEditButton = document.querySelector('.popup__close_edit-profile');
// const closeAddButton = document.querySelector('.popup__close_add-card');
// const closeImageButton = document.querySelector('.popup__close_image')
// //данные открытой фотографии
// const imagePlace =  document.querySelector('.popup__image-full');
// const signPlace =  document.querySelector('.popup__image-sign');
//
//
//
//
// //ФУНКЦИИ
// //создаём новый массив из изначального
//
// const mapCards = initialCards.map (function (element) {
//   return element
// });
//
// //добавление карточек
// // создание новой карточки
// function addCard(name, link, isPrepend) {
//   const card = new Card(name, link, '#card');
//     if (isPrepend) {
//         cardContainer.prepend(card.generateCard());
//       } else {
//         cardContainer.append(card.generateCard());
//     }
// }
//
// mapCards.forEach(function (card) {
//   addCard(card.name, card.link);
// });
//
//
// // закрытие попапа по нажатию Esc
//
//
// const closeAtEscButton = (evt) => {
//   if (evt.keyCode === escButton) {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened);
//   }
// };
//
// // Открытие/закрытие попапа
// export function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeAtEscButton);
// }
//
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeAtEscButton);
// }
//
// //запись текущих данных профиля в Edit и обратно после редактирования
//
// function transferInEdit() {
//   popupNameField.value = nameOutput.textContent;
//   popupTitleField.value = titleOutput.textContent;
// };
// function transferFromEdit() {
//   nameOutput.textContent = popupNameField.value;
//   titleOutput.textContent = popupTitleField.value;
// };
// function resetForm() {
//   document.getElementById("popupForm").reset();
// }
//
//
// //обраточики кликов по всем кнопкам
// //всё для Edit
//
// openEditButton.addEventListener('click', function () {
//   openPopup(editProfilePopup);
//   transferInEdit();
//   editProfileValid.resetValidationState();
// });
//
// closeEditButton.addEventListener('click', function () {
//   closePopup(editProfilePopup);
// });
//
// editProfilePopup.addEventListener('submit', function (event) {
//   event.preventDefault();
//   transferFromEdit();
//   closePopup(editProfilePopup);
// });
// //всё для Add Image
//
// openAddButton.addEventListener('click', function () {
//   openPopup(addCardPopup);
//   resetForm();
//   addCardValid.resetValidationState();
//   addButton.classList.add('popup__button_inactive');
// });
//
// addCardPopup.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const isPrepend = true;
//   addCard(popupPlaceField.value, popupSourceField.value, isPrepend);
//   resetForm();
//   closePopup(addCardPopup);
// });
//
// closeAddButton.addEventListener('click', function () {
//   closePopup(addCardPopup);
// });
// //всё для img
// //открытие превью картинки
//
// export function transferImageData() {
//   imagePlace.src = event.target.getAttribute("src");
//   signPlace.textContent = event.target.getAttribute("alt");
// }
//
//
// closeImageButton.addEventListener('click', function () {
//   closePopup(imagePopup);
// });
//
//
// //закрытие попапа по клику вне контейнера
// document.addEventListener ('click', function (event) {
//   const popupOpened = document.querySelector('.popup_opened');
//   if (event.target ===  popupOpened) {
//     closePopup(popupOpened);
//   }
// });

// подключение валидации
// const addCardValid = new FormValidator(validationConfig, addCardPopup);
// const editProfileValid = new FormValidator(validationConfig, editProfilePopup);
//
// addCardValid.enableValidation();
// editProfileValid.enableValidation();
