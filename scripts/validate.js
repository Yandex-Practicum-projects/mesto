const showInputError = (element, formError, inputErrorClass) => {
    element.classList.add(inputErrorClass);
    formError.textContent = element.validationMessage;
};

const hideInputError = (element, formError, inputErrorClass) => {
    element.classList.remove(inputErrorClass);
    formError.textContent = '';
};

const inputIsValid = (selectInput, formError, inputErrorClass) => {
    if (!selectInput.validity.valid) {
        showInputError(selectInput, formError, inputErrorClass);
    } else {
        hideInputError(selectInput, formError, inputErrorClass);
    }
}

const hasInputValid = (inputList) => {
    return inputList.some((input) => !input.validity.valid);
}

const toggleButtonState = (element, inactiveButtonClass, inputList) => {
    if (hasInputValid(inputList)) {
        disabledSubmitBtn(element, inactiveButtonClass);
    } else {
        enableSubmitBtn(element, inactiveButtonClass);
    }
}

const disabledSubmitBtn = (element, inactiveButtonClass) => {
    element.classList.add(inactiveButtonClass);
    element.disabled = true;
};

const enableSubmitBtn = (element, inactiveButtonClass) => {
    element.classList.remove(inactiveButtonClass);
    element.disabled = false;
};

const handeleFormInput = (e, form, inputErrorClass) => {
    const selectInput = e.target
    const formError = form.querySelector(`.${selectInput.name}-error`);
    inputIsValid(selectInput, formError, inputErrorClass);
}

const setEventListeners = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const btnSubmit = form.querySelector(config.submitButtonSelector)
    toggleButtonState(btnSubmit, config.inactiveButtonClass, inputList)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        toggleButtonState(btnSubmit, config.inactiveButtonClass, inputList)
    })
    inputList.forEach((elementInput) => {
        elementInput.addEventListener('input', (e) => {
            handeleFormInput(e, form, config.inputErrorClass)
            toggleButtonState(btnSubmit, config.inactiveButtonClass, inputList)
        })
    })
}

const enableValidation = (config) => {
    const allForms = document.querySelectorAll(config.formSelector);
    allForms.forEach((form) => {
        setEventListeners(form, config);
    })
}
enableValidation(config);