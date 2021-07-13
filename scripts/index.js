import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Токио",
    link: "./images/tokyo.jpg",
  },
  {
    name: "Киото",
    link: "./images/kyoto.jpg",
  },
  {
    name: "Гора Фудзи",
    link: "./images/mount-fuji.jpg",
  },
  {
    name: "Храмы Фусими Инари",
    link: "./images/fushimi.jpg",
  },
  {
    name: "Храм Тенрю-дзи",
    link: "./images/tenryu-ji.jpg",
  },
  {
    name: "Тории храма Хаконе",
    link: "./images/torii-gate.jpg",
  },
];

const popupAddOpenButton = document.querySelector(".add-open");
const popupAddForm = document.querySelector(".popup_type_add");
const popupEditOpenButton = document.querySelector(".edit-open");
const popupEditForm = document.querySelector(".popup_type_edit");

const formEditPopup = document.querySelector(".form-edit");
const formAddPopup = document.querySelector(".form-add");

const nameInput = document.querySelector(".popup__input_el_name");
const jobInput = document.querySelector(".popup__input_el_job");
const linkInput = document.querySelector(".popup__input_el_link");
const placeInput = document.querySelector(".popup__input_el_place");

const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");

export const popupImage = document.querySelector(".popup_type_image");
export const popupImageCaption = document.querySelector(".popup__image-caption");
export const popupImageElement = document.querySelector(".popup__image");

const closeButtons = document.querySelectorAll(".popup__close");

const elementsItems = document.querySelector(".elements");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("mousedown", closePopupMousedown);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("mousedown", closePopupMousedown);
}

function addCloseHandler(button) {
  button.addEventListener("click", (evt) => {
    const popup = evt.target.closest(".popup");
    closePopup(popup);
  });
}

closeButtons.forEach(addCloseHandler);

function closePopupEsc(evt) {
  const key = evt.key;
  if (key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function closePopupMousedown(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

function submitEditForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditForm);
}

function renderCard(item) {
  elementsItems.prepend(item);
}

function createCard(item) {
  const card = new Card(item, "#element-template");
  renderCard(card.generateCard());
}

initialCards.forEach((item) => {
  createCard(item);
});

const validationSet = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editValidate = new FormValidator(validationSet, formEditPopup);
const addValidate = new FormValidator(validationSet, formAddPopup);

editValidate.enableValidation();
addValidate.enableValidation();

popupEditOpenButton.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditForm);
  editValidate.resetValidationErrors();
});

popupAddOpenButton.addEventListener("click", () => {
  openPopup(popupAddForm);
  formAddPopup.reset();
  addValidate.resetValidationErrors();
});

formEditPopup.addEventListener("submit", submitEditForm);

formAddPopup.addEventListener("submit", (evt) => {
  evt.preventDefault();
  createCard({ name: placeInput.value, link: linkInput.value });
  closePopup(popupAddForm);
});