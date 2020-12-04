//добавление ошибки
function showInputError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add('popup__field-error');
    input.classList.add(config.inputInvalidClass);
}


//скрытие ошибки
function hideInputError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    error.classList.remove(config.inputErrorClass);
    input.classList.remove(config.inputInvalidClass);
}
//проверка на валидность
function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showInputError(form, input, config);
    } else {
        hideInputError(form, input, config);
    }
}
//изменение состояния ошибки
function toggleButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.buttonInvalidClass);
    } else {
        button.classList.add(config.buttonInvalidClass);
    }
}
//слушатель на кнопки и инпуты
function setEventListeners(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            toggleButtonState(submitButton, form.checkValidity(), config);
        });
    });
}
//валидация
function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const submitButton = form.querySelector(config.submitButtonSelector);
        toggleButtonState(submitButton, form.checkValidity(), config)
    });
}

//конфиг валидации
const validationConfig = {
    formSelector: '.popup__fields',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inputInvalidClass: 'popup__field_invalid',
    inputErrorClass: 'popup__field-error',
    buttonInvalidClass: 'popup__button_inactive',
};

enableValidation(validationConfig);
