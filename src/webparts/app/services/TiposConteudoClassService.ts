import { sp } from '@pnp/sp/presets/all';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import {
  itemsAddCiclo,
  setCicloCurrent,
  setListFilterCiclo,
  setListFilterTiposConteudo,
  setTiposConteudo,
} from '../../../dataflow/reducers/StateList';
import { ITiposConteudoItems } from '../interfaces/ITiposConteudo';
import { mapGetItemsTipoConteudo } from '../repositories/TiposConteudo';

export class TiposConteudoClassService {
  private _list: string;
  private _dispatch: IDispatch<IAnyAction>;

  constructor() {
    this._list = 'TiposConteudo';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllTipos = async () => {
    const result: ITiposConteudoItems[] = await sp.web.lists.getByTitle(this._list).items.select('Id', 'Title').orderBy('Title', true).get();
    return mapGetItemsTipoConteudo(result);
  };

  public getAllTipos = () => {
    this.getItemsAllTipos()
      .then((result) => {
        result.map((item) => {
          //this._dispatch(itemsAddCiclo(item));

          // this._dispatch(setListFilterTiposConteudo(item));
          this._dispatch(setTiposConteudo(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
