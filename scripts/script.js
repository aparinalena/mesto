const popupAddOpenButton = document.querySelector('.add-open');
const popupAddForm = document.querySelector('.popup_type_add');
const popupEditOpenButton = document.querySelector('.edit-open');
const popupEditForm = document.querySelector('.popup_type_edit');

const formEditPopup = document.querySelector('.form-edit');
const formAddPopup = document.querySelector('.form-add');

const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_job');
const linkInput = document.querySelector('.popup__item_el_link');
const placeInput = document.querySelector('.popup__item_el_place');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popupImage = document.querySelector('.popup_type_image');
const popupImageCaption = document.querySelector('.popup__image-caption');
const popupImageElement = document.querySelector('.popup__image');

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
  initialCards.forEach(createCard);
}

function createCard({name, link}) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  let imageElement = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = name;
  imageElement.src = link;
  imageElement.alt = name;
    
  cardElement.querySelector('.element__image').addEventListener('click', (evt) => {
    popupImageElement.src = link;
    popupImageElement.alt = name;
    popupImageCaption.textContent = name;
    openPopup(popupImage);
  });
  elementsItems.prepend(cardElement);

  deleteEventListeners(cardElement);
  likeEventListeners(cardElement);
}

renderInitialCards();

function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function deleteEventListeners(element) {
  element.querySelector('.element__trash').addEventListener('click', handleDelete);
}

function handleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function likeEventListeners(element) {
  element.querySelector('.element__like').addEventListener('click', handleLike);
}

function submitAddForm (evt) {
  evt.preventDefault(); 
  let name = placeInput.value;
  let link = linkInput.value; 
  createCard({name, link});
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupAddForm);
}

formAddPopup.addEventListener('submit', submitAddForm); 

function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

closeButtons.forEach(addCloseHandler);

function addCloseHandler(button) {
  button.addEventListener('click', (e) => {
    const popup = e.target.closest('.popup');
    closePopup(popup);  
  });
}

function submitEditForm (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditForm);
}

popupEditOpenButton.addEventListener('click', (evt) => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditForm);
});

popupAddOpenButton.addEventListener('click', (evt) => {
  openPopup(popupAddForm);
});

formEditPopup.addEventListener('submit', submitEditForm);