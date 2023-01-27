const initialCards = [
    {
        name: 'Дананг',
        link: 'https://images.unsplash.com/photo-1564596823821-79b97151055e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
    },
    {
        name: 'Кабул',
        link: 'https://images.unsplash.com/photo-1673860503924-e8085c807ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Токио',
        link: 'https://images.unsplash.com/photo-1605098096512-f980b1ac818d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80'
    },
    {
        name: 'Лиссабон',
        link: 'https://images.unsplash.com/photo-1578859651203-c7126a106b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80'
    },
    {
        name: 'Гонконг',
        link: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const gridZona = document.querySelector('.grid-zona')
const cardTemplateContainer = document
.querySelector('.template')
.content.querySelector('.card');
const btnAddNewPlace = document.querySelector('.profile__add')
const btnEditProfile = document.querySelector('.profile__edit')
const fullName = document.querySelector('.profile__name')
const about = document.querySelector('.profile__about')
const newPlace = document.querySelector('.popup_new-place')
const btnCloseNewPlace = newPlace.querySelector('.popup__close')
const nameNewPlace = newPlace.querySelector('.popup__name')
const linkNewPlace = newPlace.querySelector('.popup__link')
const editProfile = document.querySelector('.popup_edit')
const popupName = editProfile.querySelector('.popup__name')
const popupAbout = editProfile.querySelector('.popup__about')
const btnCloseEditProfile = editProfile.querySelector('.popup__close')
const fullscreenCard = document.querySelector('.fullscreen-card')
const fullscreenImage = fullscreenCard.querySelector('.fullscreen-card__image')
const fullscreenTitle = fullscreenCard.querySelector('.fullscreen-card__title')
const btnFullscreenClose = fullscreenCard.querySelector('.fullscreen-card__close')

renderCards(initialCards)

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}
function openPopup(popup) {
    popup.classList.add('popup_opened')
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
    let name = element.name
    let link = element.link
    return addCards(name, link)
})
gridZona.append(...cards)
}

newPlace.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let name = nameNewPlace.value;
    let link = linkNewPlace.value;
    gridZona.prepend(addCards(name, link))
    closePopup(newPlace)
    nameNewPlace.value = ''
    linkNewPlace.value = ''
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
    popupName.value = fullName.textContent;
    popupAbout.value = about.textContent;
    openPopup(editProfile)
})
