import { sp } from '@pnp/sp/presets/all';
import '@pnp/sp/files';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { IFilter } from '../interfaces/IFilter';
import { mapGetItemsConteudoAnaliseCritica } from '../repositories/ConteudoAnaliseCritica';
import { setIsConteudoAnaliseCritica } from '../../../dataflow/reducers/StateList';
import { IConteudoAnaliseCritica } from '../interfaces/IConteudoAnaliseCritica';

export class ConteudoAnaliseCriticaClassService {
  private _list: string;
  private _urlAbsolut: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = '7-ConteudoAnaliseCritica';
    this._dispatch = useAppDispatch();
    this._urlAbsolut = 'https://globalvale.sharepoint.com';
  }

  public getConteudoAnaliseCriticalAll = async (filters?: IFilter) => {
    const modulo = filters?.modulo?.Id || filters?.modulo !== null ? `and Modulo eq '${filters?.modulo.Id}'` : '';
    const ciclo = filters?.ciclo?.Id ? ` Ciclo eq '${filters?.ciclo?.Id}'` : '';
    const corredor = filters?.corredor?.Id ? ` and Corredor eq '${filters?.corredor?.Id}'` : '';
    const complexo = filters?.complexo?.Id ? ` and Complexo eq '${filters?.complexo?.Id}'` : '';
    const fase = filters?.fase?.Id ? ` and Fase eq '${filters?.fase?.Id}'` : '';
    const filterQuery = ciclo + modulo + corredor + complexo + fase;

    const result: IConteudoAnaliseCritica[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select(
        'Id',
        'Title',
        'Conteudo',
        '*,Modulo/Nome,Modulo/Id',
        '*,Corredor/Id,Corredor/Nome',
        '*,Complexo/Id,Complexo/Nome,Corredor',
        '*,Fase/Id,Fase/Nome',
        '*,Ciclo/Id,Ciclo/Nome,Ciclo/Title'
      )
      .expand('Ciclo', 'Modulo', 'Corredor', 'Complexo', 'Fase')
      .filter(filterQuery)
      .get();

    return mapGetItemsConteudoAnaliseCritica(result);
  };

  public addConteudoAnaliseCritica = async (moduloInput: any) => {
    const { data } = await sp.web.lists.getByTitle(this._list).items.add(moduloInput);
    return data;
  };

  public editConteudoAnaliseCritica = async (id: number, moduloInput: any) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(moduloInput);
  };

  public deleteConteudoAnaliseCritica = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };

  public getAnaliseCritica = () => {
    this.getConteudoAnaliseCriticalAll()
      .then((result) => {
        console.log(result);
        this._dispatch(setIsConteudoAnaliseCritica(result));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
