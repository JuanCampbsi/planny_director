import { IModuloInput, IModuloItems, IModuloItemsFormated } from '../interfaces/IModuloItems';
export declare class ModuloClassService {
    private _list;
    private _dispatch;
    constructor();
    getItemsAllModulo: () => Promise<IModuloItemsFormated[]>;
    getItemsWithLimit: (top?: number) => Promise<IModuloItemsFormated[]>;
    addModulo: (moduloInput: IModuloInput) => Promise<IModuloItemsFormated>;
    editModulo: (id: number, moduloInput: IModuloItems) => Promise<void>;
    deleteModulo: (id: number) => Promise<void>;
    getAllModulos: () => void;
    createModulos: (moduloInput: IModuloInput) => void;
}
//# sourceMappingURL=ModuloClassServices.d.ts.map