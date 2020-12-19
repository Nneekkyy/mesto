import Popup from './PopUp.js';

export default class PopupWithImage extends Popup {
    
    open(data) {
        super.open();
        const popupImgFull = this._popup.querySelector('.popup__image-full');
        const popupSign = this._popup.querySelector('.popup__image-sign');
        popupImgFull.alt = data.name;
        popupImgFull.src = data.link;
        popupSign.textContent = data.name;
    }
}
