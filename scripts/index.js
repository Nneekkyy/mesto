// let nameInput = document.querySelector('#nameField')
// let titleInput =  document.querySelector('#titleField')
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
    popupClassClose ();
}

//фнкции открытия и закрытия всплывающего окна
function popupClassOpen () {
  popupSelect.classList.toggle('popup_opened');
  nameField.value = nameOutput.textContent;
  titleField.value = titleOutput.textContent;
}


function popupClassClose () {
  popupSelect.classList.toggle('popup_opened');
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', popupClassOpen, false);
closeButton.addEventListener('click', popupClassClose, false);
