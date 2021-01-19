//импорты
import './index.css'
import {validationConfig, options} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

//поля edit
export const nameOutput = document.querySelector('.profile__name');
export const titleOutput =  document.querySelector('.profile__title');
export const avatarOutput =  document.querySelector('.profile__image');

//кнопки открытия попапов
export const openEditButton = document.querySelector('.profile__edit');
export const openAddButton = document.querySelector('.profile__add');

//переменные полей ввода редактирования профиля
export const popupNameField = document.querySelector('.popup__field_name');
export const popupTitleField = document.querySelector('.popup__field_title');

//форма профиля и добавления карточки
export const editProfileForm = document.querySelector('.popup__fields_edit-profile');
export const addCardForm = document.querySelector('.popup__fields_add-card');
export const updateAvatarForm = document.querySelector('.popup__fields_update-avatar');
//список карточек
export const cardContainer = document.querySelector('.elements__list');
//лайки карточек
const api = new Api(options);


//получение всех данные и профиль
api.getAllData()
.then((result) => {
  const [userData, cardsData] = result;
  const userId = userData._id;
  const profileData = new UserInfo({name: nameOutput, about: titleOutput, avatar: avatarOutput});
  profileData.setUserInfo(userData);
//полный функционал редактирование профиля
  const editProfilePopup = new PopupWithForm('.popup_edit-profile', { submitHandler: (form) => {
    editProfilePopup.isLoading(true, `Сохранение...`);
    api.saveEditedInfo(form)
    .then((userData) => {
      profileData.setUserInfo(userData);
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.isLoading(false, 'Сохранить');
    });

  }});

  openEditButton.addEventListener('click', () => {
    const profile = profileData.getUserInfo();
    editProfilePopup.open();
    popupNameField.value = profile.name;
    popupTitleField.value = profile.about;
    editProfileValid.resetValidationState();
  });

  editProfilePopup.setEventListeners();

//добавление карточек
  const addCardPopup = new PopupWithForm('.popup_add-card', { submitHandler: (item) => {
    addCardPopup.isLoading(true, `Сохранение...`);
    api.addNewCard(item)
    .then((data) => {
      renderCard(data);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.isLoading(false, 'Сохранить');
    });
  }
});
openAddButton.addEventListener('click', () => {
  addCardPopup.open();
  addCardValid.resetValidationState();
});

addCardPopup.setEventListeners();

//измененеи аватарки
const updateAvatarPopup = new PopupWithForm(".popup_update-avatar", {card,
  submitHandler: (form) => {
    updateAvatarPopup.isLoading(true, `Сохранение...`);
    api.updateAvatar(form)
    .then((data) => {
      avatarOutput.src = data.avatar;
      updateAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateAvatarPopup.isLoading(false, 'Сохранить');
    });
  },
});

avatarOutput.addEventListener("click", () => {
  updateAvatarPopup.open();
});

updateAvatarPopup.setEventListeners();

//удаление карточки

const deleteCardPopup = new PopupWithConfirm(".popup_confirm", {
  submitHandler: (deleteCard, id) => {
    deleteCardPopup.isLoading(true, `Удаление...`);
    api.deleteCard(id)
    .then(() => {
      deleteCard();
      deleteCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      deleteCardPopup.isLoading(false, 'Да');
    });
  },
});

deleteCardPopup.setEventListeners();

//фулл картинки в карточке
const showCardPopup = new PopupWithImage('.popup_image');

showCardPopup.setEventListeners();

//отрисовка всех карточек
const renderCard = (item) => {
  const card = new Card({ data: item, openPopup: () => {
    showCardPopup.open(item);
  },

  putLike: () => {
    api.putLike(item._id)
    .then((item) => {
      likeCounter.textContent = item.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  },
  deleteLike: () => {
    api.deleteLike(item._id)
    .then((item) => {
      likeCounter.textContent = item.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  },
  deleteCard: (deleteCard, id) => {
    deleteCardPopup.open(deleteCard, id);
  },
}, '#card', userId);

const cardElement = card.createCard(item.owner._id);
const likeCounter = cardElement.querySelector('.element__like-counter');
cardList.addItem(cardElement);
};

const cardList = new Section({ items: cardsData,
  renderer: (item) => {
  renderCard(item); }
}, cardContainer);

cardList.renderItems();
})
.catch((err) => {
  console.log(err); // выведем ошибку в консоль
});


//эффект наведения на аватарку
avatarOutput.addEventListener("mouseover", function(){
  document.querySelector('.profile__image-hover').style.display = 'block';
});
avatarOutput.addEventListener("mouseout", function(){
  document.querySelector('.profile__image-hover').style.display = 'none';
});


// подключение валидации
const addCardValid = new FormValidator(validationConfig, addCardForm);
const editProfileValid = new FormValidator(validationConfig, editProfileForm);
const updateAvatarValid = new FormValidator(validationConfig, updateAvatarForm);

addCardValid.enableValidation();
editProfileValid.enableValidation();
updateAvatarValid.enableValidation();
