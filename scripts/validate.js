//добавление ошибки
const showInputError = (form, input, config) => {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputInvalidClass);
};

//скрытие ошибки
const hideInputError = (form, input, config) => {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputInvalidClass);
  errorElement.textContent = '';
};

//проверка валидности форм
const checkInputValidity = (form, input, config) => {
  input.setCustomValidity('');

  if (!inputElement.validity.valid) {
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  }
};

const toggleButtonState = (button, isActive, config) => {
  if (isActive) {
    button.classList.remove(config.buttonInvalidClass);
    // button.disables = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    // button.disables = true;
  }
};
//слушатель на input
const setEventListeners = (form, config) => {
  const inputList = from.querySelectorAll(config.inputSelector);
  const submitButton = from.querySelectorAll(config.submitButtonSelector);

    inputList.forEach((input) => {
      input.addEventListener('input', function () {
        checkInputValidity(form, input, config);
        toggleButtonState(submitButton, form.checkInputValidity(), config);
      });
    });
  };
//валидация
function enableValidation (config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);

    formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  const submitButton = form.querySelector(config.submitButtonSelector);
  toggleButtonState(submitButton, form.checkValidity(), config)
});
}
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

enableValidation(validationConfig);
// //добавление ошибки
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add('popup__field_invalid');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__field-error');
// };
//
// //скрытие ошибки
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove('popup__field_invalid');
//   errorElement.classList.remove('popup__field-error');
//   errorElement.textContent = '';
// };
//
// //проверка валидности форм
// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };
//
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };
//
// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__button_inactive');
//   } else {
//     buttonElement.classList.remove('popup__button_inactive');
//   }
// };
// //слушатель на input
// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
//   const buttonElement = formElement.querySelector('.popup__button');
//   toggleButtonState(inputList, buttonElement);
//
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function () {
//         checkInputValidity(formElement, inputElement);
//         toggleButtonState(inputList, buttonElement);
//       });
//     });
//   };
// //валидация
// function enableValidation () {
//   const formList = Array.from(document.querySelectorAll('.popup__fields'));
//   formList.forEach((formElement) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });
//
//     setEventListeners(formElement);
// });
// }
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
//
// // export
// export {enableValidation};
