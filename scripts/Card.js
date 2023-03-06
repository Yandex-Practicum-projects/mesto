export default class Card {
    constructor(data, templateSelector, openCard) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
        this.openCard = openCard;
    };

    _setEventListeners() {
        this.cardImage.addEventListener('click', () => {
            this.openCard(this.name, this.link);
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
            .querySelector(this.templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    };

    addCard() {
        this._element = this._getTemplate();
        this.cardImage = this._element.querySelector('.card__image');
        this._element.querySelector('.card__name-place').textContent = this.name;
        this.cardImage.src = this.link;
        this.cardImage.alt = this.name;
        this._setEventListeners();
        return this._element;
    };
};