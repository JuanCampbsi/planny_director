import { createSlice } from '@reduxjs/toolkit';
let currentUser;
let groupUser;
export const StateObject = createSlice({
    name: 'stateObject',
    initialState: {
        currentUser,
        groupUser,
        AddItemListConteudoModulo: false,
        EditItemListConteudoModulo: false,
    },
    reducers: {
        itemAddCurrentInfo: (state, action) => {
            state.currentUser = action.payload;
        },
        itemAddGroupInfo: (state, action) => {
            state.groupUser = action.payload;
        },
        itemAddConteudoModulo: (state, action) => {
            state.AddItemListConteudoModulo = action.payload;
        },
        itemEditConteudoModulo: (state, action) => {
            state.EditItemListConteudoModulo = action.payload;
        },
    },
});
export const { itemAddCurrentInfo, itemAddGroupInfo, itemAddConteudoModulo, itemEditConteudoModulo } = StateObject.actions;
//# sourceMappingURL=StateObject.js.map