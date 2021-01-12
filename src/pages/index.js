//импорты
import './index.css'
import {validationConfig, options} from '../utils/constants.js';
import {initialCards} from '../utils/cardsdata.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithForm.js';
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

//переменные полей ввода добавления карточки
export const popupPlaceField = document.querySelector('.popup__field_place');
export const popupSourceField = document.querySelector('.popup__field_source');
//форма профиля и добавления карточки
export const editProfileForm = document.querySelector('.popup__fields_edit-profile');
export const addCardForm = document.querySelector('.popup__fields_add-card');
//список карточек
export const cardContainer = document.querySelector('.elements__list');
//лайки карточек

const api = new Api(options);


//отрисовка карточек из массива и создание новой



api.getAllData()
  .then((result) => {
    console.log(result);
    const [userData, cardsData] = result;
    const profileData = new UserInfo({name: nameOutput, about: titleOutput, avatar: avatarOutput});
    profileData.setUserInfo(userData);

    const editProfilePopup = new PopupWithForm('.popup_edit-profile', { submitHandler: (userData) => {
      api.saveEditedInfo(userData)
        .then((userData) => {
          profileData.setUserInfo(userData);
          editProfilePopup.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          renderLoading(false, editForm, 'Сохранить');
        });

    }});

    openEditButton.addEventListener('click', () => {
        editProfilePopup.open();
        const profile = profileData.getUserInfo();
        popupNameField.value = nameOutput.textContent;
        popupTitleField.value = titleOutput.textContent;
        editProfileValid.resetValidationState();
    });

    editProfilePopup.setEventListeners();

    const addCardPopup = new PopupWithForm('.popup_add-card', { submitHandler: (item) => {
      api.addNewCard(item)
          .then((data) => {
              cardRender(data);
              addCardPopup.close();
          })
          .catch((err) => {
              console.log(err);
          })
          .finally(() => {

          });
      }
    });
    openAddButton.addEventListener('click', () => {
        addCardPopup.open();
        addCardValid.resetValidationState();
    });

    addCardPopup.setEventListeners();

    //фулл картинки в карточке
    const showCardPopup = new PopupWithImage('.popup_image');

    showCardPopup.setEventListeners();

    const userId = userData._id;
    console.log(userData._id);


    const cardRender = (item, isArray) => {
        const card = new Card({ data: item, openPopup: () => {
          showCardPopup.open(item);
          ownerLikes();
        },

        putLikeHandler: () => {
            api.putLike(item._id)
                .then((item) => {
                  likeCounter.textContent = item.likes.length;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteLikeHandler: () => {
            api.deleteLike(item._id)
                .then((item) => {
                    likeCounter.textContent = item.likes.length;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteCardHandler: () => {
            const deleteCardPopup = new PopupWithConfirm(".popup_confirm", {
                submitHandler: () => {

                    api.deleteCard(item._id)
                        .then(() => {
                            cardElement.remove();
                            deleteCardPopup.close();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        .finally(() => {

                        });
                },
            });
            deleteCardPopup.open(item);
            deleteCardPopup.setEventListeners();
        },
      }, '#card', userId);

      const cardElement = card.createCard(item.owner._id);
      const likeCounter = cardElement.querySelector('.element__like-counter');
        cardList.addItem(cardElement, isArray);
    };

    const cardList = new Section({ items: cardsData, renderer: (item) => {
            cardRender(item);
     }
    }, cardContainer);

    cardList.renderItems();
    })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });



// удаление
// fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards/5ffb31a930cbab0274373867', {
//   method: 'DELETE',
//   headers: {
//     authorization: '34fdcd7c-5eb8-4424-b9a2-100499773e16',
//     'Content-Type': 'application/json'
//   },
//
// });

// подключение валидации
const addCardValid = new FormValidator(validationConfig, addCardForm);
const editProfileValid = new FormValidator(validationConfig, editProfileForm);

addCardValid.enableValidation();
editProfileValid.enableValidation();
