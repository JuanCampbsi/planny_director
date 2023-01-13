import { sp } from '@pnp/sp/presets/all';

import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddInformativos, itemsAddInformativosLabel, setItemsAddInformativosCentral } from '../../../dataflow/reducers/StateList';
import { IInformativosCarrosel, IInformativosCentral } from '../interfaces/IInformativosCarrosel';
import { mappedInformativosCarrosel } from '../repositories/InformativosCarrosel';
import { mappedInformativosCentral } from '../repositories/InformativosCentral';
import { mappedInformativosLabel } from '../repositories/InformativosLabel';

export class InformativosClassService {
  private _dispatch: IDispatch<IAnyAction>;
  private _list: string;
  private _list_Label: string;
  private _list_Central: string;

  constructor() {
    this._list = 'InformativosCarrosel';
    this._list_Label = 'InformativosLabel';
    this._list_Central = 'InformativosCentral';
    this._dispatch = useAppDispatch();
  }

  public getItemsAllInfo = async () => {
    const result: IInformativosCarrosel[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select('Id', 'Title', 'SubTitulo', 'UrlLink', 'Modified', 'Background')
      .orderBy('Created', true)
      .get();
    return mappedInformativosCarrosel(result);
  };

  public getItemsAllInfoLabel = async () => {
    const result: IInformativosCarrosel[] = await sp.web.lists
      .getByTitle(this._list_Label)
      .items.select('Id', 'Title', 'SubTitulo', 'UrlLink', 'Modified', 'MiniaturaInfo', 'FixarItem', 'Created')
      .orderBy('Created', false)
      .get();
    return mappedInformativosLabel(result);
  };

  public getItemsAllInfoCentral = async () => {
    const result: IInformativosCentral[] = await sp.web.lists
      .getByTitle(this._list_Central)
      .items.select('Id', 'Title', 'Conteudo', 'Background', 'Modified')
      .orderBy('Modified', false)
      .get();
    return mappedInformativosCentral(result);
  };

  public getAllInfo = () => {
    this.getItemsAllInfo()
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddInformativos(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public getAllInfoLabel = () => {
    this.getItemsAllInfoLabel()
      .then((result) => {
        result.map((item) => {
          this._dispatch(itemsAddInformativosLabel(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public getAllInfoCentral = () => {
    this.getItemsAllInfoCentral()
      .then((result) => {
        result.map((item) => {
          this._dispatch(setItemsAddInformativosCentral(item));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
