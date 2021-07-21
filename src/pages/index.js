import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  initialCards,
  popupAddOpenButton,
  popupEditOpenButton,
  formEditPopup,
  formAddPopup,
  nameInput,
  jobInput,
  validationSet
} from "../utils/constants.js";

const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (initialCard) => {
      createCard(initialCard);
    },
  },
  ".elements"
);
initialCardList.renderItems();

const popupAddForm = new PopupWithForm(".popup_type_add", (formData) => {
  createCard(formData);
  popupAddForm.close();
});

popupAddForm.setEventListeners();

popupAddOpenButton.addEventListener("click", function () {
  popupAddForm.open();
  formAddPopup.reset();
  addFormValidator.resetValidationErrors();
});

const popupImage = new PopupWithImage(".popup_type_image");

popupImage.setEventListeners();

function createCard(data) {
  const card = new Card(data, "#element-template", () => {
    popupImage.open(data);
  });
  const cardElement = card.generateCard();
  initialCardList.addItem(cardElement);
}

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
});

const popupEditForm = new PopupWithForm(".popup_type_edit", (formData) => {
  userInfo.setUserInfo(formData.name, formData.job);
  popupEditForm.close();
});

popupEditForm.setEventListeners();

popupEditOpenButton.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  popupEditForm.open();
  editFormValidator.resetValidationErrors();
});

const editFormValidator = new FormValidator(validationSet, formEditPopup);
const addFormValidator = new FormValidator(validationSet, formAddPopup);

editFormValidator.enableValidation();
addFormValidator.enableValidation();