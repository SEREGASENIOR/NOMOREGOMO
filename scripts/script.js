
  const pageList = document.querySelector('.places__list')
  const cardTemplate = document.querySelector('#card-template').content 

  initialCards.forEach(function createCard (element) {

    const cardClon = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardClon.querySelector('.card__title').textContent = element.name
    cardClon.querySelector('.card__image').src = element.link
    pageList.append(cardClon)

  })

  