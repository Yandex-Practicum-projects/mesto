export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector)
    };

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.closePopup(this._popup);
            };
            if (evt.target.classList.contains('popup__close')) {
                this.closePopup(this._popup)
            };
        });
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscape);
    };
    
    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscape);
    };
    
    _handleEscape = (evt) => {
        if (evt.key === 'Escape') {
            this.closePopup();
        };
    };
};