export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = document.querySelector(cardSelector);

    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = this._cardSelector
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle("element__like_active");
  }

  _handleDeleteElement = () => {
    this._element.remove();
  };

  _addListeners() {
    this._element
      .querySelector(".element__like")
      .addEventListener("click", this._handleLikeClick);
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", this._handleDeleteElement);
    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleCardClick);
  }

  generateCard() {
    this._element = this._getTemplate();
    const image = this._element.querySelector(".element__image");

    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    this._addListeners();

    return this._element;
  }
}