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
import { itemsAddCorredor } from '../../../dataflow/reducers/StateList';
import { mapGetItemsCorredor } from '../repositories/Corredor';
export class CorredorClassService {
    constructor() {
        this.getItemsAllCorredor = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Nome', 'Estados', 'Created', 'Modified')
                .orderBy('Id', true)
                .get();
            return mapGetItemsCorredor(result);
        });
        this.getItemsWithLimit = (top = 100) => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Nome', 'Estados', 'Created', 'Modified')
                .orderBy('Id', true)
                .get();
            return mapGetItemsCorredor(result);
        });
        this.addCorredor = (CorredorInput) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield sp.web.lists.getByTitle(this._list).items.add(CorredorInput);
            return data;
        });
        this.editCorredor = (id, CorredorInput) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).update(CorredorInput);
        });
        this.deleteCorredor = (id) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).delete();
        });
        this.getAllCorredor = () => {
            this.getItemsAllCorredor()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddCorredor(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.createCorredor = (CorredorInput) => {
            this.addCorredor(CorredorInput)
                .then((response) => {
                const Corredor = {
                    Id: response.Id,
                    Nome: response.Nome,
                    Created: response.Created,
                    Modified: response.Modified,
                };
                this._dispatch(itemsAddCorredor(Corredor));
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = '2-Corredor';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=CorredorClassServices.js.map