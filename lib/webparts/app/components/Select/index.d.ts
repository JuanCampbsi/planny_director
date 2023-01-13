import * as React from 'react';
interface IProps {
    form?: boolean;
    title: string;
    width?: string;
    height?: string;
    maxHeightOptions?: string;
    bottomOptions?: string;
    topOptions?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;
    isTogleSelect?: boolean;
    isDisableFilter?: boolean;
    disabled?: boolean;
    isFilterSelect?: boolean;
    disabledCiclo?: boolean;
    children?: React.ReactNode;
    type: 'corredor' | 'fase' | 'complexo' | 'ciclo' | 'modulo' | 'tiposConteudo';
    isTipoConteudo?: boolean;
    multi?: boolean;
    setState?: React.SetStateAction<any>;
    isMap?: boolean;
}
declare const Select: ({ form, title, width, height, maxHeightOptions, bottomOptions, topOptions, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingRight, paddingLeft, isTogleSelect, isDisableFilter, disabled, isFilterSelect, children, type, multi, setState, disabledCiclo, isMap, ...rest }: IProps) => JSX.Element;
export default Select;
//# sourceMappingURL=index.d.ts.map