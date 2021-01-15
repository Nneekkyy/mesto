export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  authentication(name) {
    return fetch(`${this._url}${name}`, {
      headers: this._headers,
    });
  }
  _getResponseData(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
  getInitialCards() {
    return this.authentication('cards')
    .then(res => this._getResponseData(res));
  }
  getProfileData() {
    return this.authentication('users/me')
    .then(res => this._getResponseData(res));
  }

  getAllData() {
        return Promise.all([this.getProfileData(), this.getInitialCards()]);
    }
    saveEditedInfo(formData) {
          return fetch(`${this._url}users/me`, {
              method: "PATCH",
              headers:  this._headers,
              body: JSON.stringify({
                  name: formData.name,
                  about: formData.about
                })
          }).then(res => this._getResponseData(res));

      }
      addNewCard(item) {
          return fetch(`https://mesto.nomoreparties.co/v1/cohort-19/cards`, {
              method: "POST",
              headers:  this._headers,
              body: JSON.stringify({
                  name: item.name,
                  link: item.link
                })
          }).then(res => this._getResponseData(res));

      }
      putLike(cardId) {
          return fetch(`${this._url}cards/likes/${cardId}`, {
              method: "PUT",
              headers: this._headers,
          }).then(res => this._getResponseData(res));
      }
      deleteLike(cardId) {
          return fetch(`${this._url}cards/likes/${cardId}`, {
              method: "DELETE",
              headers:  this._headers
          }).then(res => this._getResponseData(res));
      }
      deleteCard(cardId) {
          return fetch(`${this._url}cards/${cardId}`, {
              method: "DELETE",
              headers:  this._headers
          }).then(res => this._getResponseData(res));

      }
      updateAvatar(qwe) {
          return fetch(`${this._url}users/me/avatar`, {
              method: "PATCH",
              headers:  this._headers,
              body: JSON.stringify({
                  avatar: qwe.link,
                })
          }).then(res => this._getResponseData(res));
      }
}
