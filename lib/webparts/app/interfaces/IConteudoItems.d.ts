import { ICicloItemsFormated } from './ICicloItems';
import { IComplexoItems } from './IComplexoItems';
import { ICorredorItems } from './ICorredorItems';
import { IFaseItems } from './IFaseItems';
import { IModuloItemsFormated } from './IModuloItems';
import { ITiposConteudoFormated } from './ITiposConteudo';
export interface URLConteudo {
    Description: string;
    Url: string;
}
export interface IGrupos {
    Id: string;
    Title: string;
}
export interface IConteudoItems {
    Modified: string;
    Modulo: IModuloItemsFormated;
    Ciclo: ICicloItemsFormated;
    Complexo: IComplexoItems[];
    Fase: IFaseItems[];
    Corredor: ICorredorItems;
    Title: string;
    Id: number;
    TiposConteudo: ITiposConteudoFormated;
    URLConteudo: URLConteudo;
    TextSelector?: IPropsTextItems[];
    GruposEdicao?: IGrupos;
    GruposLeitura?: IGrupos;
    GruposEdicaoId?: number;
    GruposLeituraId?: number;
    AnaliseCritica: string;
}
export interface IConteudoItemsEdit {
    Modified: string;
    Modulo: IModuloItemsFormated;
    Ciclo: ICicloItemsFormated;
    Complexo: IComplexoItems[];
    Fase: IFaseItems[];
    Corredor: ICorredorItems;
    Title: string;
    Id: number;
    TiposConteudo: ITiposConteudoFormated;
    URLConteudo: URLConteudo;
    TextSelector?: IPropsTextItems[];
    GruposEdicao?: IGrupos;
    GruposLeitura?: IGrupos;
    GruposEdicaoId?: number;
    GruposLeituraId?: number;
    AnaliseCritica: string;
}
export interface IPropsTextItems {
    Modulo: string;
    Ciclo: string;
    Complexo: string;
    Fase: string;
    Corredor: string;
}
//# sourceMappingURL=IConteudoItems.d.ts.map