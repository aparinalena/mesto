import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formDelete = this._popupElement.querySelector(".popup__form");
  }

  setDeleteAction(action) {
    this._handleSubmitCallback = action; //??
  }

  setEventListeners() {
    this._formDelete.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    })
    super.setEventListeners();
  }
}