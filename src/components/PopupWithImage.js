import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super (popupSelector);
    this._photo = this._popupElement.querySelector(".popup__image");
    this._photoName = this._popupElement.querySelector(".popup__image-caption");
  }

  open (name, link) {
    super.open();
    this._photo.src = link;
    this._photo.alt = name;
    this._photoName.textContent = name;
  }
}