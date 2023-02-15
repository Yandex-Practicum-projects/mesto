const gridZona = document.querySelector('.grid-zona')
const cardTemplateContainer = document
    .querySelector('.template')
    .content.querySelector('.card');
const btnAddNewPlace = document.querySelector('.profile__add')
const btnEditProfile = document.querySelector('.profile__edit')
const fullName = document.querySelector('.profile__name')
const about = document.querySelector('.profile__about')
const popups = document.querySelectorAll('.popup')
const newPlace = document.querySelector('.popup_new-place')
const newPlaceForm = newPlace.querySelector('.popup__form')
const nameNewPlace = newPlace.querySelector('.popup__name')
const linkNewPlace = newPlace.querySelector('.popup__link')
const editProfile = document.querySelector('.popup_edit')
const popupName = editProfile.querySelector('.popup__name')
const popupAbout = editProfile.querySelector('.popup__about')
const fullscreenCard = document.querySelector('.popup_foolscreen-card')
const fullscreenImage = fullscreenCard.querySelector('.popup__card-image')
const fullscreenTitle = fullscreenCard.querySelector('.popup__card-title')

popupName.value = fullName.textContent;
popupAbout.value = about.textContent;

renderCards(initialCards)

function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', handleEscape)
}
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', handleEscape)
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened)
    }
}

function deleteCard(btn) {
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
    cardBtnDelete.addEventListener('click', deleteCard)
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

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})

btnAddNewPlace.addEventListener('click', () => {
    openPopup(newPlace)
})
btnEditProfile.addEventListener('click', () => {
    openPopup(editProfile)
})
