import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
        constructor(popupSelector, {submitHandler}) {
            super(popupSelector);
            this._submitHandler = submitHandler;
            this._submitButton = this._popup.querySelector('.popup__save');
            this._form = this._popup.querySelector('.popup__form');
        }

        setEventListeners() {
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._submitHandler();
         });
        }
}