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

export const closeButtons = document.querySelectorAll(".popup__close");

export const popupList = document.querySelectorAll(".popup");

const elementsItems = document.querySelector(".elements");

function renderCard(item) {
  elementsItems.prepend(item);
}

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
  button.addEventListener("click", (e) => {
    const popup = e.target.closest(".popup");
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

export function disableSubmitButton(form) {
  const buttonSubmit = form.querySelector(".popup__button");
  buttonSubmit.classList.add("popup__button_disabled");
  buttonSubmit.setAttribute("disabled", true);
}

popupEditOpenButton.addEventListener("click", (evt) => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditForm);
});

popupAddOpenButton.addEventListener("click", (evt) => {
  openPopup(popupAddForm);
  formAddPopup.reset();
});

formEditPopup.addEventListener("submit", submitEditForm);

formAddPopup.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cardElement = new Card({ name: placeInput.value, link: linkInput.value }, "#element-template");
  renderCard(cardElement.generateCard());
  closePopup(popupAddForm);
});

function renderInitialCards(item) {
  const card = new Card(item, "#element-template");
  renderCard(card.generateCard());
}

initialCards.forEach((item) => {
  renderInitialCards(item);
});

const validationSet = (selectorNames) => {
  const formList = Array.from(
    document.querySelectorAll(selectorNames.formSelector)
  );

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(selectorNames, formElement);
    formValidator.enableValidation();
  });
};

validationSet({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});