import { FC } from 'react';
import Cell from './Cell/Cell';
import './Row.css';

interface RowProps {
  index: number;
  row: any[];
}

const Row: FC<RowProps> = (props) => {
  // const arr = [];
  // for (let i = 1; i <= 8; i++) {
  //   arr.push(1);
  // }
  return (
    <div className="Row">
      {props.row.map((e, i) => {
        return (
          <Cell rowIndex={props.index} type={e.type} columnIndex={i} key={i} />
        );
      })}
    </div>
  );
};

export default Row;
