let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

openPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})

let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__item_el_name');
let jobInput = document.querySelector('.popup__item_el_job');
nameInput.value = document.querySelector('.profile__name').innerHTML;
jobInput.value = document.querySelector('.profile__job').innerHTML;

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameProfile = document.querySelector('.profile__name');
    let jobProfile = document.querySelector('.profile__job');
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 