import * as React from 'react';
import LateralMenu from '../Modulo/LateralMenu';
import ViewCriticalAnalysis from './components/ViewCriticalAnalysis';
import * as S from './styles';
const CriticalAnalysis = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(LateralMenu, Object.assign({}, props)),
            React.createElement(ViewCriticalAnalysis, null))));
};
export default CriticalAnalysis;
//# sourceMappingURL=index.js.map