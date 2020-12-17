export default class Card {
  constructor({data, cardSelector}) {
    this._cardImage = data.link;
    this._cardHeading = data.place;
    this._openPopupHandler = openPopupHandler;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
          const cardTemplate = document.querySelector(this._cardSelector);
          const cardElement = cardTemplate.content.querySelector('.cards__item').cloneNode(true);
          cardElement.querySelector('.cards__image').src = this._cardImage;
          cardElement.querySelector('.cards__heading').textContent = this._cardHeading ;
          return cardElement;
      }
      _likeCardHandler() {
          this._cardLikeButton.classList.toggle('cards__like-button_active');
      }
      _deleteCardHandler() {
          this._element.remove();
          this._element = null;
      }
      _setEventListeners() {
          this._cardLikeButton = this._element.querySelector('.cards__like-button');
          this._cardDeleteButton = this._element.querySelector('.cards__delete-button');
          this._cardImage = this._element.querySelector('.cards__image');
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
