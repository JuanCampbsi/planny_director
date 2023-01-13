import { IInformativosCentral } from '../interfaces/IInformativosCarrosel';
export declare class InformativosClassService {
    private _dispatch;
    private _list;
    private _list_Label;
    private _list_Central;
    constructor();
    getItemsAllInfo: () => Promise<import("../interfaces/IInformativosCarrosel").IInformativosCarroselFormated[]>;
    getItemsAllInfoLabel: () => Promise<import("../interfaces/IInformativosCarrosel").IInformativosCarroselFormated[]>;
    getItemsAllInfoCentral: () => Promise<IInformativosCentral[]>;
    getAllInfo: () => void;
    getAllInfoLabel: () => void;
    getAllInfoCentral: () => void;
}
//# sourceMappingURL=InformativosClassService.d.ts.map