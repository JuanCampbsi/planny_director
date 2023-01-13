import { ICicloItemsFormated } from './ICicloItems';
import { IComplexoItems } from './IComplexoItems';
import { ICorredorItems } from './ICorredorItems';
import { IFaseItems } from './IFaseItems';
import { IModuloItemsFormated } from './IModuloItems';
export interface IConteudoAnaliseCritica {
    Modulo: IModuloItemsFormated;
    Ciclo: ICicloItemsFormated;
    Complexo: IComplexoItems[];
    Fase: IFaseItems[];
    Corredor: ICorredorItems[];
    Title: string;
    Id: number;
    Created?: string;
    Modified?: string;
    Conteudo?: string;
}
//# sourceMappingURL=IConteudoAnaliseCritica.d.ts.map