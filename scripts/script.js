let openAddPopup = document.querySelector('.add-open');
let addPopup = document.querySelector('.popup_type_add');
let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

let formElement = document.querySelector('.form-edit');
let formElementNew = document.querySelector('.form-add');

let nameInput = document.querySelector('.popup__item_el_name');
let jobInput = document.querySelector('.popup__item_el_job');
let linkInput = document.querySelector('.popup__item_el_link');
let placeInput = document.querySelector('.popup__item_el_place');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');


const closeButtons = document.querySelectorAll('.popup__close');

const initialCards = [
    {
      name: 'Токио',
      link: './images/tokyo.jpg'
    },
    {
      name: 'Киото',
      link: './images/kyoto.jpg'
    },
    {
      name: 'Гора Фудзи',
      link: './images/mount-fuji.jpg'
    },
    {
      name: 'Храмы Фусими Инари',
      link: './images/fushimi.jpg'
    },
    {
      name: 'Храм Тенрю-дзи',
      link: './images/tenryu-ji.jpg'
    },
    {
      name: 'Тории храма Хаконе',
      link: './images/torii-gate.jpg'
    }
  ]; 

const elementTemplate = document.querySelector('#element-template').content;
const elementsItems = document.querySelector('.elements');

function renderInitialCards() {
    initialCards.forEach(renderInitialCard);
}

function renderInitialCard({name, link}) {
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = name;
    cardElement.querySelector('.element__image').src = link;
    cardElement.querySelector('.element__image').alt = name;
    cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like_active');
    });
    cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
      evt.target.closest('.element').remove();
   });
    elementsItems.prepend(cardElement);
}

renderInitialCards();

function formSubmitHandlerNew (evt) {
  evt.preventDefault(); 
  let name = placeInput.value;
  let link = linkInput.value;
  renderInitialCard({name, link});
  placeInput.value = '';
  linkInput.value = '';
  closePopupHandler(evt);
}

formElementNew.addEventListener('submit', formSubmitHandlerNew); 

function popupOpener () {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function addOpener () {
  addPopup.classList.add('popup_opened');
}

closeButtons.forEach(addCloseHandler);

function addCloseHandler(button) {
  button.addEventListener('click', closePopupHandler);
}

function closePopupHandler(e) {
  const popup = e.target.closest('.popup');
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopupHandler(evt);
}

openPopup.addEventListener('click', popupOpener);
openAddPopup.addEventListener('click', addOpener);
formElement.addEventListener('submit', formSubmitHandler); 