type ColumnLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'F';

interface ChessPiece {
  row: number;
  column: ColumnLetter;
  color: string;
  type: string;
}

interface MapState {
  map: any[][];
}

interface Action {
  type: string;
  payload?: any;
}

const defaultState: MapState = {
  map: [[], [], [], [], [], [], [], []],
};

defaultState.map.forEach((e, row) => {
  for (let column = 0; column < 8; column++) {
    switch (row) {
      case 0:
        e.push({
          type: 'pawn',
          color: 'black',
        });
        break;
      case 1:
        switch (column) {
          case 0:
          case 7:
            e.push({
              type: 'rook',
              color: 'black',
            });
            break;
          case 1:
          case 6:
            e.push({
              type: 'horse',
              color: 'black',
            });
            break;
          case 2:
          case 5:
            e.push({
              type: 'elephant',
              color: 'black',
            });
            break;
          case 3:
            e.push({
              type: 'queen',
              color: 'black',
            });
            break;
          case 4:
            e.push({
              type: 'king',
              color: 'black',
            });
            break;
          default:
            break;
        }
        break;
      case 6:
        switch (column) {
          case 0:
          case 7:
            e.push({
              type: 'rook',
              color: 'white',
            });
            break;
          case 1:
          case 6:
            e.push({
              type: 'horse',
              color: 'white',
            });
            break;
          case 2:
          case 5:
            e.push({
              type: 'elephant',
              color: 'white',
            });
            break;
          case 3:
            e.push({
              type: 'queen',
              color: 'white',
            });
            break;
          case 4:
            e.push({
              type: 'king',
              color: 'white',
            });
            break;
          default:
            break;
        }
        break;
      case 7:
        e.push({
          type: 'pawn',
          color: 'white',
        });
        break;
      default:
        e.push({});
        break;
    }
  }
});

const MapReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default MapReducer;
