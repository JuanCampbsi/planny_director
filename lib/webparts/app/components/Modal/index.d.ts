import * as React from 'react';
interface Props {
    titleMenssage?: string;
    SubTitleMenssage?: string;
    sucess?: boolean;
    error?: boolean;
    isOpen?: boolean;
    isOpenEditForm?: boolean;
    isOpenEditFormSpinner?: boolean;
    children?: React.ReactNode;
}
declare const Modal: ({ isOpen, sucess, error, titleMenssage, SubTitleMenssage, isOpenEditForm, isOpenEditFormSpinner, children, ...rest }: Props) => JSX.Element;
export default Modal;
//# sourceMappingURL=index.d.ts.map