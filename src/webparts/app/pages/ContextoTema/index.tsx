import * as React from 'react';
import { useAppSelector } from '../../../../dataflow/hooks';
import { IAppProps } from '../../interfaces/IAppProps';
import LateralMenu from '../Modulo/LateralMenu';
import ViewContexto from './components/ViewContexto';
import * as S from './styles';

export const ContextoTema = (props: IAppProps) => {

  return (
    <S.Container>
      <LateralMenu {...props} />
      <ViewContexto />
    </S.Container>
  );
};

export default ContextoTema;
