var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sp } from '@pnp/sp/presets/all';
import '@pnp/sp/profiles';
import { graph } from '@pnp/graph/presets/all';
import '@pnp/graph/groups';
import { useAppDispatch } from '../../../dataflow/hooks';
import { mapGetItemsUserGroups } from '../repositories/User';
import { itemAddCurrentInfo } from '../../../dataflow/reducers/StateObject';
import '@pnp/graph/photos';
export class UserProfileClassService {
    constructor() {
        this.getCurrentUser = () => __awaiter(this, void 0, void 0, function* () {
            return yield sp.web.currentUser.get();
        });
        this.getGroupsInfoCurrentUser = () => __awaiter(this, void 0, void 0, function* () {
            yield this.initCurrentUser();
            const result = yield sp.web.currentUser.groups();
            const profile = yield sp.profiles.userProfile;
            return mapGetItemsUserGroups(result, this._dataUser, profile);
        });
        this.getCurrentUserPictureProfile = () => __awaiter(this, void 0, void 0, function* () {
            const photoValue = yield graph.me.photo.getBlob();
            const url = window.URL || window.webkitURL;
            const blobUrl = url.createObjectURL(photoValue);
            return blobUrl;
        });
        this.getAllGroupsInfo = () => {
            this.getGroupsInfoCurrentUser()
                .then((result) => {
                this._dispatch(itemAddCurrentInfo(result));
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._dispatch = useAppDispatch();
    }
    initCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            this._dataUser = yield this.getCurrentUser();
        });
    }
}
//# sourceMappingURL=UserProfileClassServices.js.map