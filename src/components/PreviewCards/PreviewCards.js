import Card from '../Card/Card';
import './PreviewCards.css';
import cardArray from '../../cardArray';

const PreviewCards = () => {
  return (
    <section className='preview-cards'>
      <ul className='cards-container'>
        {cardArray.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default PreviewCards;
