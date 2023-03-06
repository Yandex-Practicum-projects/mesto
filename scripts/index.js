import { initialCards, config } from './constants/index.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const gridZona = document.querySelector('.grid-zona');
const btnAddNewPlace = document.querySelector('.profile__add');
const btnEditProfile = document.querySelector('.profile__edit');
const fullName = document.querySelector('.profile__name');
const about = document.querySelector('.profile__about');
const popups = document.querySelectorAll('.popup');
const newPlace = document.querySelector('.popup_new-place');
const newPlaceForm = newPlace.querySelector('.popup__form');
const nameNewPlace = newPlace.querySelector('.popup__name');
const linkNewPlace = newPlace.querySelector('.popup__link');
const editProfile = document.querySelector('.popup_edit');
const popupName = editProfile.querySelector('.popup__name');
const popupAbout = editProfile.querySelector('.popup__about');
const fullscreenCard = document.querySelector('.popup_foolscreen-card');
const fullscreenImage = fullscreenCard.querySelector('.popup__card-image');
const fullscreenTitle = fullscreenCard.querySelector('.popup__card-title');

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
};
function openPopup(popup) {
    popup.classList.add('popup_opened');
    const form = popup.querySelector('.popup__form');
    validateForm(form);
    document.addEventListener('keydown', handleEscape);
};

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
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
    const card = new Card(element, '.template', openCard);
    const cardElement = card.addCard();
    return cardElement;
};

const renderCards = (elements) => {
    elements.forEach((element) => {
        gridZona.append(createCard(element));
    });
};

function validateForm(form) {
    if (form !== null) {
        const formValidator = new FormValidator(form, config);
        formValidator.enableValidation();
    };
};

newPlaceForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCard = { name: nameNewPlace.value, link: linkNewPlace.value };
    gridZona.prepend(createCard(newCard));
    newPlaceForm.reset();
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
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        };
        if (evt.target.classList.contains('popup__close')) {
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