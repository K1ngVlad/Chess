import { FC } from 'react';
import './Chessboard.css';
import Row from './Row/Row';

const Chessboard: FC = () => {
  const arr = [];
  for (let i = 1; i <= 8; i++) {
    arr.push(1);
  }
  console.log(arr);

  return (
    <div className="Chessboard">
      {arr.map((e, i) => {
        if (e) {
          return <Row index={i} key={i} />;
        }
      })}
    </div>
  );
};

export default Chessboard;
