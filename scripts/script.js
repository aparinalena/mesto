let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

openPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})

document.querySelector('.popup__button').onclick = myClick;

function myClick(evt) {
    evt.preventDefault();
    let a = document.querySelector('.popup__item_name').value;
    let b = document.querySelector('.popup__item_job').value;
    document.querySelector('.profile__name').innerHTML = a;
    document.querySelector('.profile__job').innerHTML = b;
    popup.classList.remove('popup_opened');
}