import { ICicloItemsFormated } from './ICicloItems';
import { IComplexoItems } from './IComplexoItems';
import { ICorredorItems } from './ICorredorItems';
import { IFaseItems } from './IFaseItems';
import { IModuloItemsFormated } from './IModuloItems';

export interface IFilter {
  modulo: IModuloItemsFormated;
  ciclo: ICicloItemsFormated;
  corredor: ICorredorItems;
  complexo: IComplexoItems;
  fase: IFaseItems;
  complexoArray: IComplexoItems[];
  faseArray: IFaseItems[];
}
