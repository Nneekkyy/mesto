export default class Card {
    constructor({data, openPopup, putLikeHandler, deleteLikeHandler, deleteCardHandler}, cardSelector, userId) {
        this._cardImage = data.link;
        this._cardName = data.name;
        this._openPopup = openPopup;
        this._likes = data.likes;
        this._putLikeHandler = putLikeHandler;
        this._deleteLikeHandler = deleteLikeHandler;
        this._deleteCardHandler = deleteCardHandler;
        this._ownerr = (data.likes._id);
        this._owner = (data.owner._id === userId);
        this._cardSelector = cardSelector;
        console.log(data.likes);
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector);
        const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);
        cardElement.querySelector('.element__image').src = this._cardImage;
        cardElement.querySelector('.element__name-title').textContent = this._cardName;

        return cardElement;
    }
    _putLikeHandler() {
        this._putLikeHandler();
    }
    _deleteLikeHandler() {
        this._deleteLikeHandler();
    }
    _likeHandler(evt) {
    if(evt.target.classList.contains('element__button-like_active')) {
        this._deleteLikeHandler();
        evt.target.classList.remove('element__button-like_active');
    } else {
        this._putLikeHandler();
        evt.target.classList.add('element__button-like_active');
            }
    }
    _ownerLikes() {
        console.log(this._owner);
    }
    _numberOfLikes() {
        this._likeCounter = this._element.querySelector('.element__like-counter');
        this._likeCounter.textContent = this._likes.length;
    }

    _likeCardHandler() {
        this._cardLikeButton.classList.toggle('element__button-like_active');
    }

    // _deleteCardHandler() {
    //     this._element.remove();
    // }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector('.element__button-like');
        this._cardDeleteButton = this._element.querySelector('.element__button-trash');
        this._cardImage = this._element.querySelector('.element__image');
        if(this._owner) {
            this._cardDeleteButton.classList.add('element__button-trash_visible');
        }
        this._cardLikeButton.addEventListener('click', (evt) => {
            this._likeHandler(evt);
        });

        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteCardHandler();
        });

        this._cardImage.addEventListener('click', () => {
            this._openPopup();
        })
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._numberOfLikes();
        return this._element;
      }

}
