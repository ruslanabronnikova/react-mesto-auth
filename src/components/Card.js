import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  function handleClick() {
    onCardClick(card);
  }

  function hadleLike() {
    onCardLike(card)
  }

  function hadleDelete() {
    onCardDelete(card)
  }

  const currentUser = useContext(CurrentUserContext)

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `element__buttonlike ${isLiked && 'element__buttonlike_active'}`
  );

  return (
    <div className="element">
      <img className="element__image" src={card.link} onClick={handleClick} />
      <h2 className="element__title">{card.name}</h2>
      <div className="element__likes">
        <button aria-label="Нравится" className={cardLikeButtonClassName} type="button" onClick={hadleLike}></button>
        <p className="element__counterlike">{card.likes.length}</p>
      </div>
      {isOwn && <button aria-label="Нравится" className="element__buttondel" type="button" onClick={hadleDelete} />}
    </div>
  )
}

export default Card;