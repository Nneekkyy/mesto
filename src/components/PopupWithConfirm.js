import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, {submitHandler}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__fields-confirm');
    this._submitHandler = submitHandler;
  }

  open(card, id) {
    super.open();
    this.card = card;
    this.id = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', ((evt) => {
      evt.preventDefault();
      this._submitHandler(this.card, this.id);
    }));
  }
}
