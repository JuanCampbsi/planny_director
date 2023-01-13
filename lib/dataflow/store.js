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
export default store;
//# sourceMappingURL=store.js.map