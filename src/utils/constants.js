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
export const popupAvatarOpenButton = document.querySelector(
  ".profile__avatar-edit"
);

// export const formEditPopup = document.querySelector(".form-edit");
// export const formAddPopup = document.querySelector(".form-add");
// export const formAvatarPopup = document.querySelector(".form-avatar-edit");

const popupEdit = document.querySelector(".popup_type_edit");
export const popupEditInputs = popupEdit.querySelectorAll(".popup__input");
