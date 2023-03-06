export default class FormValidator {
    constructor(form, data) {
        this.form = form;
        this.inactiveButtonClass = data.inactiveButtonClass;
        this.inputErrorClass = data.inputErrorClass;
        this.btnSubmit = this.form.querySelector(data.submitButtonSelector);
        this.inputList = Array.from(this.form.querySelectorAll(data.inputSelector));
    };

    enableValidation() {
        this._toggleButtonState();
        this.inputList.forEach((elementInput) => {
            elementInput.addEventListener('input', (evt) => {
                this._handeleFormInput(evt);
                this._toggleButtonState();
            });
        });
        this._setEventListeners();
    };

    _setEventListeners() {
        this.form.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState();
                this.inputList.forEach((elementInput) => {
                    this._hideInputError(elementInput, this._getformError(elementInput));
                });
            }, 0);
        });
    };



    _showInputError(selectInput, formError) {
        selectInput.classList.add(this.inputErrorClass);
        formError.textContent = selectInput.validationMessage;
    };

    _hideInputError = (selectInput, formError) => {
        selectInput.classList.remove(this.inputErrorClass);
        formError.textContent = '';
    };

    _inputIsValid = (selectInput, formError) => {
        if (!selectInput.validity.valid) {
            this._showInputError(selectInput, formError);
        } else {
            this._hideInputError(selectInput, formError);
        };
    };

    _hasInputValid = () => {
        return this.inputList.some((input) => !input.validity.valid);
    };

    _toggleButtonState = () => {
        if (this._hasInputValid()) {
            this._disabledSubmitBtn();
        } else {
            this._enableSubmitBtn();
        };
    };

    _getformError(input) {
        return this.form.querySelector(`.${input.name}-error`);
    }

    _disabledSubmitBtn = () => {
        this.btnSubmit.classList.add(this.inactiveButtonClass);
        this.btnSubmit.disabled = true;
    };

    _enableSubmitBtn = () => {
        this.btnSubmit.classList.remove(this.inactiveButtonClass);
        this.btnSubmit.disabled = false;
    };

    _handeleFormInput = (evt) => {
        const selectInput = evt.target;
        this._inputIsValid(selectInput, this._getformError(selectInput));
    };
};