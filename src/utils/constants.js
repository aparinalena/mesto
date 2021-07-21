import tokioImage from "../images/tokyo.jpg";
import kiotoImage from "../images/kyoto.jpg";
import fujiImage from "../images/mount-fuji.jpg";
import fushimiImage from "../images/fushimi.jpg";
import tenryuImage from "../images/tenryu-ji.jpg";
import toriiImage from "../images/torii-gate.jpg";

export const initialCards = [
  {
    name: "Токио",
    link: tokioImage,
  },
  {
    name: "Киото",
    link: kiotoImage,
  },
  {
    name: "Гора Фудзи",
    link: fujiImage,
  },
  {
    name: "Храмы Фусими Инари",
    link: fushimiImage,
  },
  {
    name: "Храм Тенрю-дзи",
    link: tenryuImage,
  },
  {
    name: "Тории храма Хаконе",
    link: toriiImage,
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