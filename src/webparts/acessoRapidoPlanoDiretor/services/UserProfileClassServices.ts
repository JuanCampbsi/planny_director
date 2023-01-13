import { sp } from '@pnp/sp/presets/all';
import '@pnp/sp/profiles';
import { graph } from '@pnp/graph/presets/all';
import '@pnp/graph/groups';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { ISiteUserInfo } from '@pnp/sp/site-users/types';
import { mapGetItemsUserGroups } from '../repositories/User';
import { itemAddCurrentInfo } from '../../../dataflow/reducers/StateObject';
import '@pnp/graph/photos';
export class UserProfileClassService {
  private _dispatch: IDispatch<IAnyAction>;
  private _dataUser: ISiteUserInfo;

  constructor() {
    this._dispatch = useAppDispatch();
  }

  private async initCurrentUser() {
    this._dataUser = await this.getCurrentUser();
  }

  public getCurrentUser = async () => {
    return await sp.web.currentUser.get();
  };

  public getGroupsInfoCurrentUser = async () => {
    await this.initCurrentUser();
    const result = await sp.web.currentUser.groups();
    const profile = await sp.profiles.userProfile;

    return mapGetItemsUserGroups(result, this._dataUser, profile);
  };

  public getCurrentUserPictureProfile = async () => {
    const photoValue = await graph.me.photo.getBlob();
    const url = window.URL || window.webkitURL;
    const blobUrl = url.createObjectURL(photoValue);

    return blobUrl;
  };

  public getAllGroupsInfo = () => {
    this.getGroupsInfoCurrentUser()
      .then((result) => {
        this._dispatch(itemAddCurrentInfo(result));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
