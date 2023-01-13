import * as React from 'react';
interface IProps {
    funcAction?: (value: any) => void;
    widthButton?: string;
    heightButton?: string;
    marginTopButton?: string;
    marginBottomButton?: string;
    marginLeftButton?: string;
    marginRightButton?: string;
    paddingTopButton?: string;
    paddingBottomButton?: string;
    paddingRightButton?: string;
    paddingLeftButton?: string;
    titleColorButton?: string;
    backgroundButton?: string;
    hoverButton?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const Button: ({ funcAction, widthButton, heightButton, marginTopButton, marginBottomButton, marginLeftButton, marginRightButton, paddingTopButton, paddingBottomButton, paddingRightButton, paddingLeftButton, titleColorButton, backgroundButton, hoverButton, disabled, children, ...rest }: IProps) => JSX.Element;
export default Button;
//# sourceMappingURL=index.d.ts.map