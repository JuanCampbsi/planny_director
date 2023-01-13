import { IFaseItems } from './IFaseItems';

export interface ICorredor {
  Id: number;
  Created?: string;
  Modified?: string;
}

export interface IComplexoItems {
  Id: number;
  Title?: string;
  Nome: string;
  Created: string;
  Modified: string;
  Corredor: ICorredor;
  Fase: IFaseItems;
  OrdemImpressao?: number;
}

export type IComplexoInput = Pick<IComplexoItems, 'Id' | 'Corredor' | 'Nome'>;
