import { configureStore } from '@reduxjs/toolkit';
import { isEventMapas } from './reducers/EventMapa';
import { StateIsPermission } from './reducers/StateIsPermission';
import { state } from './reducers/StateList';
import { StateObject } from './reducers/StateObject';

export const store = configureStore({
  reducer: {
    state: state.reducer,
    stateObject: StateObject.reducer,
    stateIsPermission: StateIsPermission.reducer,
    isEventMapas: isEventMapas.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

export type AppDispatch = typeof store.dispatch;
