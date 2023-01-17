let fullName = document.querySelector('.profile__name')
let about = document.querySelector('.profile__about')
const profileBtnEdit = document.querySelector('.profile__edit')
const popupContainer = document.querySelector('.popup')
const closeBtn = popupContainer.querySelector('.popup__close')
const popupName = popupContainer.querySelector('#popup__name')
const popupAbout = popupContainer.querySelector('#popup__about')
const popupBtnSave = popupContainer.querySelector('.popup__save')

function openPopup() {
    popupName.value = fullName.textContent;
    popupAbout.value = about.textContent;
    popupContainer.classList.add('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    fullName.textContent = popupName.value
    about.textContent = popupAbout.value
    closePopup()
}

function closePopup() {
    popupContainer.classList.remove('popup_opened');
}

profileBtnEdit.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

popupContainer.addEventListener('submit', handleFormSubmit); 