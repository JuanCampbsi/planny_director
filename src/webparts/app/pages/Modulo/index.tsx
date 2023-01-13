import * as React from 'react';
import { useAppSelector } from '../../../../dataflow/hooks';
import { IAppProps } from '../../interfaces/IAppProps';
import FilterMenu from './FilterMenu';
import LateralMenu from './LateralMenu';
import * as S from './styles';

export const Modulo = (props: IAppProps) => {
  const filters = useAppSelector((state) => state.state.filters);

  return (
    <S.Wrapper isActive={filters.isOpenOrDisable}>
      <LateralMenu {...props} />
      <FilterMenu />
    </S.Wrapper>
  );
};

export default Modulo;
