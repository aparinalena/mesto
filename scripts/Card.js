import {openPopup, popupImage, popupImageElement, popupImageCaption} from './index.js';

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement;
    }

    _handleDelete = () => {
        if (this._element) {
            this._element.remove();
        }
    }
    
    _handleLike = (evt) => {
        evt.target.classList.toggle('element__like_active');
    }

    _handleImage = () => {
        popupImageElement.src = this._link;
        popupImageElement.alt = this._name;
        popupImageCaption.textContent = this._name;
        openPopup(popupImage);
    }

    _setListeners = () => {
        this._element.querySelector('.element__like').addEventListener('click', this._handleLike);
        this._element.querySelector('.element__trash').addEventListener('click', this._handleDelete);
        this._element.querySelector('.element__image').addEventListener('click', this._handleImage);
    }

    generateCard() {
        this._element = this._getTemplate();
    
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setListeners();
        
        return this._element;
    } 
}

export default Card;