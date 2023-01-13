/// <reference types="react" />
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '@pnp/sp/files';
import '@pnp/sp/folders';
import { IAppProps } from '../../../../interfaces/IAppProps';
import { IConteudoItems } from '../../../../interfaces/IConteudoItems';
interface IProps {
    props?: IAppProps;
    isEditValue?: boolean;
    itemsConteudoEdit?: IConteudoItems;
}
declare const Form: ({ props, isEditValue, itemsConteudoEdit }: IProps) => JSX.Element;
export default Form;
//# sourceMappingURL=index.d.ts.map