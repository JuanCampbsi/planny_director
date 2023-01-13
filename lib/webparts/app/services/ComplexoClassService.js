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
import { itemsAddComplexo } from '../../../dataflow/reducers/StateList';
import { mapGetItemsComplexo } from '../repositories/Complexo';
export class ComplexoClassService {
    constructor() {
        this.getItemsAllComplexo = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Nome', 'Created', 'Modified', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor', 'Fase/Id')
                .expand('Corredor', 'Fase')
                .orderBy('Id', true)
                .get();
            return mapGetItemsComplexo(result);
        });
        this.getItemsWithLimit = (top = 100) => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Nome', 'Created', 'Modified', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor', 'Fase/Id')
                .expand('Corredor', 'Fase')
                .orderBy('Id', true)
                .get();
            return mapGetItemsComplexo(result);
        });
        this.addComplexo = (ComplexoInput) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield sp.web.lists.getByTitle(this._list).items.add(ComplexoInput);
            return data;
        });
        this.editComplexo = (id, ComplexoInput) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).update(ComplexoInput);
        });
        this.deleteComplexo = (id) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).delete();
        });
        this.getAllComplexos = () => {
            this.getItemsAllComplexo()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddComplexo(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.createComplexos = (ComplexoInput) => {
            this.addComplexo(ComplexoInput)
                .then((response) => {
                const Complexo = {
                    Id: response.Id,
                    Nome: response.Nome,
                    Created: response.Created,
                    Modified: response.Modified,
                    Corredor: response.Corredor,
                    Fase: response.Fase,
                };
                this._dispatch(itemsAddComplexo(Complexo));
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = '3-Complexo';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=ComplexoClassService.js.map