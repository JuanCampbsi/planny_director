import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import {
  clearFilterComplexosArray,
  clearFilterFaseArray,
  setListFilterCiclo,
  setListFilterComplexo,
  setListFilterCorredor,
  setListFilterFase,
  setListFilterModulo,
  setListFilterTiposConteudo,
  itemsFilterOpenToogle,
  itemOpenToogleMultiSelectComplexo,
  itemOpenToogleMultiSelectFase,
  itemOpenToogleClosed,
} from '../../../../dataflow/reducers/StateList';
import { setSelectedCorredor } from '../../../../dataflow/reducers/EventMapa';

import * as S from './styles';

interface IProps {
  form?: boolean;
  title: string;
  width?: string;
  height?: string;
  maxHeightOptions?: string;
  bottomOptions?: string;
  topOptions?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  isTogleSelect?: boolean;
  isDisableFilter?: boolean;
  disabled?: boolean;
  isFilterSelect?: boolean;
  disabledCiclo?: boolean;
  children?: React.ReactNode;
  type: 'corredor' | 'fase' | 'complexo' | 'ciclo' | 'modulo' | 'tiposConteudo';
  isTipoConteudo?: boolean;
  multi?: boolean;
  setState?: React.SetStateAction<any>;
  isMap?: boolean;
}

const Select = ({
  form,
  title,
  width,
  height,
  maxHeightOptions,
  bottomOptions,
  topOptions,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  isTogleSelect,
  isDisableFilter,
  disabled,
  isFilterSelect,
  children,
  type,
  multi,
  setState,
  disabledCiclo,
  isMap,
  ...rest
}: IProps) => {
  const [toogleSelect, setToogleSelect] = React.useState(false);
  const [value, setValue] = useState('');
  const complexoSelected = useAppSelector((state) => state.state.filters.complexo?.Id);
  const selectedCorredor = useAppSelector((state) => state.state.filters?.corredor?.Id);
  const openToogle = useAppSelector((state) => state.state.filters.openToogle);
  const ciclos = useAppSelector((state) => state.state.listCiclo);
  const modulos = useAppSelector((state) => state.state.listModulo);
  const corredores = useAppSelector((state) => state.state.listCorredor);
  const complexos = useAppSelector((state) => state.state.listComplexo);
  const fases = useAppSelector((state) => state.state.listFase);
  const dispatch = useDispatch();
  const filters = useAppSelector((state) => state.state.filters);
  const tiposConteudo = useAppSelector((state) => state.state.listTiposConteudos);
  // const tiposConteudo = tiposConteudoAll.filter(i => filters.modulo?.TiposConteudo.map(i => i.Title).includes(i.Title) )

  const typesDisabled = () => {
    const response = {
      corredor: false || isDisableFilter,
      complexo: selectedCorredor === undefined || selectedCorredor === null || isDisableFilter,
      fase: complexoSelected === undefined || complexoSelected === null || isDisableFilter,
      ciclo: false || isDisableFilter,
      tiposConteudo: false,
      modulo: false || isDisableFilter
    };

    return response[type];
  };

  const onClicks = (item: any) => {
    const resolveMap = isMap ? dispatch(setSelectedCorredor(item["Id"])) : null
    const response = {
      corredor: () =>
        dispatch(setListFilterCorredor(item)) &&
        dispatch(setListFilterComplexo(null)) &&
        dispatch(setListFilterFase(null)) &&
        dispatch(clearFilterComplexosArray()) &&
        dispatch(clearFilterFaseArray()) &&
        resolveMap,
      complexo: () => dispatch(setListFilterComplexo(item)) && dispatch(setListFilterFase(null)),
      fase: () => dispatch(setListFilterFase(item)),
      ciclo: () =>
        dispatch(setListFilterCiclo(item)) &&
        dispatch(setListFilterCorredor(null)) &&
        dispatch(setListFilterComplexo(null)) &&
        dispatch(setListFilterFase(null)),
      modulo: () => dispatch(setListFilterModulo(item)) &&
                    dispatch(setListFilterTiposConteudo(null)),
      tiposConteudo: () => dispatch(setListFilterTiposConteudo(item)),
    };
    return response[type]();
  };

  const lists = () => {
    const arrays = {
      corredor: corredores,
      complexo: complexos?.filter((item) => item?.Corredor?.Id == selectedCorredor),
      fase: fases.filter((item) => {
        return item.Complexo?.Id == complexoSelected;
      }),
      ciclo: ciclos,
      modulo: modulos,
      tiposConteudo: tiposConteudo.filter((i) => filters.modulo?.TiposConteudo.map((i) => i?.Title).includes(i?.Title)),
    };
    return arrays[type];
  };

  const handleClickToogle = () => {
    dispatch(itemOpenToogleClosed(true))
    if (!typesDisabled() && !disabledCiclo) {
      setToogleSelect((state) => !state);
      dispatch(itemsFilterOpenToogle(!openToogle))
    }
  };

  const handleClickOption = (item: any) => {
    setToogleSelect(false);
    setValue(item.Nome);
    onClicks(item);
  };

  useEffect(() => {
    setToogleSelect(false);
    setValue('');
  }, [value]);

  return (
    <>
      <S.Container
        width={width}
        height={height}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={paddingRight}
        paddingLeft={paddingLeft}
        disabled={typesDisabled()}
        isToogle={openToogle}
        onClick={() => handleClickToogle()}
      >
        <S.WrapperOptionValue>
          <S.Value isYellow={filters[type] && !!filters[type].Nome} disabled={disabled} isFilterSelect={isFilterSelect}>
            {filters[type] && filters[type].Nome
              ? !!form && type === 'ciclo'
                ? filters.cicloCurrent?.Title
                : type === ('ciclo' || type === 'tiposConteudo')
                  ? filters[type]?.Title
                  : filters[type]?.Nome
              : title}
          </S.Value>
        </S.WrapperOptionValue>

        {!disabledCiclo && <S.SetaInput isToogle={toogleSelect} stroke={'var(--cinza-escuro)'} />}
        {toogleSelect && (
          <S.OptionsBox width={width} maxHeightOptions={maxHeightOptions} bottomOptions={bottomOptions} topOptions={topOptions}>
            {lists()?.map((item, index, number) => (
              <S.Option key={item.Id} onClick={() => handleClickOption(item)} isAfeter={(index !== number.length - 1) ? false : true}>
                <S.OptionValue>{type === 'ciclo' ? item?.Title : type === 'modulo' && !form ? `[${item?.OrdemImpressao}] - ` + item?.Nome : item?.Nome}</S.OptionValue>
              </S.Option>
            ))}
          </S.OptionsBox>
        )}
        {children}
      </S.Container>
    </>
  );
};

export default Select;
