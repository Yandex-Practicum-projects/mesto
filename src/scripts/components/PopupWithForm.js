import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popup.querySelector('.popup__form');
    };

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._form.reset();
        })
        super.setEventListeners()
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    };

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__item');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    };
};