import * as React from 'react';
import { useAppDispatch } from '../../../../dataflow/hooks';
import * as S from './styles';
import Informative from './components/Informative';
import ModulesBox from './components/ModulesBox';
import Mapa from './components/Mapa';
import Description from './components/Description';
import { clearGroupsTeamEdicao, clearGroupsTeamLeitura, setListFilterComplexo, setListFilterCorredor, setListFilterFase, setListFilterModulo, } from '../../../../dataflow/reducers/StateList';
import { setSelectedCorredor } from '../../../../dataflow/reducers/EventMapa';
const Home = (props) => {
    const dispatch = useAppDispatch();
    const reload = () => {
        dispatch(setListFilterComplexo(null));
        dispatch(setListFilterFase(null));
        dispatch(setListFilterCorredor(null));
        dispatch(setSelectedCorredor(null));
        dispatch(setListFilterModulo);
        dispatch(clearGroupsTeamEdicao());
        dispatch(clearGroupsTeamLeitura());
    };
    React.useEffect(() => {
        reload();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(Informative, null),
            React.createElement(Mapa, Object.assign({}, props)),
            React.createElement(Description, null),
            React.createElement(ModulesBox, null),
            React.createElement(S.FooterBottom, null))));
};
export default Home;
//# sourceMappingURL=index.js.map