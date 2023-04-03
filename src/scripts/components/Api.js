export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._token = options.headers
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._token })
    }
  
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, { headers: this._token })
    }

    addCard(formData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._token,
            body: JSON.stringify(formData)
        })
    }

    editUserInfo(formData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._token,
            body: JSON.stringify(formData)
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._token,
        })
    }

    togleLike(cardId, set) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: set,
            headers: this._token,
        })
    }

    changeAvatar(formData) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._token,
            body: JSON.stringify(formData)
        })
    }
}