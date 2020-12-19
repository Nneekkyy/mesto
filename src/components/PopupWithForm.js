import Popup from './PopUp.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {submitHandler}) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__fields');
    }

    _getInputValues() {
        this._input = Array.from(this._popup.querySelectorAll('.popup__field'));
        this._inputValues = {};
        this._input.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        console.log(this._inputValues);
        return this._inputValues;
    }
    _overlayClickHandler(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            evt.target.classList.remove('popup_opened');
            this._form.reset();
        }
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    }
    close() {
        super.close();
        this._form.reset();
    }
}
