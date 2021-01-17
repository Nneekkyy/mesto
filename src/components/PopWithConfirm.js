import Popup from './Popup.js';

// export default class PopupWithConfirm extends Popup {
//   constructor(popupSelector, submitHandler) {
//     super(popupSelector);
//     this._submitHandler = submitHandler;
//     this._form = this._popup.querySelector('.popup__fields');
//   }
//   open(item) {
//     super.open();
//     this._item = item;
//   }
//   setEventListeners() {
//     super.setEventListeners();
//     this._listener = ((evt) => {
//           evt.preventDefault();
//           this._submitHandler(this._item);
//         });
//         this._form.addEventListener('submit', this._listener);
//
//     // this._form.addEventListener('submit', (evt) => {
//     //   evt.preventDefault();
//     //   this._submitHandler(this._item);
//     // });
//   }
// }
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__fields');
    this._submitHandler = submitHandler;
  }

  open(card) {
    super.open();
    this.card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._listener = ((evt) => {
      evt.preventDefault();
      this._handleSubmit(this.card)
    });
    this.form.addEventListener('submit', this._listener);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this.form.removeEventListener('submit', this._listener)
  }
}
