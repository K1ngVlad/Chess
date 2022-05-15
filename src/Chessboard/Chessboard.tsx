import { FC, useEffect } from 'react';
import './Chessboard.css';

const Chessboard: FC = () => {
  let divStyle = {
    height: window.innerHeight,
    width: window.innerHeight,
  };

  useEffect(() => {
    divStyle.height = window.innerHeight;
    divStyle.width = window.innerHeight;
  }, [window.innerHeight]);

  return (
    <div style={divStyle} className="Chessboard-container">
      <div className="Chessboard"></div>
    </div>
  );
};

export default Chessboard;
