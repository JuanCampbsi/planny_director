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
import '@pnp/sp/files';
import { useAppDispatch } from '../../../dataflow/hooks';
import { mapGetItemsConteudoAnaliseCritica } from '../repositories/ConteudoAnaliseCritica';
import { setIsConteudoAnaliseCritica } from '../../../dataflow/reducers/StateList';
export class ConteudoAnaliseCriticaClassService {
    constructor() {
        this.getConteudoAnaliseCriticalAll = (filters) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const modulo = ((_a = filters === null || filters === void 0 ? void 0 : filters.modulo) === null || _a === void 0 ? void 0 : _a.Id) || (filters === null || filters === void 0 ? void 0 : filters.modulo) !== null ? `and Modulo eq '${filters === null || filters === void 0 ? void 0 : filters.modulo.Id}'` : '';
            const ciclo = ((_b = filters === null || filters === void 0 ? void 0 : filters.ciclo) === null || _b === void 0 ? void 0 : _b.Id) ? ` Ciclo eq '${(_c = filters === null || filters === void 0 ? void 0 : filters.ciclo) === null || _c === void 0 ? void 0 : _c.Id}'` : '';
            const corredor = ((_d = filters === null || filters === void 0 ? void 0 : filters.corredor) === null || _d === void 0 ? void 0 : _d.Id) ? ` and Corredor eq '${(_e = filters === null || filters === void 0 ? void 0 : filters.corredor) === null || _e === void 0 ? void 0 : _e.Id}'` : '';
            const complexo = ((_f = filters === null || filters === void 0 ? void 0 : filters.complexo) === null || _f === void 0 ? void 0 : _f.Id) ? ` and Complexo eq '${(_g = filters === null || filters === void 0 ? void 0 : filters.complexo) === null || _g === void 0 ? void 0 : _g.Id}'` : '';
            const fase = ((_h = filters === null || filters === void 0 ? void 0 : filters.fase) === null || _h === void 0 ? void 0 : _h.Id) ? ` and Fase eq '${(_j = filters === null || filters === void 0 ? void 0 : filters.fase) === null || _j === void 0 ? void 0 : _j.Id}'` : '';
            const filterQuery = ciclo + modulo + corredor + complexo + fase;
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Title', 'Conteudo', '*,Modulo/Nome,Modulo/Id', '*,Corredor/Id,Corredor/Nome', '*,Complexo/Id,Complexo/Nome,Corredor', '*,Fase/Id,Fase/Nome', '*,Ciclo/Id,Ciclo/Nome,Ciclo/Title')
                .expand('Ciclo', 'Modulo', 'Corredor', 'Complexo', 'Fase')
                .filter(filterQuery)
                .get();
            return mapGetItemsConteudoAnaliseCritica(result);
        });
        this.addConteudoAnaliseCritica = (moduloInput) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield sp.web.lists.getByTitle(this._list).items.add(moduloInput);
            return data;
        });
        this.editConteudoAnaliseCritica = (id, moduloInput) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).update(moduloInput);
        });
        this.deleteConteudoAnaliseCritica = (id) => __awaiter(this, void 0, void 0, function* () {
            yield sp.web.lists.getByTitle(this._list).items.getById(id).delete();
        });
        this.getAnaliseCritica = () => {
            this.getConteudoAnaliseCriticalAll()
                .then((result) => {
                console.log(result);
                this._dispatch(setIsConteudoAnaliseCritica(result));
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = '7-ConteudoAnaliseCritica';
        this._dispatch = useAppDispatch();
        this._urlAbsolut = 'https://globalvale.sharepoint.com';
    }
}
//# sourceMappingURL=ConteudoAnaliseCriticaClassService.js.map