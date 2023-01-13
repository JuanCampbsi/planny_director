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
export declare type IFaseInput = Pick<IFaseItems, 'Id' | 'Complexo' | 'Nome'>;
//# sourceMappingURL=IFaseItems.d.ts.map