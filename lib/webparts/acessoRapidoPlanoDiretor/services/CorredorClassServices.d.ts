import { ICorredorItems } from '../interfaces/ICorredorItems';
export declare class CorredorClassService {
    private _list;
    private _dispatch;
    constructor();
    getItemsAllCorredor: () => Promise<ICorredorItems[]>;
    getItemsWithLimit: (top?: number) => Promise<ICorredorItems[]>;
    addCorredor: (CorredorInput: ICorredorItems) => Promise<ICorredorItems>;
    editCorredor: (id: number, CorredorInput: ICorredorItems) => Promise<void>;
    deleteCorredor: (id: number) => Promise<void>;
    getAllCorredor: () => void;
    createCorredor: (CorredorInput: ICorredorItems) => void;
}
//# sourceMappingURL=CorredorClassServices.d.ts.map