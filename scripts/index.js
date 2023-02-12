const gridZona = document.querySelector('.grid-zona')
const cardTemplateContainer = document
    .querySelector('.template')
    .content.querySelector('.card');
const btnAddNewPlace = document.querySelector('.profile__add')
const btnEditProfile = document.querySelector('.profile__edit')
const fullName = document.querySelector('.profile__name')
const about = document.querySelector('.profile__about')
const newPlace = document.querySelector('.popup_new-place')
const newPlaceForm = newPlace.querySelector('.popup__form')
const btnCloseNewPlace = newPlace.querySelector('.popup__close')
const nameNewPlace = newPlace.querySelector('.popup__name')
const linkNewPlace = newPlace.querySelector('.popup__link')
const editProfile = document.querySelector('.popup_edit')
const popupName = editProfile.querySelector('.popup__name')
const popupAbout = editProfile.querySelector('.popup__about')
const btnCloseEditProfile = editProfile.querySelector('.popup__close')
const fullscreenCard = document.querySelector('.popup_foolscreen-card')
const fullscreenImage = fullscreenCard.querySelector('.popup__card-image')
const fullscreenTitle = fullscreenCard.querySelector('.popup__card-title')
const btnFullscreenClose = fullscreenCard.querySelector('.popup__close')

popupName.value = fullName.textContent;
popupAbout.value = about.textContent;

renderCards(initialCards)

function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', keyHandler)
    popup.removeEventListener('click', keyHandler)
}
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', keyHandler)
    popup.addEventListener('click', keyHandler)
}

function keyHandler(evt) {
    const popupOpened = document.querySelector('.popup_opened')
    if (evt.key === 'Escape') {
        closePopup(popupOpened)
    }
    if (evt.target === popupOpened) {
        closePopup(popupOpened)
    }
}

function cardDelete(btn) {
    btn.target.closest('.card').remove();
}
function openCard(name, link) {
    fullscreenTitle.textContent = name
    fullscreenImage.src = link
    fullscreenImage.alt = name
    openPopup(fullscreenCard)
}
function toggleLike(btn) {
    btn.target.classList.toggle('card__like_active')
}

function addCards(name, link) {
    const cardClone = cardTemplateContainer.cloneNode(true);
    const cardBtnDelete = cardClone.querySelector('.card__delete')
    const cardBtnLike = cardClone.querySelector('.card__like')
    const cardImage = cardClone.querySelector('.card__image')

    cardClone.querySelector('.card__name-place').textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    cardBtnLike.addEventListener('click', toggleLike)
    cardBtnDelete.addEventListener('click', cardDelete)
    cardImage.addEventListener('click', () => {
        openCard(name, link)
    })

    return cardClone
}

function renderCards(elements) {
    const cards = elements.map((element) => {
        const name = element.name
        const link = element.link
        return addCards(name, link)
    })
    gridZona.append(...cards)
}

newPlaceForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = nameNewPlace.value;
    const link = linkNewPlace.value;
    newPlaceForm.reset();
    gridZona.prepend(addCards(name, link))
    closePopup(newPlace);
})

editProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fullName.textContent = popupName.value
    about.textContent = popupAbout.value
    closePopup(editProfile)
})

btnFullscreenClose.addEventListener('click', () => {
    closePopup(fullscreenCard)
})
btnCloseNewPlace.addEventListener('click', () => {
    closePopup(newPlace)
})
btnCloseEditProfile.addEventListener('click', () => {
    closePopup(editProfile)
})

btnAddNewPlace.addEventListener('click', () => {
    openPopup(newPlace)
})
btnEditProfile.addEventListener('click', () => {
    openPopup(editProfile)
})
