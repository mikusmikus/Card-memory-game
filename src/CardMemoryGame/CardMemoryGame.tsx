/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'flexboxgrid';
import './CardMemoryGame.css';
import Button from '../components/button/button';
import ResultTable from '../components/table/table';
import CardFront from '../components/cards/card-front';
import CardBack from '../components/cards/cards-back';
import Winner from '../components/winner/winner';



export type Card  = {
  id: string;
  image: string;
  show: boolean;
  orderNumber:number;
};   

let openCards = 0;
let timeOutId:NodeJS.Timeout;

const mediumResult = [
  { id:  uuidv4(),
    name : 'john',
    steps:99,
    time: 223, 
  },
  { id: uuidv4(),
    name : 'tomstoms',
    steps:55,
    time: 245, 
  },
  { id:  uuidv4(),
    name : 'peter',
    steps:99,
    time: 377, 
  },

];
  
const largeResult = [
  {
    id:  uuidv4(),
    name : 'toms',
    steps:134,
    time: 445, 
  },
  { 
    id: uuidv4(),
    name : 'peter',
    steps:222,
    time: 977, 
  }
];

export type Result = {
  id: string;
  name: string;
  steps: number;
  time:number;
};


const CardMemoryGame = () => {


  const [firstCard, setFirstCard] = useState<Card>();
  const [secondCard, setSecondCard] = useState<Card>();
  const [cards, setCards] = useState<Card[]>([]);
  const [easyResults, setEasyResults] = useState<Result[]>([]);
  const [mediumResults, setMediumResults] = useState<Result[]>(mediumResult);
  const [largeResults, setLargeResults] = useState<Result[]>(largeResult);
  const [winner, setWinner] = useState(false);
  const [records, setRecords] = useState(false);
  const [area, setArea] = useState('');
  const [start, setStart]= useState(2);
  const [count, setCount]= useState(0);
  const [timer, setTimer]=useState(0);
  const [startTimer, setStartTimer]=useState(false);
  const [inputName, setInputName] = useState('');
  const inputEl = useRef(null);
  // const isInitialMount = useRef(true);


  useEffect(() => {

    // const storageStart = localStorage.getItem('start');
    // storageStart && setStart(JSON.parse(storageStart));
    
    // const storageCount = localStorage.getItem('count');
    // storageCount && setCount(JSON.parse(storageCount));

    // const storageTimer = localStorage.getItem('timer');
    // storageTimer && setTimer(JSON.parse(storageTimer));

    // const storageCards = localStorage.getItem('cards');
    // storageCards && setCards(JSON.parse(storageCards));

    const storageArea= localStorage.getItem('area');
    storageArea && setArea(JSON.parse(storageArea));

    // const storageStartTimer= localStorage.getItem('startTimer');
    // storageStartTimer && setStartTimer(JSON.parse(storageStartTimer));

    const storageEasyResults= localStorage.getItem('easyResults');
    storageEasyResults && setEasyResults(JSON.parse(storageEasyResults));

  }, []);

  useEffect(() => {
    if (startTimer) {
      if (winner){
        setTimer(timer);
        // @ts-ignore
        inputEl.current.focus();  
      } else {
        // localStorage.setItem('timer', JSON.stringify(timer));
        setTimeout(() => setTimer(timer + 1), 1000);
      } 
    }
  }, [timer, startTimer]);

  



  const changeToName = (card:Card, cardIndex:number) => {
    const copyCards = [...cards];
    setCount(count+1);
    clearTimeout(timeOutId);
    if (openCards === 2){
      if (firstCard && secondCard ) {
        if (firstCard.image !== secondCard.image){
          const index1 =  cards.findIndex((element: Card) => element === firstCard);
          copyCards[index1].show=false;
          const index2 =  cards.findIndex((element: Card) => element === secondCard);
          copyCards[index2].show=false;
          setCards(copyCards);
          openCards = 0;
        } else {
          openCards = 0;
        }
      }
    }

    openCards +=1; 

    if (openCards === 1) {
      setFirstCard(card);
      copyCards[cardIndex].show=true;
      setCards(copyCards);
    } 
    if (openCards === 2) {
      setSecondCard(card);
      copyCards[cardIndex].show=true;
      setCards(copyCards);


      if (firstCard){
        if (firstCard.image !== card.image){
          const index1 =  cards.findIndex((element: Card) => element === firstCard);
          timeOutId = setTimeout(() => {
            copyCards[index1].show=false;
            copyCards[cardIndex].show=false;
            setCards(copyCards); 
          }, 3000);
        }
      }
    }

    const done = cards.filter((element: Card) => element.show);
    if (done.length === cards.length) {
      setWinner(true);
    } 

  };
 
  const setGame = (size:number, areaSize:string)=>{
    // localStorage.setItem('area', JSON.stringify(areaSize));
    setArea(areaSize);
    setTimeout(() => {
      const sameElemenets: number = Math.floor((size*size/2));
      const arrToUse:Card[]= [];
      for (let i=0; i<sameElemenets; i++){
        const newCard:Card = {
          id:  uuidv4(),
          image : `https://picsum.photos/id/${i*4}/200/200`,
          show: false,
          orderNumber: Math.floor(Math.random() * 999)
        };
        const newCard2:Card = {
          id:  uuidv4()+1,
          image : `https://picsum.photos/id/${i*4}/200/200`,
          show: false,
          orderNumber: Math.floor(Math.random() * 999)
        };
        arrToUse.push(newCard);
        arrToUse.push(newCard2);
      }
      arrToUse.sort((a, b) => a.orderNumber- b.orderNumber);
      setCards(arrToUse);

      // localStorage.setItem('count', JSON.stringify(0));
      setCount(0);
      // localStorage.setItem('start', JSON.stringify(0));
      setStart(0);
      // localStorage.setItem('timer', JSON.stringify(-3));
      setTimer(-3);
      // localStorage.setItem('startTimer', JSON.stringify(startTimer));
      setStartTimer(true);
    }, 300);
  };

  const startGameHandler = () => {
    // localStorage.setItem('start', JSON.stringify(1));
    setStart(1);
    const arrToUse:Card[]= [];
    setCards(arrToUse);
    setFirstCard(undefined);
    setArea('');
    setWinner(false);
    // localStorage.setItem('startTimer', JSON.stringify(startTimer));
    setStartTimer(false);

  };
  
  const convertTime = (time:number) => {
    const minutes:number = Math.floor(time / 60);
    const seconds:number = time - minutes * 60;
    let ret = '';
    if (minutes > 0) {
      ret += `${  minutes  }m:${  seconds < 10 ? '0' : ''}`;
      ret += `${  seconds}s`;
    } else {
      ret+= `${seconds}sec`;
    }
    return ret;
  };

  const saveNewResult= () => {
    if (inputName) {
      if (area === 'small'){
        easyResults.push({
          id: uuidv4(),
          name: inputName,
          steps: count,
          time: timer,
        });
        const sortedEasyResults = easyResults.sort((a, b) => {
          return a.time - b.time;
        });
        localStorage.setItem('easyResults', JSON.stringify(sortedEasyResults));
        setEasyResults(sortedEasyResults);
      } else if (area === 'medium'){
        mediumResults.push({
          id: uuidv4(),
          name: inputName,
          steps: count,
          time: timer,
        });
        const sortedMediumResults = mediumResults.sort((a, b) => {
          return a.time - b.time;
        });
        setMediumResults(sortedMediumResults);
      } else {
        largeResults.push({
          id: uuidv4(),
          name: inputName,
          steps: count,
          time: timer,
        });
        const sortedLargeResults = largeResults.sort((a, b) => {
          return a.time - b.time;
        });
        setLargeResults(sortedLargeResults);
        setLargeResults(largeResults);
      }
      setArea('');
      setWinner(false);
      setInputName('');
    } else {
      alert('enter your name to save result');
    }
  
  };

  return (
    <div className="container">
      {/* onClick={()=>setRecords(false)} aria-hidden="true" */} 
      <div className={`records-wrapper ${records && 'active'} `}>
        <div className={`records ${records && 'active'} `}>
          <button type='button' className='cancel-button' onClick={()=>setRecords(false)}>X</button>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <ResultTable heading='EASY (4x4)' resultArr={easyResults} handleTime={convertTime} />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <ResultTable heading='MEDIUM (6x6)' resultArr={mediumResults} handleTime={convertTime} />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <ResultTable heading='HARD (10x10)' resultArr={largeResults} handleTime={convertTime} />
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="row middle-xs">
          <div className="col-sm-4 col-xs-9">
            <div className="button__start-wrapper">
              <button type="button" className="button" onClick={() => startGameHandler()}>{!start? 'PLAY AGAIN' : 'START GAME'}</button>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 last-xs">
            {start === 1 && (
              <div className="button__option-wrapper">
                <Button label='4x4 easy' setGameHandler={() => setGame(4, 'small')} />
                <Button label='6x6 medium' setGameHandler={() => setGame(6, 'medium')} />
                <Button label='10x10 hard' setGameHandler={() => setGame(10, 'large')} />
              </div>
            ) }
            {(start === 0) && 
           (
             <div className="button__option-wrapper">
               <div className='count'>steps: {count > 0 && count}</div>
               <div className='time'>time: {timer > 0 && convertTime(timer)}</div>
             </div>
           )}
          </div>
          <div className=" col-sm-2 col-xs-3 last-sm">
            
            <button type='button' className='button button--option button--record' onClick={()=>setRecords(true)}>Results</button>
            
          </div>
        </div>
      </header>
      <div className="row center-xs"> 
        <div className={`game ${area==='medium' && 'medium'} ${area==='large' && 'large'}`}>
          <div className="card">
            {area && 
          cards.map((card: Card, index) => card.show ?
            (
              <CardFront area={area} card={card} />
            ):
            (
              <CardBack area={area} card={card} timer={timer} changeToName={()=>changeToName(card, index)} />
            )
          )}
            {winner && 
            <Winner count={count} saveNewResult={()=>saveNewResult()} handleTime={convertTime} timer={timer} myRef={inputEl} inputHandler={(e)=>setInputName(e.target.value)} inputName={inputName} />}
          </div>
     
        </div>
      </div>
    </div>

  );
};

export default CardMemoryGame;