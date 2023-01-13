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
import { itemsAddFase } from '../../../dataflow/reducers/StateList';
import { mapGetItemsFase } from '../repositories/Fase';
export class FaseClassService {
    constructor() {
        this.getItemsAllFase = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Nome', 'Created', 'Modified', 'Complexo/Nome', 'Complexo', 'Complexo/Id')
                .expand('Complexo')
                .orderBy('Id', true)
                .get();
            return mapGetItemsFase(result);
        });
        this.getItemsWithLimit = (top = 100) => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Nome', 'Created', 'Modified', 'Complexo/Nome', 'Complexo')
                .expand('Complexo')
                .orderBy('Id', true)
                .get();
            return mapGetItemsFase(result);
        });
        this.addFase = (FaseInput) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield sp.web.lists.getByTitle(this._list).items.add(FaseInput);
            return data;
        });
        this.editFase = (id, FaseInput) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).update(FaseInput);
        });
        this.deleteFase = (id) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).delete();
        });
        this.getAllFase = () => {
            this.getItemsAllFase()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddFase(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.createFase = (FaseInput) => {
            this.addFase(FaseInput)
                .then((response) => {
                const Fase = {
                    Id: response.Id,
                    Nome: response.Nome,
                    Created: response.Created,
                    Modified: response.Modified,
                    Complexo: response.Complexo,
                };
                this._dispatch(itemsAddFase(Fase));
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = '4-Fase';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=FaseClassServices.js.map