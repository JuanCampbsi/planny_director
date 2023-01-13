export interface ICorredorItems {
  Id?: number;
  Title?: string;
  Nome: string;
  Estados?: string;
  Created?: string;
  Modified?: string;
  OrdemImpressao?: number;
}

export enum FilterSelectCorredor {}

export type ICorredorInput = Pick<ICorredorItems, 'Id' | 'Created'>;
