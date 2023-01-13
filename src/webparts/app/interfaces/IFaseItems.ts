export interface IComplexo {
  Id: number;
  Nome: string;
}

export interface IFaseItems {
  Id: number;
  Title?: string;
  Nome: string;
  Created: string;
  Modified: string;
  Complexo: IComplexo;
  OrdemImpressao?: number;
}

export type IFaseInput = Pick<IFaseItems, 'Id' | 'Complexo' | 'Nome'>;
