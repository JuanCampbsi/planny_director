import * as React from 'react';
import LateralMenu from '../Modulo/LateralMenu';
import ViewResponsibleTeam from './components/ViewResponsibleTeam';
import * as S from './styles';
const ResponsibleTeam = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, { heigthOpen: '60rem' },
            React.createElement(LateralMenu, Object.assign({}, props)),
            React.createElement(ViewResponsibleTeam, null))));
};
export default ResponsibleTeam;
//# sourceMappingURL=index.js.map