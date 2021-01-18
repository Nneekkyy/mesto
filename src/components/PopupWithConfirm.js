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
  constructor(popupSelector, {submitHandler}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__fields-confirm');
    this._submitHandler = submitHandler;
  }

  open(card) {
    super.open();
    this.card = card;
  }
  delCard () {
    this.card.remove();
    this.card = null;
  }
  setEventListeners() {
    super.setEventListeners();
    this._listener = ((evt) => {
      evt.preventDefault();
      this._submitHandler(this.card)
    });
    this._form.addEventListener('submit', this._listener);
  }

}
