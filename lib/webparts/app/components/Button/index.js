var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import * as S from './styles';
const Button = (_a) => {
    var { funcAction, widthButton, heightButton, marginTopButton, marginBottomButton, marginLeftButton, marginRightButton, paddingTopButton, paddingBottomButton, paddingRightButton, paddingLeftButton, titleColorButton, backgroundButton, hoverButton, disabled, children } = _a, rest = __rest(_a, ["funcAction", "widthButton", "heightButton", "marginTopButton", "marginBottomButton", "marginLeftButton", "marginRightButton", "paddingTopButton", "paddingBottomButton", "paddingRightButton", "paddingLeftButton", "titleColorButton", "backgroundButton", "hoverButton", "disabled", "children"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, { type: "button", onClick: funcAction, widthButton: widthButton, heightButton: heightButton, marginTopButton: marginTopButton, marginBottomButton: marginBottomButton, marginLeftButton: marginLeftButton, marginRightButton: marginRightButton, paddingTopButton: paddingTopButton, paddingBottomButton: paddingBottomButton, paddingRightButton: paddingRightButton, paddingLeftButton: paddingLeftButton, backgroundButton: backgroundButton, titleColorButton: titleColorButton, hoverButton: hoverButton, disabled: disabled },
            children,
            React.createElement(S.Title, null))));
};
export default Button;
//# sourceMappingURL=index.js.map