import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { setListMenuItems } from '../../../dataflow/reducers/StateList';
import { IMenuItems } from '../interfaces/IMenuItems';
import { mapGetItemsMenu } from '../repositories/Menu';

export class ItemsMenuService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = 'ItemsMenu';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllMenu = async () => {
    const result: IMenuItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Title', 'UrlMenu', 'Created', 'Modified')
      .orderBy('Id', true)
      .get();
    return mapGetItemsMenu(result);
  };

  public getAllMenu = () => {
    this.getItemsAllMenu()
      .then((result) => {
        console.log({ result });
        result.map((item) => {
          this._dispatch(setListMenuItems(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
