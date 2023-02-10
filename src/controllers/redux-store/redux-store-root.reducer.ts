import { combineReducers } from 'redux';
import testsSlice from './reducers/example/example';

export const reduxRootReducer = combineReducers({
  title: testsSlice.reducer,
});
