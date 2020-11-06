//экспортируем массив
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1594751240694-f5b728fe4564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=763&q=80'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//определяем элементы
//поля edit
const nameOutput = document.querySelector('.profile__name');
const titleOutput =  document.querySelector('.profile__title');
//попапы edit add img
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addCardPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');
//список карточек
const cardContainer = document.querySelector('.elements__list');
//template карточки
const cardTemplate = document.querySelector('#card').content;
//определяем все кнопки
//кнопки открытия попапов
const openEditButton = document.querySelector('.profile__edit');
const openAddButton = document.querySelector('.profile__add');
//кнопки закрытия попапов
const closeEditButton = document.querySelector('.popup__close_edit-profile');
const closeAddButton = document.querySelector('.popup__close_add-card');
const closeImageButton = document.querySelector('.popup__close_image')
// кнопки сохранения форм редактирования и добавления
const saveEditButton = document.querySelector('.popup__button_edit-profile');
const saveAddButton = document.querySelector('.popup__button_add-card');

//ФУНКЦИИ

//функции открытия и закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//запись текущих данных профиля в Edit и обратно после редактирования
function transferInEdit() {
  nameField.value = nameOutput.textContent;
  titleField.value = titleOutput.textContent;
}
function transferFromEdit() {
  nameOutput.textContent = nameField.value;
  titleOutput.textContent = titleField.value;
}

//реализация добавления карточек
initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);
  let elementImage = cardElement.querySelector('.element__image');
  elementImage.src = element.link;
  elementImage.alt = element.name;
  cardElement.querySelector('.element__name-title').textContent = element.name;
  cardContainer.append(cardElement);
});

//обраточики кликов по всем кнопкам
//всё для Edit
openEditButton.addEventListener('click', function (event) {
  openPopup(editProfilePopup);
  transferInEdit();
});

closeEditButton.addEventListener('click', function (event) {
  closePopup(editProfilePopup);
});

saveEditButton.addEventListener('click', function (event) {
  event.preventDefault();
  transferFromEdit();
  closePopup(editProfilePopup);
});
//всё для Add
openAddButton.addEventListener('click', function (event) {
  openPopup(addCardPopup);
  placeField.value = '';
  sourceField.value = '';
});

closeAddButton.addEventListener('click', function (event) {
  closePopup(addCardPopup);
});
//всё для img
