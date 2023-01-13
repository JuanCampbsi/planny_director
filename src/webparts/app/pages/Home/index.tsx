import * as React from 'react';
import { IAppProps } from '../../interfaces/IAppProps';
import { useAppDispatch } from '../../../../dataflow/hooks';
import * as S from './styles';
import Informative from './components/Informative';
import ModulesBox from './components/ModulesBox';
import Mapa from './components/Mapa';
import Description from './components/Description';
import {
  clearGroupsTeamEdicao,
  clearGroupsTeamLeitura,
  setListFilterComplexo,
  setListFilterCorredor,
  setListFilterFase,
  setListFilterModulo,
} from '../../../../dataflow/reducers/StateList';
import { setSelectedCorredor } from '../../../../dataflow/reducers/EventMapa';

const Home = (props: IAppProps): JSX.Element => {
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

  return (
    <>
      <S.Container>
        <Informative />
        <Mapa {...props} />
        <Description />
        <ModulesBox />
        <S.FooterBottom />
      </S.Container>
    </>
  );
};

export default Home;
