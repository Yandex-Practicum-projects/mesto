import { initialCards, config } from './constants/index.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const btnEditProfile = document.querySelector(config.btnEditProfileSelector);
const btnAddNewPlace = document.querySelector(config.btnAddCardSelector);
const allForms = Array.from(document.querySelectorAll(config.formSelector));

const handleCardClick = (name, link) => {
    popupWithImage.openPopup(name, link)
};

const renderer = (item) => {
    const card = new Card(item, config.templateSelector, handleCardClick);
    const cardElement = card.addCard();
    cardsList.addItem(cardElement);
}

const cardsList = new Section({ items: initialCards, renderer }, config.containerSelector);
const popupWithImage = new PopupWithImage(config.popupImageSelector);
const userInfo = new UserInfo(config.userNameSelector, config.aboutSelector);
const popupAddCard = new PopupWithForm({
    selector: config.popupAddCardSelector,
    handleFormSubmit: (formData) => {
        renderer(formData);
        popupAddCard.closePopup();
    }
});

const popupEditProfile = new PopupWithForm({
    selector: config.popupEditProfileSelector,
    handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData)
        popupEditProfile.closePopup();
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
    popupAddCard.openPopup();
});

btnEditProfile.addEventListener('click', () => {
    popupEditProfile.openPopup();
});