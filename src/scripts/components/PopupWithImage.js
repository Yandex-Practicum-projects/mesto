import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    openPopup(name, link) {
        this.fullscreenImage = document.querySelector('.popup__card-image');
        document.querySelector('.popup__card-title').textContent = name;
        this.fullscreenImage.src = link;
        this.fullscreenImage.alt = name;
        super.openPopup();
    };
}
