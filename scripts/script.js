
const pageList = document.querySelector('.places__list')
const cardTemplate = document.querySelector('#card-template').content 

const popupAnimathionEdit = document.querySelector('.popup_type_edit').classList.add('popup_is-animated')
const popupAnimathionCard = document.querySelector('.popup_type_new-card').classList.add('popup_is-animated')
const popupAnimathionImage = document.querySelector('.popup_type_image').classList.add('popup_is-animated')

function openModal (popup, isModal) {
    if (isModal) {
      const nameInput = document.querySelector('.popup__input_type_name')
      const jobInput = document.querySelector('.popup__input_type_description')
  
      const profileTitle = document.querySelector('.profile__title');
      const profileDescr = document.querySelector('.profile__description');
      
      nameInput.value = profileTitle.textContent
      jobInput.value = profileDescr.textContent
    }
  
    popup.classList.add('popup_is-opened');
}

function closeModal (popup) {
    popup.classList.remove('popup_is-opened');
}

const popupImage = document.querySelector('.popup__image')
const popupCaption =document.querySelector('.popup__caption')

function createCard (element) {

    const cardClon = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardClon.querySelector('.card__title').textContent = element.name
    cardClon.querySelector('.card__image').src = element.link

    cardClon.querySelector('.card__like-button').addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like-button_is-active');
    })

    buttonBasket = cardClon.querySelector('.card__delete-button')

    const closestElement = buttonBasket.closest('li.card');

     buttonBasket.addEventListener('click', function() {
      closestElement.remove(closestElement)
    })

    cardClon.querySelector('.card__image').addEventListener('click', function openCardPopup() {
      popupImage.src=element.link;
      popupCaption.textContent=element.name;
      openModal(imagePopup);
    })

  pageList.prepend(cardClon)

}

const buttonCloseImage = document.querySelector('.popup__close_image').addEventListener('click', () => closeModal(imagePopup))

initialCards.forEach((element) => createCard(element));

const buttonEdit = document.querySelector('.profile__edit-button').addEventListener('click',  () => openModal(profilePopup, true));


const buttonCloseEdit= document.querySelector('.popup__close_edit');
buttonCloseEdit.addEventListener('click',  () => closeModal (profilePopup));


const profileFormElement = document.querySelector('.popup__form_edit');


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    
    const nameInput = document.querySelector('.popup__input_type_name').value
    const jobInput = document.querySelector('.popup__input_type_description').value

    const profileTitle = document.querySelector('.profile__title');
    const profileDescr = document.querySelector('.profile__description');
    
    profileTitle.textContent=nameInput;
    profileDescr.textContent=jobInput;

    profilePopup.classList.remove('popup_is-opened');
    closeModal(profilePopup);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

const buttonCloseCard= document.querySelector('.popup__close_new-card');
buttonCloseCard.addEventListener('click',  () => closeModal (cardPopup));

const buttonAdd = document.querySelector('.profile__add-button').addEventListener('click', () => openModal(cardPopup));


const cardFormElement = document.querySelector('.popup__form_card');

function handleCardFormSubmit(evt) {

  evt.preventDefault();
  const inputCardName = document.querySelector('.popup__input_type_card-name').value;
  const inputCardUrl = document.querySelector('.popup__input_type_url').value;

  const newCard = {
    name: inputCardName,
    link: inputCardUrl
  };

  createCard(newCard);            

  closeModal(cardPopup);         
  evt.target.reset();             
}

cardFormElement.addEventListener('submit', handleCardFormSubmit);



