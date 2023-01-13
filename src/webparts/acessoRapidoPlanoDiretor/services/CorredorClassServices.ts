import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddCorredor } from '../../../dataflow/reducers/StateList';
import { ICorredorItems } from '../interfaces/ICorredorItems';
import { mapGetItemsCorredor } from '../repositories/Corredor';

export class CorredorClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = '2-Corredor';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllCorredor = async () => {
    const result: ICorredorItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Estados', 'Created', 'Modified')
      .orderBy('Id', true)
      .get();
    return mapGetItemsCorredor(result);
  };

  public getItemsWithLimit = async (top: number = 100) => {
    const result: ICorredorItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Estados', 'Created', 'Modified')
      .orderBy('Id', true)
      .get();
    return mapGetItemsCorredor(result);
  };

  public addCorredor = async (CorredorInput: ICorredorItems) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(CorredorInput);
    return data as ICorredorItems;
  };

  public editCorredor = async (id: number, CorredorInput: ICorredorItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(CorredorInput);
  };

  public deleteCorredor = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllCorredor = () => {
    this.getItemsAllCorredor()
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddCorredor(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createCorredor = (CorredorInput: ICorredorItems) => {
    this.addCorredor(CorredorInput)
      .then((response) => {
        const Corredor: ICorredorItems = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
        };
        this._dispatch(itemsAddCorredor(Corredor));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
