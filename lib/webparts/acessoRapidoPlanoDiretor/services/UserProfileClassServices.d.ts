import '@pnp/sp/profiles';
import '@pnp/graph/groups';
import { ISiteUserInfo } from '@pnp/sp/site-users/types';
import '@pnp/graph/photos';
export declare class UserProfileClassService {
    private _dispatch;
    private _dataUser;
    constructor();
    private initCurrentUser;
    getCurrentUser: () => Promise<ISiteUserInfo>;
    getGroupsInfoCurrentUser: () => Promise<import("../interfaces/IUserInfo").ISiteCurrentUser>;
    getCurrentUserPictureProfile: () => Promise<string>;
    getAllGroupsInfo: () => void;
}
//# sourceMappingURL=UserProfileClassServices.d.ts.map