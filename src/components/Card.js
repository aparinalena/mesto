export default class Card {
  constructor(
    { data, handleCardClick, handleTrashClick, handleLikeClick },
    templateSelector,
    userId
  ) {
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this._cardSelector = templateSelector;
    this._userId = userId;
    this._name = data.name;
    this._link = data.link;
    this._idOwner = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  setLikes(arr) {
    this._element.querySelector(".element__like-counter").textContent =
      arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this._likeButton.classList.add("element__like_active");
    } else {
      this._likeButton.classList.remove("element__like_active");
    }
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _checkLike() {
    return this._likes.some((like) => {
      return like._id === this._userId;
    });
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._cardId, this._checkLike(), this);
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleTrashClick(this._cardId, this);
    });
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    this._deleteButton = this._element.querySelector(".element__trash");
    this._likeButton = this._element.querySelector(".element__like");

    if (this._userId !== this._idOwner) {
      this._deleteButton.remove();
    }

    this.setLikes(this._likes);
    this._setEventListeners();

    return this._element;
  }
}