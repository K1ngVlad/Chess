import { FC } from 'react';
import Cell from './Cell/Cell';
import './Row.css';

interface RowProps {
  index: number;
}

const Row: FC<RowProps> = (props) => {
  const arr = [];
  for (let i = 1; i <= 8; i++) {
    arr.push(1);
  }
  return (
    <div className="Row">
      {arr.map((e, i) => {
        if (e) {
          return <Cell RowIndex={props.index} ColumnIndex={i} key={i} />;
        }
      })}
    </div>
  );
};

export default Row;
