import React, { FC } from 'react';
import type { Card }  from '../../CardMemoryGame/CardMemoryGame';


type Props ={
  card : Card;
  area : string
};



const CardFront: FC<Props>= ({ card, area }) => {
  return (
    <div key={card.id} className={`card__front  ${area==='medium' && 'card__front--medium'}  ${area==='large' && 'card__front--large'}`}> 
      <div className='loader' /> 
      <img src={card.image} alt={card.image} className='card__front-image' />
    </div>
  );
};

export default CardFront;
