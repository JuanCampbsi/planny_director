var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sp } from '@pnp/sp/presets/all';
import { useAppDispatch } from '../../../dataflow/hooks';
import { itemsAddInformativos, itemsAddInformativosLabel, setItemsAddInformativosCentral } from '../../../dataflow/reducers/StateList';
import { mappedInformativosCarrosel } from '../repositories/InformativosCarrosel';
import { mappedInformativosCentral } from '../repositories/InformativosCentral';
import { mappedInformativosLabel } from '../repositories/InformativosLabel';
export class InformativosClassService {
    constructor() {
        this.getItemsAllInfo = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Title', 'SubTitulo', 'UrlLink', 'Modified', 'Background')
                .orderBy('Created', true)
                .get();
            return mappedInformativosCarrosel(result);
        });
        this.getItemsAllInfoLabel = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list_Label)
                .items.select('Id', 'Title', 'SubTitulo', 'UrlLink', 'Modified', 'MiniaturaInfo', 'FixarItem', 'Created', 'Modified')
                .orderBy('Modified', false)
                .get();
            return mappedInformativosLabel(result);
        });
        this.getItemsAllInfoCentral = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list_Central)
                .items.select('Id', 'Title', 'Conteudo', 'Background', 'Modified')
                .orderBy('Modified', false)
                .get();
            return mappedInformativosCentral(result);
        });
        this.getAllInfo = () => {
            this.getItemsAllInfo()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddInformativos(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.getAllInfoLabel = () => {
            this.getItemsAllInfoLabel()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddInformativosLabel(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.getAllInfoCentral = () => {
            this.getItemsAllInfoCentral()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(setItemsAddInformativosCentral(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = 'InformativosCarrosel';
        this._list_Label = 'InformativosLabel';
        this._list_Central = 'InformativosCentral';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=InformativosClassService.js.map