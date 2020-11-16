import React, { FC } from 'react';
import type { Card }  from '../../CardMemoryGame/CardMemoryGame';


type Props ={
  card : Card;
  area : string
  disableAll: boolean;
  timer:number
  changeToName: () => void;
};



const CardBack: FC<Props>= ({ card, area, disableAll, timer, changeToName }) => {
  return (
    <>
      <div key={card.id} className={`card__back ${area==='medium' && 'card__back--medium'} ${area==='large' && 'card__back--large'}`}>
        <button type="button" className='card__back-button' disabled={disableAll} onClick={changeToName}>+</button>
      </div>
      {timer < 0 && 
      <div className="start-counter-wrapper">
        <p className="start-counter">{timer *-1}</p>
      </div> }
    </>
  );
};

export default CardBack;
