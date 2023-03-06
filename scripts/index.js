import { initialCards, config } from './constants/index.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const gridZona = document.querySelector(config.gridZonaSelector);
const allForms = Array.from(document.querySelectorAll(config.formSelector));
const btnAddNewPlace = document.querySelector(config.btnAddNewPlaceSelector);
const btnEditProfile = document.querySelector(config.btnEditProfileSelector);
const fullName = document.querySelector(config.fullNameSelector);
const about = document.querySelector(config.aboutSelector);
const popups = document.querySelectorAll(config.popupsSelector);
const newPlace = document.querySelector(config.newPlaceSelector);
const nameNewPlace = newPlace.querySelector(config.popupNameSelector);
const linkNewPlace = newPlace.querySelector(config.linkNewPlaceSelector);
const editProfile = document.querySelector(config.editProfileSelector);
const popupName = editProfile.querySelector(config.popupNameSelector);
const popupAbout = editProfile.querySelector(config.popupAboutSelector);
const fullscreenCard = document.querySelector(config.fullscreenCardSelector);
const fullscreenImage = fullscreenCard.querySelector(config.fullscreenImageSelector);
const fullscreenTitle = fullscreenCard.querySelector(config.fullscreenTitleSelector);

function closePopup(popup) {
    const form = popup.querySelector(config.formSelector);
    popup.classList.remove(config.popupOpenedClass);
    if (form !== null) {
        form.reset();
    }
    document.removeEventListener('keydown', handleEscape);
};

function openPopup(popup) {
    popup.classList.add(config.popupOpenedClass);
    document.addEventListener('keydown', handleEscape);
};

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector(config.popupOpenedSelector);
        closePopup(popupOpened);
    };
};

const openCard = (name, link) => {
    fullscreenTitle.textContent = name
    fullscreenImage.src = link
    fullscreenImage.alt = name
    openPopup(fullscreenCard);
};

function createCard(element) {
    const card = new Card(element, config.templateClass, openCard);
    const cardElement = card.addCard();
    return cardElement;
};

const renderCards = (elements) => {
    elements.forEach((element) => {
        gridZona.append(createCard(element));
    });
};

allForms.forEach((form) => {
    const formValidator = new FormValidator(form, config);
    formValidator.enableValidation();
});

newPlace.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCard = { name: nameNewPlace.value, link: linkNewPlace.value };
    gridZona.prepend(createCard(newCard));
    closePopup(newPlace);
});

editProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fullName.textContent = popupName.value;
    about.textContent = popupAbout.value;
    closePopup(editProfile);
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(config.popupOpenedClass)) {
            closePopup(popup);
        };
        if (evt.target.classList.contains(config.btnCloseClass)) {
            closePopup(popup)
        };
    });
});

btnAddNewPlace.addEventListener('click', () => {
    openPopup(newPlace);
});
btnEditProfile.addEventListener('click', () => {
    popupName.value = fullName.textContent;
    popupAbout.value = about.textContent;
    openPopup(editProfile);
});

renderCards(initialCards);