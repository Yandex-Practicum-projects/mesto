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
const cardTemplateContainer = document.querySelector('.template').content;
const btnAddNewPlace = document.querySelector('.profile__add')
const btnEditProfile = document.querySelector('.profile__edit')
const fullName = document.querySelector('.profile__name')
const about = document.querySelector('.profile__about')
const newPlace = document.querySelector('.new-place')
const btnCloseNewPlace = newPlace.querySelector('.new-place__close')
const nameNewPlace = newPlace.querySelector('.new-place__name')
const linkNewPlace = newPlace.querySelector('.new-place__link')
const editProfile = document.querySelector('.edit')
const popupName = editProfile.querySelector('.popup__name')
const popupAbout = editProfile.querySelector('.popup__about')
const btnCloseEditProfile = editProfile.querySelector('.edit__close')
const fullscreenCard = document.querySelector('.fullscreen-card')
const fullscreenImage = fullscreenCard.querySelector('.fullscreen-card__image')
const fullscreenTitle = fullscreenCard.querySelector('.fullscreen-card__title')
const btnFullscreenClose = fullscreenCard.querySelector('.fullscreen-card__close')
//Добавляем карточки из массива на страницу
initialCards.forEach(function (element) {
    const cardContainer = cardTemplateContainer.cloneNode(true);
    const cardBtnDelete = cardContainer.querySelector('.card__delete')
    const cardBtnLike = cardContainer.querySelector('.card__like')
    const cardOpen = cardContainer.querySelector('.card__image')
    const namePlce = cardContainer.querySelector('.card__name-place')
    const linkPlce = cardContainer.querySelector('.card__image')
    namePlce.textContent = element.name;
    linkPlce.src = element.link;
    gridZona.append(cardContainer)
    // активация лайка
    cardBtnLike.addEventListener('click', () => {
        cardBtnLike.classList.toggle('card__like_active')
    })
    //удаление карточек
    cardBtnDelete.addEventListener('click', () => {
        const cardList = cardBtnDelete.closest('.card')
        cardList.remove();
    })
    //Открытие карточки
    cardOpen.addEventListener('click', () => {
        fullscreenTitle.textContent = namePlce.textContent
        fullscreenImage.src = linkPlce.src
        fullscreenCard.classList.add('fullscreen-card_opened')
    })
})
//закрытие карточки
btnFullscreenClose.addEventListener('click', () => {
    fullscreenCard.classList.remove('fullscreen-card_opened')
})
//закрытие попапа 
function closeNewPlace() {
    newPlace.classList.remove('new-place_opened')
    nameNewPlace.value = ''
    linkNewPlace.value = ''
}
//открытие попапа
btnAddNewPlace.addEventListener('click', () => {
    newPlace.classList.add('new-place_opened')
})
// добавление карточек через попап
newPlace.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardContainer = cardTemplateContainer.cloneNode(true);
    const cardBtnDelete = cardContainer.querySelector('.card__delete')
    const cardBtnLike = cardContainer.querySelector('.card__like')
    const cardOpen = cardContainer.querySelector('.card__image')
    const namePlce = cardContainer.querySelector('.card__name-place')
    const linkPlce = cardContainer.querySelector('.card__image')
    namePlce.textContent = nameNewPlace.value;
    linkPlce.src = linkNewPlace.value;
    gridZona.prepend(cardContainer)
    //активация лайка
    closeNewPlace()
    cardBtnLike.addEventListener('click', () => {
        cardBtnLike.classList.toggle('card__like_active')
    })
    //удаление карточек
    cardBtnDelete.addEventListener('click', () => {
        const cardDelete = cardBtnDelete.closest('.card')
        cardDelete.remove();
    })
    //Открытие карточки
    cardOpen.addEventListener('click', () => {
        fullscreenTitle.textContent = namePlce.textContent
        fullscreenImage.src = linkPlce.src
        fullscreenCard.classList.add('fullscreen-card_opened')
    })
})
//открытие попапа редаактирования профиляя
btnEditProfile.addEventListener('click', () => {
    popupName.value = fullName.textContent;
    popupAbout.value = about.textContent;
    editProfile.classList.add('edit_opened');
})
// закрытие попапа
function closeEditProfile() {
    editProfile.classList.remove('edit_opened');
}
//сохренение изменений
editProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fullName.textContent = popupName.value
    about.textContent = popupAbout.value
    closeEditProfile()
})

btnCloseNewPlace.addEventListener('click', closeNewPlace)
btnCloseEditProfile.addEventListener('click', closeEditProfile)