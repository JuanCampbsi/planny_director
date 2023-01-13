import { createSlice } from '@reduxjs/toolkit';
import { ISiteIGroupsInfo } from '../../interfaces/IGroupsInfo';
import { IAppProps } from '../../webparts/app/interfaces/IAppProps';
import { ISiteCurrentUser } from '../../webparts/app/interfaces/IUserInfo';

let currentUser: ISiteCurrentUser;
let groupUser: ISiteIGroupsInfo;

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
