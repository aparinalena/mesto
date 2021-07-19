export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleOverlayClose = (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close")
    ) {
      this.close();
    }
  };

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close(this._popup);
    }
  };

  setEventListeners() {
    this._popup.addEventListener("click", this._handleOverlayClose);
  }
}