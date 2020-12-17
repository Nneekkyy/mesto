//поля edit
export const nameOutput = document.querySelector('.profile__name');
export const titleOutput =  document.querySelector('.profile__title');

//кнопки открытия попапов
export const openEditButton = document.querySelector('.profile__edit');
export const openAddButton = document.querySelector('.profile__add');

//переменные полей ввода редактирования профиля
export const popupNameField = document.querySelector('.popup__field_name');
export const popupTitleField = document.querySelector('.popup__field_title');

//переменные полей ввода добавления карточки
export const popupPlaceField = document.querySelector('.popup__field_place');
export const popupSourceField = document.querySelector('.popup__field_source');

//список карточек
export const cardContainer = document.querySelector('.elements__list');

//конфиг валидации
export const validationConfig = {
    formSelector: '.popup__fields',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inputInvalidClass: 'popup__field_invalid',
    inputErrorClass: 'popup__field-error',
    buttonInvalidClass: 'popup__button_inactive',
};

//кнопка esc
export const escButton = 27;
