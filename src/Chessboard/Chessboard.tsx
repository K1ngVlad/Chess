import { FC, useState } from 'react';
import './Chessboard.css';
import useTypedSelector from './hooks/UseTypedSelector';
import Row from './Row/Row';

const Chessboard: FC = () => {
  const map = useTypedSelector((state) => state.map.map);
  // const arr = [];
  // for (let i = 1; i <= 8; i++) {
  //   arr.push(1);
  // }
  // console.log(arr);

  return (
    <div className="Chessboard">
      {map.map((e, i) => {
        return <Row index={i} row={e} key={i} />;
      })}
    </div>
  );
};

export default Chessboard;
