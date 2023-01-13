import { ISiteIGroupsInfo } from '../../interfaces/IGroupsInfo';
import { ISiteCurrentUser } from '../../webparts/app/interfaces/IUserInfo';
export declare const StateObject: import("@reduxjs/toolkit").Slice<{
    currentUser: ISiteCurrentUser;
    groupUser: ISiteIGroupsInfo;
    AddItemListConteudoModulo: boolean;
    EditItemListConteudoModulo: boolean;
}, {
    itemAddCurrentInfo: (state: import("immer/dist/internal").WritableDraft<{
        currentUser: ISiteCurrentUser;
        groupUser: ISiteIGroupsInfo;
        AddItemListConteudoModulo: boolean;
        EditItemListConteudoModulo: boolean;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
    itemAddGroupInfo: (state: import("immer/dist/internal").WritableDraft<{
        currentUser: ISiteCurrentUser;
        groupUser: ISiteIGroupsInfo;
        AddItemListConteudoModulo: boolean;
        EditItemListConteudoModulo: boolean;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
    itemAddConteudoModulo: (state: import("immer/dist/internal").WritableDraft<{
        currentUser: ISiteCurrentUser;
        groupUser: ISiteIGroupsInfo;
        AddItemListConteudoModulo: boolean;
        EditItemListConteudoModulo: boolean;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
    itemEditConteudoModulo: (state: import("immer/dist/internal").WritableDraft<{
        currentUser: ISiteCurrentUser;
        groupUser: ISiteIGroupsInfo;
        AddItemListConteudoModulo: boolean;
        EditItemListConteudoModulo: boolean;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
}, "stateObject">;
export declare const itemAddCurrentInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "stateObject/itemAddCurrentInfo">, itemAddGroupInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "stateObject/itemAddGroupInfo">, itemAddConteudoModulo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "stateObject/itemAddConteudoModulo">, itemEditConteudoModulo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "stateObject/itemEditConteudoModulo">;
//# sourceMappingURL=StateObject.d.ts.map