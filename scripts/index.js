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
const handleLikeIcon = (evt) => {
  if (evt.target.classList.contains('element__button-like')) {
    evt.target.classList.toggle('element__button-like_active');
  }
};

const handleImageOpen = (evt) => {
  if (evt.target.classList.contains('element__image')) {
    openPopup(imagePopup);
    transferImageData();
  }
};

const handleTrashButton = (evt) => {
  if (evt.target.classList.contains('element__button-trash')) {
      const cardContainer = event.target.closest('.element');
      cardContainer.remove();
  }
};
//добавление карточек
// создание новой карточки

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  cardElement.querySelector(".element__name-title").textContent = name;
  cardContainer.addEventListener('click', handleLikeIcon);
  cardContainer.addEventListener('click', handleImageOpen);
  cardContainer.addEventListener('click', handleTrashButton);
  return cardElement;
}

// добавление карточки

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
  addButton.classList.add('popup__button_inactive');
});

addCardPopup.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = placeField.value;
  const link = sourceField.value;
  const isPrepend = true;
  addCard(name, link, isPrepend);
  document.getElementById("popupForm").reset();
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
