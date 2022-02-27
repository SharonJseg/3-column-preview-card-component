import './Card.css';

const Card = ({ card }) => {
  return (
    <li className='card'>
      <picture>
        <img
          src={require(`../../images/${card.icon}`)}
          alt={card.header}
          className='card__image'
        />
      </picture>
      <h2 className='card__title'>{card.header}</h2>
      <p className='card__text'>{card.text}</p>
      <button className='card__button'>Learn More</button>
    </li>
  );
};

export default Card;
