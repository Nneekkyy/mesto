// Находим форму в DOM
let formElement = document.querySelector('.edit-form__button')// Воспользуйтесь инструментом .querySelector()


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('#nameField')// Воспользуйтесь инструментом .querySelector()
    let jobInput =  document.querySelector('#titleField')// Воспользуйтесь инструментом .querySelector()

    nameInput = nameField.value
    jobInput =  titleField.value
    console.log(nameField.value)
    console.log(titleField.value)  // Получите значение полей из свойства value

    let nameOutput = document.querySelector('.profile__name')// Воспользуйтесь инструментом .querySelector()
    let jobOutput =  document.querySelector('profile__title')// Воспользуйтесь инструментом .querySelector()

    nameOutput.textContent = nameField.value;
    jobOutput.textContent = jobField.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

document.querySelector('.edit-form__button').addEventListener('click', function() {
  document.querySelector('.popup').classList.toggle('popup_opened');
}, false);
