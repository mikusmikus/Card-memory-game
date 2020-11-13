/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'flexboxgrid';
import './CardMemoryGame.css';

interface State {
  id: string;
  image: string;
  show: boolean;
  orderNumber:number;
}   

const CardMemoryGame = () => {
  const [cards, setCards] = useState<State[]>([]);
  const [firstCard, setFirstCard] = useState<State | undefined>();
  const [winner, setWinner] = useState('');
  const [Area, setArea] = useState('');
  const [disableAll, setDisableAll] = useState(false);
  const [start, setStart]= useState(false);

  const changeToName = (card:State) => {
    const copyCards = [...cards];
    const index =  cards.findIndex(element => element === card);
    copyCards[index].show= !copyCards[index].show;
    setCards(copyCards);

    const done = cards.filter(element => element.show);
    ( done.length === cards.length) && setWinner('We Have A Winner');

    if (!firstCard) {
      setFirstCard(card);
    } else if (firstCard.image !== card.image) {
      setDisableAll(true);
      setTimeout(() => {
        const firstCardIndex =  cards.findIndex(element => element === firstCard);
        const secondCardIndex =  cards.findIndex(element => element === card);
        copyCards[firstCardIndex].show= false;
        copyCards[secondCardIndex].show= false;    
        setCards(copyCards);
        setFirstCard(undefined);
        setDisableAll(false);
      }, 1000);
    } else {
      setFirstCard(undefined);
      setCards(copyCards);
    } 
  };
 
  const setGame = (size:number, areaSize:string)=>{
    setArea(areaSize);
    const sameElemenets: number = Math.floor((size*size/2));
    const arrToUse:State[]= [];
    for (let i=0; i<sameElemenets; i++){
      const newCard:State = {
        id:  uuidv4(),
        image : `https://picsum.photos/id/${i*10}/200/200`,
        show: false,
        orderNumber: Math.floor(Math.random() * 999)
      };
      const newCard2:State = {
        id:  uuidv4(),
        image : `https://picsum.photos/id/${i*10}/200/200`,
        show: false,
        orderNumber: Math.floor(Math.random() * 999)
      };
      arrToUse.push(newCard);
      arrToUse.push(newCard2);
    }
    arrToUse.sort((a, b) => a.orderNumber- b.orderNumber);
    setCards(arrToUse);
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="button__start-wrapper">
            <button type="button" className="button__start" onClick={() => setStart(true)}>Sākt Spēli</button>
          </div>
        </div>
      </div>
      {start && (
      <div className="row center-xs">
        <div className="button__option-wrapper">
          <div className="col-xs-4">
            <button type="button" className="button__option" onClick={() => setGame(4, 'small')}>4x4 spēle</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="button__option" onClick={() => setGame(6, 'medium')}>6x6 spēle</button>
          </div>
          <div className="col-xs-4">
            <button type="button" className="button__option" onClick={() => setGame(10, 'large')}>10x10 spēle</button>
          </div>
        </div>
        <h1 className={`heading ${winner && 'heading-show' }`}>{winner}</h1>
      </div>
      )}
      <div className="row center-xs"> 
      
        <div className={`game ${Area==='medium' && 'medium'} ${Area==='large' && 'large'}`}>
          <div className="card">
            {Area && 

          cards.map(card => card.show ?
            (
              
              <div key={card.id} className={`card__front  ${Area==='medium' && 'card__front--medium'}  ${Area==='large' && 'card__front--large'}`}> 
                <img src={card.image} alt={card.image} className='card__image' />
              </div>
             
            ):
            (
              <div className={`card__back ${Area==='medium' && 'card__back--medium'} ${Area==='large' && 'card__back--large'}`}>
                <button type="button" key={card.id} className='card__backSide' disabled={disableAll} onClick={()=>changeToName(card)}>+</button>
              </div>
            )
          
          ) }
          </div>
     
        </div>
      </div>
    </div>

  );
};


export default CardMemoryGame;