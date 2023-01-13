import * as React from 'react';
import { useAppSelector } from '../../../../dataflow/hooks';
import FilterMenu from './FilterMenu';
import LateralMenu from './LateralMenu';
import * as S from './styles';
export const Modulo = (props) => {
    const filters = useAppSelector((state) => state.state.filters);
    return (React.createElement(S.Wrapper, { isActive: filters.isOpenOrDisable },
        React.createElement(LateralMenu, Object.assign({}, props)),
        React.createElement(FilterMenu, null)));
};
export default Modulo;
//# sourceMappingURL=index.js.map