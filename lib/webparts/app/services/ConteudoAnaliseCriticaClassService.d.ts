import '@pnp/sp/files';
import { IFilter } from '../interfaces/IFilter';
import { IConteudoAnaliseCritica } from '../interfaces/IConteudoAnaliseCritica';
export declare class ConteudoAnaliseCriticaClassService {
    private _list;
    private _urlAbsolut;
    private _dispatch;
    constructor();
    getConteudoAnaliseCriticalAll: (filters?: IFilter) => Promise<IConteudoAnaliseCritica[]>;
    addConteudoAnaliseCritica: (moduloInput: any) => Promise<any>;
    editConteudoAnaliseCritica: (id: number, moduloInput: any) => Promise<void>;
    deleteConteudoAnaliseCritica: (id: number) => Promise<void>;
    getAnaliseCritica: () => void;
}
//# sourceMappingURL=ConteudoAnaliseCriticaClassService.d.ts.map