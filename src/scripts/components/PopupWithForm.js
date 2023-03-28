import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__item');
    };

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
        super.setEventListeners()
    }

    close() {
        this._form.reset();
        super.close();
    };

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => formValues[input.name] = input.value);
        return formValues;
    };
};