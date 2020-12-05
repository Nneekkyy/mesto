export class FormValidator {
  constructor(validationConfig, formSelector) {
    this._validationConfig = validationConfig;
    this._formSelector = formSelector;
    this._inputArray = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));
    this._button = formSelector.querySelector(validationConfig.submitButtonSelector);
  }
  _showInputError(input) {
    const error = this._formSelector.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(this._validationConfig.inputErrorClass);
    input.classList.add(this._validationConfig.inputInvalidClass);
  }
  _hideInputError(input) {
    const error = this._formSelector.querySelector(`#${input.id}-error`);
    error.textContent = '';
    error.classList.remove(this._validationConfig.inputErrorClass);
    input.classList.remove(this._validationConfig.inputInvalidClass);
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
        this._showInputError(input, input.validationMessage);
    } else {
        this._hideInputError(input);
    }
  }

  _checkInputError() {
    return this._inputArray.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._checkInputError(this._inputList)) {
      this._button.classList.add(this._validationConfig.buttonInvalidClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._validationConfig.buttonInvalidClass);
      this._button.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputArray.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      })
    })
    // this._formSelector.addEventListener('submit', () => {
    //   this._resetValidationState();
    // })
  }
//очистка ошибки при закрытии попапа
resetValidationState() {
    this._inputArray.forEach(input => {
      this._hideInputError(input);
    })
    this._toggleButtonState();
  }

enableValidation () {
  this._setEventListeners();
  }
}
