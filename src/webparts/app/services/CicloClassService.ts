import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddCiclo, setCicloCurrent, setListFilterCiclo } from '../../../dataflow/reducers/StateList';
import { ICicloItems } from '../interfaces/ICicloItems';
import { mapGetItemsCiclo } from '../repositories/Ciclo';

export class CicloClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = '1-Ciclo';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllCiclo = async () => {
    const result: ICicloItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Title', 'Nome', 'IsCurrentCiclo', 'Created', 'Modified')
      .orderBy('Title', true)
      .orderBy('IsCurrentCiclo', true)
      .get();
    return mapGetItemsCiclo(result);
  };

  public getAllCiclos = () => {
    this.getItemsAllCiclo()
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddCiclo(item));
          if (item.IsCurrentCiclo) {
            this._dispatch(setListFilterCiclo(item));
            this._dispatch(setCicloCurrent(item));
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
