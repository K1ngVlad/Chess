import { FC } from 'react';
import './Cell.css';

const Cell: FC = () => {
  const img = require('../../img/Cell.png');
  return (
    <div className="Cell">
      <img className="CellImg" alt="Клетка" src={img} />
    </div>
  );
};

export default Cell;
