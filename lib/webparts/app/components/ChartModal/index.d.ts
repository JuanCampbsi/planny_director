import * as React from 'react';
interface Props {
    titleMenssage?: string;
    SubTitleMenssage?: string;
    sucess?: boolean;
    error?: boolean;
    isOpen?: boolean;
    children?: React.ReactNode;
    closeModal: any;
    submitFunction: any;
    data: any[];
    setFile: any;
    setIsErroMenssage: any;
    setIsSucessMenssage: any;
    setIsSpinnerModalEditOpen: any;
    setIsSpinnerModalEdit: any;
}
declare const ChartModal: ({ isOpen, sucess, error, closeModal, titleMenssage, SubTitleMenssage, submitFunction, data, setFile, setIsSucessMenssage, setIsErroMenssage, setIsSpinnerModalEditOpen, setIsSpinnerModalEdit, children, ...rest }: Props) => JSX.Element;
export default ChartModal;
//# sourceMappingURL=index.d.ts.map