export class Card {
    constructor({ data, openPopupHandler }, cardSelector) {
        this._cardImage = data.link;
        this._cardHeading = data.name;
        this._openPopupHandler = openPopupHandler;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector);
        const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);

        cardElement.querySelector('.element__image').src = this._cardImage;
        cardElement.querySelector('.element__name-title').textContent = this._cardHeading;

        return cardElement;
    }

    _likeCardHandler() {
        this._cardLikeButton.classList.toggle('element__button-like_active');
    }

    _deleteCardHandler() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector('.element__button-like');
        this._cardDeleteButton = this._element.querySelector('.element__button-trash');
        this._cardImage = this._element.querySelector('.element__image');

        this._cardLikeButton.addEventListener('click', () => {
            this._likeCardHandler();
        });

        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteCardHandler();
        });

        this._cardImage.addEventListener('click', () => {
            this._openPopupHandler();
        })
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        return this._element;
      }

}
