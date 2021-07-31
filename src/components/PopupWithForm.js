import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    this._button = this._popupForm.querySelector(".popup__button");
    this._textButton = this._button.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  // _submitForm(evt) {
  //   evt.preventDefault();
  //   this._handleFormSubmit(this._getInputValues());
  // }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = `Cохранение...`;
    } else {
      this._button.textContent = this._textButton;
    }
  }
}