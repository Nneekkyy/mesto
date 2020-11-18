//добавление ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__field_invalid');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__field-error');
};

//скрытие ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__field_invalid');
  errorElement.classList.remove('popup__field-error');
  errorElement.textContent = '';
};

//проверка валидности форм
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
//слушатель на input
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};
//валидация
function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__fields'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
});
}
enableValidation ();
// export
export {enableValidation};
