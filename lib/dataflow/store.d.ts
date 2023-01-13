export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    state: import("./reducers/StateList").IIinitialState;
    stateObject: {
        currentUser: import("../webparts/app/interfaces/IUserInfo").ISiteCurrentUser;
        groupUser: import("../interfaces/IGroupsInfo").ISiteIGroupsInfo;
        AddItemListConteudoModulo: boolean;
        EditItemListConteudoModulo: boolean;
    };
    stateIsPermission: {
        isValuePermission: boolean;
    };
    isEventMapas: {
        isValueEventMapaSudeste: boolean;
        isValueEventMapaSul: boolean;
        isValueEventMapaOman: boolean;
        isValueEventMapaNorte: boolean;
        isValueEventMapaPelotas: boolean;
        isValueEventMapaDisableSudeste: boolean;
        isValueEventMapaDisableSul: boolean;
        isClickEvent: boolean;
        selectedCorredor: any;
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    state: import("./reducers/StateList").IIinitialState;
    stateObject: {
        currentUser: import("../webparts/app/interfaces/IUserInfo").ISiteCurrentUser;
        groupUser: import("../interfaces/IGroupsInfo").ISiteIGroupsInfo;
        AddItemListConteudoModulo: boolean;
        EditItemListConteudoModulo: boolean;
    };
    stateIsPermission: {
        isValuePermission: boolean;
    };
    isEventMapas: {
        isValueEventMapaSudeste: boolean;
        isValueEventMapaSul: boolean;
        isValueEventMapaOman: boolean;
        isValueEventMapaNorte: boolean;
        isValueEventMapaPelotas: boolean;
        isValueEventMapaDisableSudeste: boolean;
        isValueEventMapaDisableSul: boolean;
        isClickEvent: boolean;
        selectedCorredor: any;
    };
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export default store;
export declare type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=store.d.ts.map