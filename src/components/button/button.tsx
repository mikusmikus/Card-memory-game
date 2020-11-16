import React, { FC } from 'react';

type Props ={
  label:string,
  setGameHandler : () => void;
};


const Button: FC<Props> = ({ setGameHandler, label }) => {
  return (
    <button type="button" className="button button--option" onClick={setGameHandler}>{label}</button>
  );
};

export default Button;
