import * as React from 'react';
import { IAppProps } from '../../interfaces/IAppProps';
import { useAppDispatch } from '../../../../dataflow/hooks';
import * as S from './styles';
import ModulesBox from './components/ModulesBox';
import { setListFilterComplexo, setListFilterCorredor, setListFilterFase, setListFilterModulo } from '../../../../dataflow/reducers/StateList';
import { setSelectedCorredor } from '../../../../dataflow/reducers/EventMapa';

const Home = (props: IAppProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const reload = () => {
    dispatch(setListFilterComplexo(null));
    dispatch(setListFilterFase(null));
    dispatch(setListFilterCorredor(null));
    dispatch(setSelectedCorredor(null));
    dispatch(setListFilterModulo);
  };

  React.useEffect(() => {
    reload();
  }, []);

  return (
    <>
      <S.Container>
        <ModulesBox />
      </S.Container>
    </>
  );
};

export default Home;
