import { IFaseItems } from '../interfaces/IFaseItems';
export declare class FaseClassService {
    private _list;
    private _dispatch;
    constructor();
    getItemsAllFase: () => Promise<IFaseItems[]>;
    getItemsWithLimit: (top?: number) => Promise<IFaseItems[]>;
    addFase: (FaseInput: IFaseItems) => Promise<IFaseItems>;
    editFase: (id: number, FaseInput: IFaseItems) => Promise<void>;
    deleteFase: (id: number) => Promise<void>;
    getAllFase: () => void;
    createFase: (FaseInput: IFaseItems) => void;
}
//# sourceMappingURL=FaseClassServices.d.ts.map