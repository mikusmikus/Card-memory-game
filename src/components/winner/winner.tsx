import React, { FC } from 'react';
// import type { Card }  from '../../CardMemoryGame/CardMemoryGame';


type Props ={
  count:number;
  timer:number;
  //   ref:React.MutableRefObject<null>;
  inputName: string;
  saveNewResult: () => void;
  handleTime: (time:number) => string;
  inputHandler: (value:string) => void;
  myRef: React.MutableRefObject<null>;
};


const Winner: FC<Props>= ({ count, saveNewResult, handleTime, timer, inputHandler, inputName, myRef }) => {
  return (
    <>
      <label htmlFor="inputName" className='input__label-wrapper'>
        <p className='input__label'>enter your name to save result!</p>
        <div className='input-wrapper'>
          <input type="text" className='input' onChange={(e) => inputHandler(e.target.value)} value={inputName} ref={myRef} />
          <button type="button" className="input__button" onClick={saveNewResult}>save</button>
        </div>
      </label>
      <div className="winner-wrapper"> 
        <h2 className="winner">You are the winner!!! Your time is {handleTime(timer)} and you made {count} steps</h2>
      </div>
    </>
  );
};

export default Winner;
