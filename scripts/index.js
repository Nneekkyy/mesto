// переменные классов
const nameOutput = document.querySelector('.profile__name');
const titleOutput =  document.querySelector('.profile__title');
const formProfile = document.querySelector('.popup__fields');
const cardElement = document.querySelector('.add-card__fields');
const popup = document.querySelector('.popup');
const editForm = document.querySelector('.popup_edit-from');
const cardForm = document.querySelector('.add-card');
const imageForm = document.querySelector('.image-popup');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;
const imagePlace = document.querySelector('.image-popup__image');
const signPlace = document.querySelector('.image-popup__sign');



// переменные для всех кнопок
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const saveButton = document.querySelector('.popup__button');
const closeButton = document.querySelector('.popup__close');

//массив с карточками

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

// функции открытия/закрытия попапа и формы редактирования профиля

const profilePopup = document.querySelector('.popup_edit-profile');
const addPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');

function openPopup(profilePopup) {
  profilePopup.classList.add('popup_opened');
}
function openPopup(addPopup) {
  addPopup.classList.add('popup_opened');
}
function openPopup(imagePopup) {
  imagePopup.classList.add('popup_opened');
}
function closePopup() {
  popup.classList.remove('popup_opened');
}


function openProfileEdit() {
    openPopup(profilePopup);
    nameField.value = nameOutput.textContent;
    titleField.value = titleOutput.textContent;
}

function saveProfileEdit(evt) {
  evt.preventDefault();
  nameOutput.textContent = nameField.value;
  titleOutput.textContent = titleField.value;
  closePopup ();
}

//функция открытия формы добавления карточки

function openAddPopup() {
  openPopup(addPopup);
}

editButton.addEventListener('click', openProfileEdit, false);
addButton.addEventListener('click', openAddPopup, false);
saveButton.addEventListener('click', saveProfileEdit, false);
closeButton.addEventListener('click', closePopup, false);


// создание динамических карточек из массива

initialCards.forEach(function (element) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__name-title').textContent = element.name;
  cardContainer.append(cardElement);
});

// функция добавления карточки на первое место в списке

function addCard () {
  let newCard = initialCards.slice(0,1);
  newCard.forEach(function (element) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__image').alt = element.name;
    cardElement.querySelector('.element__name-title').textContent = element.name;
    cardContainer.prepend(cardElement);
  });
 }

 //функция отправки данных из формы добавления карточки в массив

function cardSubmitHandler (evt) {
  evt.preventDefault();

  initialCards.unshift({name: placeField.value , link: sourceField.value});
  openPopup(addPopup);
  addCard();
  placeField.value = '';
  sourceField.value = '';
  console.log (initialCards);
}

//функция открытия формы добавления карточки

// function toggleCardClass() {
//   if (cardForm.classList.contains('add-card')) {
//       showPopup();
//       cardForm.classList.toggle('add-card_opened');
//   }
// }
//функция открытия превью картинки

cardContainer.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__image')) {
    showPopup();
    imageForm.classList.add('image-popup_opened');
  }
  if (event.target.classList.contains('image-popup__close')) {
    imageForm.classList.remove('image-popup_opened');
    showPopup();
  }
});
//функция передачи картинки из карточки в попап
cardContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('element__image')) {
    imagePlace.src = event.target.getAttribute("src");
    signPlace.textContent = event.target.getAttribute("alt");
  }
});

// document.addEventListener("click", (e) => {console.log(e.target); });


// добавление/удалений лайка на карточке

cardContainer.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__button-like')) {
    event.target.classList.toggle('element__button-like_active');
  }
});

//удаление карточки по нажатию на корзину

cardContainer.addEventListener('click', function (event) {

  if (event.target.classList.contains('element__button-trash')) {
    const cardContainer = event.target.closest('.element');
    cardContainer.remove();
  }
});



// Прикрепляем обработчик к форме:
// formProfile.addEventListener('submit', formSubmitHandler);
// cardElement.addEventListener('submit', cardSubmitHandler);
// addCardButton.addEventListener('click', toggleCardClass, false);
// editButton.addEventListener('click', changeFormClass, false);
// // сделать отдельную функцию на закрытие всех попапов
// closeFormButton.addEventListener('click', changeFormClass, false);
// closeCardButton.addEventListener('click', toggleCardClass, false);
// closeImageButton.addEventListener('click', toggleCardClass, false);
