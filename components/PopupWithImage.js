import Popup from './PopUp.js';

export default class PopupWithImage extends Popup {

    open(data) {
        super.open();

        const popupImage = this._popup.querySelector('.popup__image-full');
        const popupHeading = this._popup.querySelector('.popup__image-sign');
        popupImage.src = data.link;
        popupHeading.textContent = data.name;
        popupImage.alt = data.name;
        super.setEventListeners();
    }
}
