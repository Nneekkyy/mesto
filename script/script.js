let nameInput = document.querySelector('#nameField')
let titleInput =  document.querySelector('#titleField')
let nameOutput = document.querySelector('.profile__name')
let titleOutput =  document.querySelector('.profile__title')
let formElement = document.querySelector('.edit-form__fields')
let popupSelect = document.querySelector('.popup')
// переменные для всех кнопок
let editButton = document.querySelector('.profile__edit')
let closeButton = document.querySelector('.edit-form__close')
let saveButton = document.querySelector('.edit-form__button')
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameField.value;
    titleOutput.textContent = titleField.value;
}
// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

function popupClassOpen () {
  popupSelect.classList.toggle('popup_opened');
  nameOutput.textContent = nameInput.value;
  titleOutput.textContent = titleInput.value;
}

function popupClassClose () {
  popupSelect.classList.toggle('popup_opened');
}



editButton.addEventListener('click', popupClassOpen, false);
closeButton.addEventListener('click', popupClassClose, false);
//
// document.querySelector('.edit-form__button').addEventListener('click', function() {
//   document.querySelector('.popup').classList.toggle('popup_opened');
// }, false);
//
//
// document.querySelector('.edit-form__close').addEventListener('click', function() {
//   document.querySelector('.popup').classList.toggle('popup_opened');
// }, false);
//
//
// document.querySelector('.profile__edit').addEventListener('click', function() {
//   document.querySelector('.popup').classList.toggle('popup_opened');
// }, false);
