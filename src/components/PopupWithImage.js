import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupImageTitle = this._popupElement.querySelector(
      ".popup__image-caption"
    );
  }

  open(name, link) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageTitle.textContent = name;
  }
}
