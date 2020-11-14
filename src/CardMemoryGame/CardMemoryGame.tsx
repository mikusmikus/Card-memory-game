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
  const [winner, setWinner] = useState(false);
  const [Area, setArea] = useState('');
  const [disableAll, setDisableAll] = useState(false);
  const [start, setStart]= useState(false);
  const [showStart, setShowStart]= useState(true);
  const [count, setCount]= useState(0);
  const [timer, setTimer]=useState(0);
  const [startTimer, setStartTimer]=useState(false);
  const isInitialMount = useRef(true);


  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }  
    if (startTimer) {
      if (!winner){
        setTimeout(() => setTimer(timer + 1), 1000);
      } else {
        setTimer(timer);
      } 
    }
  }, [timer, startTimer]);


  const changeToName = (card:State) => {
    const copyCards = [...cards];
    const index =  cards.findIndex(element => element === card);
    copyCards[index].show= !copyCards[index].show;
    setCards(copyCards);
    const done = cards.filter(element => element.show);

    if (done.length === cards.length) {
      setWinner(true);
    } 

    setCount(count+1);

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
    setTimeout(() => {
      setArea(areaSize);
      const sameElemenets: number = Math.floor((size*size/2));
      const arrToUse:State[]= [];
      for (let i=0; i<sameElemenets; i++){
        const newCard:State = {
          id:  uuidv4(),
          image : `https://picsum.photos/id/${i*4}/200/200`,
          show: false,
          orderNumber: Math.floor(Math.random() * 999)
        };
        const newCard2:State = {
          id:  uuidv4(),
          image : `https://picsum.photos/id/${i*4}/200/200`,
          show: false,
          orderNumber: Math.floor(Math.random() * 999)
        };
        arrToUse.push(newCard);
        arrToUse.push(newCard2);
      }
      arrToUse.sort((a, b) => a.orderNumber- b.orderNumber);
      setCards(arrToUse);
      setStart(false);
      setShowStart(false);
      setCount(0);
      setTimer(0);
      setStartTimer(true);
    // console.log(arrToUse);
    }, 500);
  };

  const startGameHandler = () => {
    setStart(true);
    const arrToUse:State[]= [];
    setCards(arrToUse);
    setFirstCard(undefined);
    setArea('');
    setWinner(false);
    setStartTimer(false);
    setTimer(0);
  };

  const convertCounter = (time:number) => {
    const minutes:number = Math.floor(time / 60);
    const seconds:number = time - minutes * 60;
    let ret = '';
    ret += `${  minutes  }:${  seconds < 10 ? '0' : ''}`;
    ret += `${  seconds}`;
    return ret;
  };

  return (
    <div className="container">
      <header className="header">
        <div className="row">
          <div className="col-xs-4">
            <div className="button__start-wrapper">
              <button type="button" className="button__start" onClick={() => startGameHandler()}>{showStart? 'START GAME' : 'PLAY AGAIN'}</button>
            </div>
            
          </div>
          <div className="col-xs-6">
            {start && (
              <div className="button__option-wrapper">
                <button type="button" className="button__option" onClick={() => setGame(4, 'small')}>4x4 spēle</button>
                <button type="button" className="button__option" onClick={() => setGame(6, 'medium')}>6x6 spēle</button>
                <button type="button" className="button__option" onClick={() => setGame(10, 'large')}>10x10 spēle</button>
              </div>
            ) }
            {!showStart && 
           (
             <div className="button__option-wrapper">
               <div className='count'>steps: {count > 0 && count}</div>
               <div className='time'>time: {timer> 0 && convertCounter(timer)}</div>
             </div>
           )}
          </div>
          <div className="col-xs-2">
            <div className='records-wrapper'>
              <button type='button' className='button__option records'>Records</button>
            </div>
          </div>
        </div>
      </header>

      <div className="row center-xs"> 
        <div className={`game ${Area==='medium' && 'medium'} ${Area==='large' && 'large'}`}>
          <div className="card">
            {Area && 

          cards.map(card => card.show ?
            (
              <>
                <div key={card.id} className={`card__front  ${Area==='medium' && 'card__front--medium'}  ${Area==='large' && 'card__front--large'}`}> 
                  <div className='loader' /> 
                  <img src={card.image} alt={card.image} className='card__front-image' />
                </div>
                {winner && 
                <div className="winner-wrapper" key={card.id}> 
                  <h2 className="winner">You are the winner!!! Your time is {convertCounter(timer)} and you made {count} steps</h2>
                </div>}
              </>
            ):
            (
              <div key={card.id} className={`card__back ${Area==='medium' && 'card__back--medium'} ${Area==='large' && 'card__back--large'}`}>
                <button type="button" className='card__back-button' disabled={disableAll} onClick={()=>changeToName(card)}>+</button>
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