let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__item_el_name');
let jobInput = document.querySelector('.popup__item_el_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function popupOpener () {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function popupRemover () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupRemover();
}

openPopup.addEventListener('click', popupOpener);
closePopup.addEventListener('click', popupRemover);
formElement.addEventListener('submit', formSubmitHandler); 