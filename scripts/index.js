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

const formAdd = document.querySelector('.form-add');

function renderInitialCards() {
  initialCards.forEach((item) => {
    renderCard(item);
  });
}

renderInitialCards();

function createCard({name, link}) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const imageElement = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = name;
  imageElement.src = link;
  imageElement.alt = name;
  setCardsEventListeners(cardElement);
  return cardElement;
}

function renderCard(item) {
  elementsItems.prepend(createCard(item));
} 

function setCardsEventListeners(element) {
  element.querySelector('.element__trash').addEventListener('click', handleDelete);
  element.querySelector('.element__like').addEventListener('click', handleLike);
  element.querySelector('.element__image').addEventListener('click', handleImage);
}

function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function handleImage(evt) {
  popupImageElement.src = evt.target.closest('.element__image').src;
  popupImageElement.alt = evt.target.closest('.element__image').alt;
  popupImageCaption.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
  openPopup(popupImage);
}

function submitAddForm (evt) {
  evt.preventDefault(); 
  const name = placeInput.value;
  const link = linkInput.value; 
  renderCard({name, link});
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
  const buttonSubmit = form.querySelector('.popup__button');
  buttonSubmit.classList.add('popup__button_disabled');
  buttonSubmit.setAttribute('disabled', true);
}

popupEditOpenButton.addEventListener('click', (evt) => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditForm);
  resetValidationErrors(popupEditForm);
});

popupAddOpenButton.addEventListener('click', (evt) => {
  openPopup(popupAddForm);
  formAdd.reset();
  resetValidationErrors(popupAddForm);
});

formEditPopup.addEventListener('submit', submitEditForm);