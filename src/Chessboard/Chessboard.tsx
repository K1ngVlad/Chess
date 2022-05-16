import { FC } from 'react';
import Cell from './Cell/Cell';
import './Chessboard.css';

const Chessboard: FC = () => {
  const arr = [];
  for (let i = 1; i <= 8; i++) {
    // for (let j = 1; j <= 8; j++) {
    arr.push(1);
    // }
  }
  console.log(arr);

  return (
    <div className="Chessboard-container">
      {arr.map((e, i) => {
        if (i) {
          return <Cell key={i} />;
        }
      })}
    </div>
  );
};

export default Chessboard;
