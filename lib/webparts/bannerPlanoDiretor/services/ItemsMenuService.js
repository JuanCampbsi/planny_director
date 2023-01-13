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
import { setListMenuItems } from '../../../dataflow/reducers/StateList';
import { mapGetItemsMenu } from '../repositories/Menu';
export class ItemsMenuService {
    constructor() {
        this.getItemsAllMenu = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield sp.web.lists
                .getByTitle(this._list)
                .items.select('Id', 'Title', 'UrlMenu', 'Created', 'Modified')
                .orderBy('Id', true)
                .get();
            return mapGetItemsMenu(result);
        });
        this.getAllMenu = () => {
            this.getItemsAllMenu()
                .then((result) => {
                console.log({ result });
                result.map((item) => {
                    this._dispatch(setListMenuItems(item));
                });
            })
                .catch((error) => {
                console.log(error);
            });
        };
        this._list = 'ItemsMenu';
        this._dispatch = useAppDispatch();
    }
}
//# sourceMappingURL=ItemsMenuService.js.map