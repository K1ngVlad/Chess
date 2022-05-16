import { FC } from 'react';
import './Cell.css';

interface CellProps {
  RowIndex: number;
  ColumnIndex: number;
}

const Cell: FC<CellProps> = (props) => {
  const img = require('../../../img/Cell.png');

  return (
    <div
      style={{
        backgroundColor:
          (props.RowIndex + props.ColumnIndex) % 2 ? 'black' : 'white',
      }}
      className="Cell"
    >
      <img className="CellImg" alt="Клетка" src={img} />
    </div>
  );
};

export default Cell;
