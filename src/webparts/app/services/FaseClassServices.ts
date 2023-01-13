import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddFase } from '../../../dataflow/reducers/StateList';
import { IFaseItems } from '../interfaces/IFaseItems';
import { mapGetItemsFase } from '../repositories/Fase';

export class FaseClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = '4-Fase';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllFase = async () => {
    const result: IFaseItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Complexo/Nome', 'Complexo', 'Complexo/Id')
      .expand('Complexo')
      .orderBy('Id', true)
      .get();
    return mapGetItemsFase(result);
  };

  public getItemsWithLimit = async (top: number = 100) => {
    const result: IFaseItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Complexo/Nome', 'Complexo')
      .expand('Complexo')
      .orderBy('Id', true)
      .get();
    return mapGetItemsFase(result);
  };

  public addFase = async (FaseInput: IFaseItems) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(FaseInput);
    return data as IFaseItems;
  };

  public editFase = async (id: number, FaseInput: IFaseItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(FaseInput);
  };

  public deleteFase = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllFase = () => {
    this.getItemsAllFase()
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddFase(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createFase = (FaseInput: IFaseItems) => {
    this.addFase(FaseInput)
      .then((response) => {
        const Fase: IFaseItems = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
          Complexo: response.Complexo,
        };
        this._dispatch(itemsAddFase(Fase));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
