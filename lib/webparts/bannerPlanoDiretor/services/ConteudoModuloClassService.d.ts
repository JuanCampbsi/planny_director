import '@pnp/sp/files';
import '@pnp/sp/folders';
import { IFilter } from '../interfaces/IFilter';
import { IConteudoItems } from '../interfaces/IConteudoItems';
export declare class ConteudoModuloClassService {
    private _list;
    private _urlAbsolut;
    private _dispatch;
    constructor();
    getConteudoByFilter: (filters: IFilter) => Promise<IConteudoItems[]>;
    addFileToFolder: (file: any, filters: IFilter, id?: number) => Promise<import("@pnp/sp/files").IFileAddResult>;
    addConteudoModulo: (item: any) => Promise<import("@pnp/sp/items/types").IItemAddResult>;
    editConteudoModulo: (id: number, moduloInput: IConteudoItems) => Promise<void>;
    editConteudoModuloAddPdf: (id: number, moduloInput: any) => Promise<void>;
    deleteConteudoModulo: (id: number) => Promise<void>;
}
//# sourceMappingURL=ConteudoModuloClassService.d.ts.map