let fullName = document.querySelector('.profile__name')
let about = document.querySelector('.profile__about')
const profileBtnEdit = document.querySelector('.profile__edit')
const popupContainer = document.querySelector('.popup')
const closeBtn = popupContainer.querySelector('.popup__close')
const popupName = popupContainer.querySelector('#popup__name')
const popupAbout = popupContainer.querySelector('#popup__about')
const popupBtnSave = popupContainer.querySelector('.popup__save')


profileBtnEdit.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
popupBtnSave.addEventListener('click', handleFormSubmit);

function openPopup() {
    popupName.value = fullName.textContent;
    popupAbout.value = about.textContent;
    popupContainer.classList.add('popup__opened');
}

function closePopup(evt) {
    evt.preventDefault();
    popupContainer.classList.remove('popup__opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    fullName.textContent = popupName.value
    about.textContent = popupAbout.value
    popupContainer.classList.remove('popup__opened');
}

formElement.addEventListener('submit', handleFormSubmit); 