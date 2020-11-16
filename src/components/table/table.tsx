import React, { FC } from 'react';
import type { Result }  from '../../CardMemoryGame/CardMemoryGame';




type Props = {
  heading: string,
  resultArr: Result[]
  handleTime: (time:number) => string
};

const ResultTable: FC<Props> = ({ heading, resultArr, handleTime }) => {
  return (
    <div>
      <h5 className="results__heading">{heading}</h5>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>time</th>
            <th>steps</th>
          </tr>
        </thead>
        <tbody>
          {resultArr.map(({ name, steps, time, id }, index) => (
            <tr key={id} className="statistics">
              <td className="statistics__place"> {index + 1}. </td>
              <td>{name.toUpperCase().substring(0, 12)}</td>
              <td>{handleTime(time)}</td>
              <td>{steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
