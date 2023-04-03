import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector)
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__item');
        this._submitButton = this._popup.querySelector('.popup__save');
    };

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._renderLoading(true)
        })
        super.setEventListeners()
    }

    _renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение'
            this._submitButton.classList.add('loading');
        } else {
            this._submitButton.classList.remove('loading');
            this._submitButton.textContent = 'Сохранить'
        }
    }

    close() {
        this._form.reset();
        this._renderLoading(false)
        super.close();
    };

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => formValues[input.name] = input.value);
        return formValues;
    };
};