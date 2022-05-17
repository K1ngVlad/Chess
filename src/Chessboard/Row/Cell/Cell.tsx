import { FC } from 'react';
import './Cell.css';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  type: string;
}

const Cell: FC<CellProps> = (props) => {
  const cell = require('../../../img/Cell.png');
  const pawn = require('../../../img/pawn.png');

  return (
    <div
      style={{
        backgroundColor:
          (props.rowIndex + props.columnIndex) % 2 ? 'black' : 'white',
      }}
      className="Cell"
    >
      <img
        className="CellImg"
        alt="Клетка"
        src={props.type === 'pawn' ? pawn : cell}
      />
    </div>
  );
};

export default Cell;
