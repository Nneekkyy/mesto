import Popup from './PopUp.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { submitHandler }) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__fields');
        this._submitButton = this._popup.querySelector('#popupForm');
    }


    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__field'));
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues);
        return this._formValues;

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
