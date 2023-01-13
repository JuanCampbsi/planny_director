import * as React from 'react';
import LateralMenu from '../Modulo/LateralMenu';
import ViewContexto from './components/ViewContexto';
import * as S from './styles';
export const ContextoTema = (props) => {
    return (React.createElement(S.Container, null,
        React.createElement(LateralMenu, Object.assign({}, props)),
        React.createElement(ViewContexto, null)));
};
export default ContextoTema;
//# sourceMappingURL=index.js.map