import * as React from 'react';
import { IAppProps } from '../../interfaces/IAppProps';
import LateralMenu from '../Modulo/LateralMenu';
import ViewCriticalAnalysis from './components/ViewCriticalAnalysis';
import * as S from './styles';

const CriticalAnalysis = (props: IAppProps) => {
  return (
    <>
      <S.Container>
        <LateralMenu {...props} />
        <ViewCriticalAnalysis />
      </S.Container>
    </>
  );
};

export default CriticalAnalysis;
