// Находим форму в DOM
let formElement = document.querySelector('.edit-form__fields')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Находим поля формы в DOM
    let nameInput = document.querySelector('#nameField')// Воспользуйтесь инструментом .querySelector()
    let titleInput =  document.querySelector('#titleField')

    nameInput = nameField.value
    titleInput =  titleField.value // Получите значение полей из свойства value

    let nameOutput = document.querySelector('.profile__name')// Воспользуйтесь инструментом .querySelector()
    let titleOutput =  document.querySelector('.profile__title')// Воспользуйтесь инструментом .querySelector()

    nameOutput.textContent = nameField.value;
    titleOutput.textContent = titleField.value;
}


// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

document.querySelector('.edit-form__button').addEventListener('click', function() {
  document.querySelector('.popup').classList.toggle('popup_opened');
}, false);
