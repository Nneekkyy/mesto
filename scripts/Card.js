import {openPopup, imagePopup, transferImageData} from './index.js';
export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
  const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  return cardElement;
}
  _handleTrashButton() {
     this._element.remove();
   }
   _handleLikeIcon() {
     this._likeButton.classList.toggle('element__button-like_active');
   }
   _handleImageOpen() {
         openPopup(imagePopup);
         transferImageData();
   }
   _addListeners () {
    this._deleteButton.addEventListener('click', () => {
        this._handleTrashButton();
      })
    this._likeButton.addEventListener('click', () => {
      this._handleLikeIcon();
    })
    this._cardImage.addEventListener('click', () => {
      this._handleImageOpen();
    })
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name-title').textContent = this._name;
    const elementImage = this._element.querySelector('.element__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._likeButton = this._element.querySelector('.element__button-like');
    this._deleteButton = this._element.querySelector('.element__button-trash');
    this._cardImage = this._element.querySelector('.element__image');
    this._addListeners();
    return this._element;
  }
}
