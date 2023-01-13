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
import { itemsAddModulo } from '../../../dataflow/reducers/StateList';
import { mapGetItemsModulo } from '../repositories/Modulo';
export class ModuloClassService {
    constructor() {
        this.getItemsAllModulo = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Author/Title', 'Nome', 'Created', 'Modified', 'Icone', 'ConteudoTema', 'TipoModulo')
                .expand('Author')
                .orderBy('Created', true)
                .get();
            return mapGetItemsModulo(result);
        });
        this.getItemsWithLimit = (top = 100) => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Author/Title', 'Nome', 'Created', 'Modified', 'Icone', 'Corredor/Created', 'Corredor/Modified', 'Corredor/Id', 'Corredor/Nome', 'CorredorId', 'ConteudoTema', 'TipoModulo')
                .expand('Author', 'Corredor')
                .orderBy('Created', true)
                .get();
            return mapGetItemsModulo(result);
        });
        // Rota utilizada para criar novo modulo
        this.addModulo = (moduloInput) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield sp.web.lists.getByTitle(this._list).items.add(moduloInput);
            return data;
        });
        // Rota utilizada para atualizar um modulo
        this.editModulo = (id, moduloInput) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).update(moduloInput);
        });
        // Rota utilizada para deletar um modulo
        this.deleteModulo = (id) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).delete();
        });
        this.getAllModulos = () => {
            this.getItemsAllModulo()
                .then((result) => {
                result.map((item) => {
                    this._dispatch(itemsAddModulo(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this.createModulos = (moduloInput) => {
            this.addModulo(moduloInput)
                .then((response) => {
                console.log('response', response);
                const modulo = {
                    Id: response.Id,
                    Nome: response.Nome,
                    Created: response.Created,
                    Modified: response.Modified,
                    Author: response.Author,
                    Icone: response.Icone,
                    ConteudoTema: response.ConteudoTema,
                    TipoModulo: response.TipoModulo,
                };
                this._dispatch(itemsAddModulo(modulo));
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = '5-Modulo';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=ModuloClassServices.js.map