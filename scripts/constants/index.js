const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_visible'
};

const initialCards = [
    {
        name: 'Дананг',
        link: 'https://images.unsplash.com/photo-1564596823821-79b97151055e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
    },
    {
        name: 'Куала-Лумпур',
        link: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80'
    },
    {
        name: 'Гонконг',
        link: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        name: 'Токио',
        link: 'https://images.unsplash.com/photo-1605098096512-f980b1ac818d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80'
    },
    {
        name: 'Сидней',
        link: 'https://images.unsplash.com/photo-1484007880226-8849602bb447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2701&q=80'
    },
    {
        name: 'Сеул',
        link: 'https://images.unsplash.com/photo-1617541086271-4d43983704bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
    }
];

export { initialCards, config };