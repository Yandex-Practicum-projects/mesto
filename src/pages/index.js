import './index.css';

import { initialCards, config } from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

const btnEditProfile = document.querySelector(config.btnEditProfileSelector);
const btnAddNewPlace = document.querySelector(config.btnAddCardSelector);
const allForms = Array.from(document.querySelectorAll(config.formSelector));

const handleCardClick = (name, link) => {
    popupWithImage.open(name, link)
};

const renderer = (item) => {
    const card = new Card(item, config.templateSelector, handleCardClick);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
}

const cardsList = new Section({ items: initialCards, renderer }, config.containerSelector);
const popupWithImage = new PopupWithImage(config.popupImageSelector);
const userInfo = new UserInfo(config.userNameSelector, config.aboutSelector);
const popupAddCard = new PopupWithForm({
    selector: config.popupAddCardSelector,
    handleFormSubmit: (formData) => {
        renderer(formData);
    }
});

const popupEditProfile = new PopupWithForm({
    selector: config.popupEditProfileSelector,
    handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData)
    }
});

allForms.forEach((form) => {
    const formValidator = new FormValidator(form, config);
    formValidator.enableValidation();
});

cardsList.renderItems()
popupWithImage.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();

btnAddNewPlace.addEventListener('click', () => {
    popupAddCard.open();
});

btnEditProfile.addEventListener('click', () => {
    popupEditProfile.open();
});