import { TypedUseSelectorHook, useSelector } from 'react-redux';
import RootReducer from '../../Store/Reducers/RootReducer';

type RootState = ReturnType<typeof RootReducer>;

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
