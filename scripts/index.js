const popupAddOpenButton = document.querySelector('.add-open');
const popupAddForm = document.querySelector('.popup_type_add');
const popupEditOpenButton = document.querySelector('.edit-open');
const popupEditForm = document.querySelector('.popup_type_edit');

const formEditPopup = document.querySelector('.form-edit');
const formAddPopup = document.querySelector('.form-add');

const nameInput = document.querySelector('.popup__input_el_name');
const jobInput = document.querySelector('.popup__input_el_job');
const linkInput = document.querySelector('.popup__input_el_link');
const placeInput = document.querySelector('.popup__input_el_place');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popupImage = document.querySelector('.popup_type_image');
const popupImageCaption = document.querySelector('.popup__image-caption');
const popupImageElement = document.querySelector('.popup__image');

const closeButtons = document.querySelectorAll('.popup__close');

const elementTemplate = document.querySelector('#element-template').content;
const elementsItems = document.querySelector('.elements');

initialCards.forEach(createCard);

function createCard({name, link}) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const imageElement = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = name;
  imageElement.src = link;
  imageElement.alt = name;
  cardElement.querySelector('.element__image').addEventListener('click', (evt) => {
    popupImageElement.src = link;
    popupImageElement.alt = name;
    popupImageCaption.textContent = name;
    openPopup(popupImage);
  });
  renderCard(cardElement);
  deleteEventListeners(cardElement);
  likeEventListeners(cardElement);
  return cardElement;
}

function renderCard(item) {
  elementsItems.prepend(item);
}

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
  const name = placeInput.value;
  const link = linkInput.value; 
  createCard({name, link});
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupAddForm);
}

formAddPopup.addEventListener('submit', submitAddForm); 

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupMousedown);
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupMousedown);
}

closeButtons.forEach(addCloseHandler);

function addCloseHandler(button) {
  button.addEventListener('click', (e) => {
    const popup = e.target.closest('.popup');
    closePopup(popup);
  });
}

function closePopupEsc(evt) {
    const key = evt.key; 
    if (key === "Escape") {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    };
}

function closePopupMousedown(evt) {
  if (evt.target.classList.contains('popup_opened')) { 
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function submitEditForm (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditForm);
}

function resetValidationErrors(form) {
  const inputsList = Array.from(form.querySelectorAll('.popup__input'));
  const errorsList = Array.from(form.querySelectorAll('.popup__error'));
  inputsList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
  errorsList.forEach((error) => {
    error.classList.remove('popup__error_visible');
  });
}

popupEditOpenButton.addEventListener('click', (evt) => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditForm);
  resetValidationErrors(popupEditForm);
});

popupAddOpenButton.addEventListener('click', (evt) => {
  openPopup(popupAddForm);
  placeInput.value = '';
  linkInput.value = '';
  resetValidationErrors(popupAddForm);
});

formEditPopup.addEventListener('submit', submitEditForm);