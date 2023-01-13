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
import { itemsAddCiclo, setCicloCurrent, setListFilterCiclo } from '../../../dataflow/reducers/StateList';
import { mapGetItemsCiclo } from '../repositories/Ciclo';
export class CicloClassService {
    constructor() {
        this.getItemsAllCiclo = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Title', 'Nome', 'IsCurrentCiclo', 'Created', 'Modified')
                .orderBy('Title', true)
                .orderBy('IsCurrentCiclo', true)
                .get();
            return mapGetItemsCiclo(result);
        });
        this.getAllCiclos = () => {
            this.getItemsAllCiclo()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddCiclo(item));
                    if (item.IsCurrentCiclo) {
                        this._dispatch(setListFilterCiclo(item));
                        this._dispatch(setCicloCurrent(item));
                    }
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = '1-Ciclo';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=CicloClassService.js.map