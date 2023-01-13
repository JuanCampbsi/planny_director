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
import { setTiposConteudo, } from '../../../dataflow/reducers/StateList';
import { mapGetItemsTipoConteudo } from '../repositories/TiposConteudo';
export class TiposConteudoClassService {
    constructor() {
        this.getItemsAllTipos = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists.getByTitle(this._list).items.select('Id', 'Title').orderBy('Title', true).get();
            return mapGetItemsTipoConteudo(result);
        });
        this.getAllTipos = () => {
            this.getItemsAllTipos()
                .then((result) => {
                result.map((item) => {
                    //this._dispatch(itemsAddCiclo(item));
                    // this._dispatch(setListFilterTiposConteudo(item));
                    this._dispatch(setTiposConteudo(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = 'TiposConteudo';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=TiposConteudoClassService.js.map