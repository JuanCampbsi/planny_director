import * as React from 'react';
import { IAppProps } from '../../interfaces/IAppProps';
import LateralMenu from '../Modulo/LateralMenu';
import ViewResponsibleTeam from './components/ViewResponsibleTeam';
import * as S from './styles';

const ResponsibleTeam = (props: IAppProps) => {
  return (
    <>
      <S.Container heigthOpen={'60rem'}>
        <LateralMenu {...props} />
        <ViewResponsibleTeam />
      </S.Container>
    </>
  );
};

export default ResponsibleTeam;
