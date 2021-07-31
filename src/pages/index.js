import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../components/Api.js";
import {
  popupAddOpenButton,
  popupEditOpenButton,
  popupAvatarOpenButton,
  popupEditInputs,
  selectors,
  validationSet,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-26",
  headers: {
    authorization: "f33c969f-e357-4c49-a4b2-c8ed9c1630fb",
    "Content-Type": "application/json",
  },
});

function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    api
      .dislikedCard(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .likedCard(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function handlePopupDelete(id, card) {
  api
    .deleteCard(id)
    .then(() => {
      card.removeCard();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handlePopupEdit(inputsData) {
  popupEditForm.renderLoading(true);
  api
    .saveUserChanges(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditForm.renderLoading(false);
    });
}

function handlePopupAdd(inputsData) {
  popupAddForm.renderLoading(true);
  api
    .postCard(inputsData)
    .then((data) => {
      cardList.addItem(createCard(data, data.owner._id));
      popupAddForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddForm.renderLoading(false);
    });
}

function handlePopupAvatar(inputsData) {
  popupAvatarForm.renderLoading(true);
  api
    .changeAvatar(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatarForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarForm.renderLoading(false);
    });
}

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function handleTrashClick(id, card) {
  popupDeleteCard.setDeleteAction(() => handlePopupDelete(id, card));
  popupDeleteCard.open();
}

function createCard(dataCard, id) {
  const card = new Card(
    {
      data: dataCard,
      handleCardClick,
      handleTrashClick,
      handleLikeClick,
    },
    selectors.cardId,
    id
  );

  const newCard = card.generateCard();
  return newCard;
}

const cardList = new Section(
  {
    renderer: (cardItem, id) => {
      cardList.addItem(createCard(cardItem, id));
    },
  },
  selectors.elementsSelector
);

const userInfo = new UserInfo({
  nameSelector: selectors.nameSelector,
  jobSelector: selectors.jobSelector,
  avatarSelector: selectors.avatarSelector,
});

const popupImage = new PopupWithImage(selectors.popupImageSelector);

const popupDeleteCard = new PopupWithDelete(selectors.popupDeleteSelector);

const popupEditForm = new PopupWithForm(
  selectors.popupEditSelector,
  handlePopupEdit
);
const popupAddForm = new PopupWithForm(
  selectors.popupAddSelector,
  handlePopupAdd
);
const popupAvatarForm = new PopupWithForm(
  selectors.popupAvatarSelector,
  handlePopupAvatar
);

Promise.all([api.getUserData(), api.getCards()])
  .then((values) => {
    userInfo.setUserInfo(values[0]);
    cardList.renderItems(values[1], values[0]._id);
  })
  .catch((err) => {
    console.log(err);
  });

popupImage.setEventListeners();
popupDeleteCard.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupAvatarForm.setEventListeners();

popupEditOpenButton.addEventListener("click", () => {
  popupEditForm.open();
  const userData = userInfo.getUserInfo();
  popupEditInputs.forEach((input) => {
    input.value = userData[input.name];
  });
  editFormValidator.resetValidationErrors();
});

popupAddOpenButton.addEventListener("click", () => {
  popupAddForm.open();
  addFormValidator.resetValidationErrors();
});

popupAvatarOpenButton.addEventListener("click", () => {
  popupAvatarForm.open();
  avatarFormValidator.resetValidationErrors();
});

const editFormValidator = new FormValidator(
  validationSet,
  selectors.popupEditSelector
);
const addFormValidator = new FormValidator(
  validationSet,
  selectors.popupAddSelector
);
const avatarFormValidator = new FormValidator(
  validationSet,
  selectors.popupAvatarSelector
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();
