export interface ICorredorItems {
  Id?: number;
  Title?: string;
  Nome: string;
  Estados?: string;
  Created?: string;
  Modified?: string;
}

export enum FilterSelectCorredor {}

export type ICorredorInput = Pick<ICorredorItems, 'Id' | 'Created'>;
