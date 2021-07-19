export const initialCards = [
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

export const validationSet = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const popupAddOpenButton = document.querySelector(".add-open");
export const popupEditOpenButton = document.querySelector(".edit-open");

export const formEditPopup = document.querySelector(".form-edit");
export const formAddPopup = document.querySelector(".form-add");

export const nameInput = document.querySelector(".popup__input_el_name");
export const jobInput = document.querySelector(".popup__input_el_job");