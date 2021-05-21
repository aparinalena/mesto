let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

function popupOpener () {
    popup.classList.add('popup_opened');
    nameInput.value = document.querySelector('.profile__name').textContent;
    jobInput.value = document.querySelector('.profile__job').textContent;
}

openPopup.addEventListener('click', popupOpener);

function popupRemover () {
    popup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', popupRemover);

let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__item_el_name');
let jobInput = document.querySelector('.popup__item_el_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupRemover();
}

formElement.addEventListener('submit', formSubmitHandler); 