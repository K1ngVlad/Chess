import { FC } from 'react';
import './Cell.css';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  type: string | null;
  color: string | null;
}

const Cell: FC<CellProps> = (props) => {
  const cell = require('../../../img/Cell.png');
  const piece = props.type
    ? require('../../../img/' + props.color + '/' + props.type + '.png')
    : require('../../../img/Cell.png');

  return (
    <div
      style={{
        backgroundColor:
          (props.rowIndex + props.columnIndex) % 2 ? '#F3E0C3' : '#A1723B',
      }}
      className="Cell"
    >
      <img className="CellImg" alt="Клетка" src={piece} />
    </div>
  );
};

export default Cell;
