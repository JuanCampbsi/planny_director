import * as React from 'react';
interface IProps {
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
    isClear?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    type: 'fase' | 'complexo';
}
declare const MultiSelect: ({ title, width, height, maxHeightOptions, bottomOptions, topOptions, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingRight, paddingLeft, isTogleSelect, isClear, disabled, children, type, ...rest }: IProps) => JSX.Element;
export default MultiSelect;
//# sourceMappingURL=index.d.ts.map