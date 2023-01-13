import { IComplexoItems } from '../interfaces/IComplexoItems';
export declare class ComplexoClassService {
    private _list;
    private _dispatch;
    constructor();
    getItemsAllComplexo: () => Promise<IComplexoItems[]>;
    getItemsWithLimit: (top?: number) => Promise<IComplexoItems[]>;
    addComplexo: (ComplexoInput: IComplexoItems) => Promise<IComplexoItems>;
    editComplexo: (id: number, ComplexoInput: IComplexoItems) => Promise<void>;
    deleteComplexo: (id: number) => Promise<void>;
    getAllComplexos: () => void;
    createComplexos: (ComplexoInput: IComplexoItems) => void;
}
//# sourceMappingURL=ComplexoClassService.d.ts.map