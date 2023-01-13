import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddComplexo } from '../../../dataflow/reducers/StateList';
import { IComplexoItems } from '../interfaces/IComplexoItems';
import { mapGetItemsComplexo } from '../repositories/Complexo';

export class ComplexoClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = '3-Complexo';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllComplexo = async () => {
    const result: IComplexoItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor', 'Fase/Id')
      .expand('Corredor', 'Fase')
      .orderBy('Id', true)
      .get();
    return mapGetItemsComplexo(result);
  };

  public getItemsWithLimit = async (top: number = 100) => {
    const result: IComplexoItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Nome', 'Created', 'Modified', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor', 'Fase/Id')
      .expand('Corredor', 'Fase')
      .orderBy('Id', true)
      .get();
    return mapGetItemsComplexo(result);
  };

  public addComplexo = async (ComplexoInput: IComplexoItems) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(ComplexoInput);
    return data as IComplexoItems;
  };

  public editComplexo = async (id: number, ComplexoInput: IComplexoItems) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(ComplexoInput);
  };

  public deleteComplexo = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAllComplexos = () => {
    this.getItemsAllComplexo()
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddComplexo(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public createComplexos = (ComplexoInput: IComplexoItems) => {
    this.addComplexo(ComplexoInput)
      .then((response) => {
        const Complexo: IComplexoItems = {
          Id: response.Id,
          Nome: response.Nome,
          Created: response.Created,
          Modified: response.Modified,
          Corredor: response.Corredor,
          Fase: response.Fase,
        };
        this._dispatch(itemsAddComplexo(Complexo));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
