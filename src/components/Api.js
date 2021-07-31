export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._cardsUrl = `${this._baseUrl}/cards`;
    this._likesUrl = `${this._baseUrl}/cards/likes`;
    this._token = headers["authorization"];
  }

  getUserData() {
    return fetch(this._userUrl, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  saveUserChanges({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  changedAvatar(src) {
    return fetch(`${this._userUrl}/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: src.link,
      }),
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(this._cardsUrl, {
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  postNewCard({ name, link }) {
    return fetch(this._cardsUrl, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  likedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  dislikedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
