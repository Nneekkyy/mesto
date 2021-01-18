import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, {submitHandler, card}, cardElement) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__fields');
    this._element = cardElement;
  }
  open(card) {
    super.open();
    this.card = card;
  }
  deleteA () {
    this._element.remove();
    this._element = null;
  }
  setEventListeners() {
    super.setEventListeners();
    this._listener = ((evt) => {
          evt.preventDefault();
          this._submitHandler(this.card);
          this.card.remove();
          this.card = null;
        });
        this._form.addEventListener('submit', this._listener);

    // this._form.addEventListener('submit', (evt) => {
    //   evt.preventDefault();
    //   this._submitHandler(this._item);
    // });
  }
}
