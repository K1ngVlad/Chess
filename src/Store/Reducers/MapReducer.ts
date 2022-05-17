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
    if (row === 0 || row === 1 || row === 6 || row === 7) {
      e.push({
        type: 'pawn',
      });
    } else {
      e.push({});
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
