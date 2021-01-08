export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  authentication(name) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-19/${name}`, {
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
    return this.authentication('/users/me')
    .then(res => this._getResponseData(res));
  }
}
