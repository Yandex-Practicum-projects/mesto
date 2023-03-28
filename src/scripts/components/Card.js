export default class Card {
    constructor(data, templateSelector, openCard) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openCard = openCard;
    };

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
            this._openCard(this._name, this._link);
        });
        this._element.querySelector('.card__delete').addEventListener('click', () => {
            this._deleteCard();
        });
        this._element.querySelector('.card__like').addEventListener('click', (evt) => {
            this._toggleLike(evt);
        });
    };

    _deleteCard() {
        this._element.closest('.card').remove();
    };

    _toggleLike(evt) {
        evt.target.classList.toggle('card__like_active')
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__image');
        this._element.querySelector('.card__name-place').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._setEventListeners();
        return this._element;
    };
};