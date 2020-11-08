// переменные классов
const nameOutput = document.querySelector('.profile__name');
const titleOutput =  document.querySelector('.profile__title');
const formProfile = document.querySelector('.popup__fields');
const cardElement = document.querySelector('.add-card__fields');
const popup = document.querySelector('.popup');
const editForm = document.querySelector('.popup_edit-from');
const cardForm = document.querySelector('.add-card');
const imageForm = document.querySelector('.image-popup');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;
const imagePlace = document.querySelector('.image-popup__image');
const signPlace = document.querySelector('.image-popup__sign');



// переменные для всех кнопок
const editBut1ton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const saveButton = document.querySelector('.popup__button');
const closeEditButton = document.querySelector('.popup__close_edit-profile');
const closeAddButton = document.querySelector('.popup__close_add-card');
const closeSaveButton = document.querySelector('.popup__close_image');

// функции открытия/закрытия попапа и формы редактирования профиля

const profilePopup = document.querySelector('.popup_edit-profile');
const addPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');

function openPopup(popups) {
  popups.classList.add('popup_opened');
}

function closePopup(popups) {
  popups.classList.remove('popup_opened');
}


function writeInProfileEdit() {
    nameField.value = nameOutput.textContent;
    titleField.value = titleOutput.textContent;
}

function takeProfileEdit(evt) {
  evt.preventDefault();
  nameOutput.textContent = nameField.value;
  titleOutput.textContent = titleField.value;
}
addButton.addEventListener('click', function open() {
  openPopup(addPopup);
});

closeEditButton.addEventListener('click', function close() {
  closePopup(profilePopup);
});
closeAddButton.addEventListener('click', function close() {
  closePopup(addPopup);
});
editButton.addEventListener('click', function open() {
  openPopup(profilePopup);
    writeInProfileEdit();
});
