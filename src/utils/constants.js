export const validationSet = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const selectors = {
  popupImageSelector: ".popup_type_image",
  popupEditSelector: ".popup_type_edit",
  popupAddSelector: ".popup_type_add",
  popupAvatarSelector: ".popup_type_edit-avatar",
  popupDeleteSelector: ".popup_type_delete",
  elementsSelector: ".elements",
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
  avatarSelector: ".profile__avatar",
  cardId: "#element-template",
  trashCard: ".element__trash",
};

export const popupAddOpenButton = document.querySelector(".add-open");
export const popupEditOpenButton = document.querySelector(".edit-open");
export const popupAvatarOpenButton = document.querySelector(
  ".profile__avatar-edit"
);
const popupEdit = document.querySelector(".popup_type_edit");
export const popupEditInputs = popupEdit.querySelectorAll(".popup__input");