import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import { clearAllComplexosSelected, clearAllFasesSelected, clearFilterComplexosArray, clearFilterFaseArray, itemOpenToogleClosed, itemOpenToogleMultiSelectComplexo, itemOpenToogleMultiSelectFase, setFilterComplexosArray, setFilterFaseArray, setListFilterComplexo, setListFilterFase } from '../../../../dataflow/reducers/StateList';
import * as S from './styles';
import { Checkbox } from '@fluentui/react';

interface IProps {
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
  isClear?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  type: 'fase' | 'complexo';
}
const MultiSelect = ({
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
  isClear,
  disabled,
  children,
  type,
  ...rest
}: IProps) => {
  const [toogleSelect, setToogleSelect] = React.useState(false);
  const [toogleSelectFase, setToogleSelectFase] = React.useState(false);
  const [allComplexosSelected, setAllComplexosSelected] = React.useState(false);
  const [allFasesSelected, setAllFasesSelected] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const complexoSelected = useAppSelector((state) => state.state.filters.complexoArray.map(item => item.Id));
  const complexoSelectedComplete = useAppSelector((state) => state.state.filters.complexoArray);
  const faseSelectedComplete = useAppSelector((state) => state.state.filters.faseArray);
  const selectedCorredor = useAppSelector((state) => state.state.filters?.corredor?.Id);
  const complexos = useAppSelector((state) => state.state.listComplexo);
  const fases = useAppSelector((state) => state.state.listFase);
  const dispatch = useDispatch();
  const filters = useAppSelector((state) => state.state.filters);
  const openToogleClosed = useAppSelector((state) => state.state.filters.openToogleClosed);


  const typesDisabled = () => {
    const response = {
      complexo: selectedCorredor === undefined || selectedCorredor === null,
      fase: complexoSelected.length === 0,
    };
    return response[type];
  };
  const onClicks = (item: any) => {
    const response = {
      complexo: () => dispatch(setListFilterComplexo(item)),
      fase: () => dispatch(setListFilterFase(item)),
    };
    return response[type]();
  };

  const listsComplexo = complexos?.filter((item) => item?.Corredor?.Id == selectedCorredor);
  const listFases = fases.filter((item) => complexoSelected?.includes(item?.Complexo.Id));

  const onClicksComplexo = () => {
    if (!allComplexosSelected) {
      const Ids = filters.complexoArray.map((item) => item.Id);

      for (let complexos of listsComplexo) {
        if (Ids.includes(complexos.Id) === false) {
          dispatch(setFilterComplexosArray(complexos));
        }
      }
      setToogleSelect((state) => !state);
      dispatch(clearAllComplexosSelected(true));
    }
  };

  const onClicksFase = () => {
    if (!allFasesSelected) {
      const Ids = filters.faseArray.map((item) => item.Id);

      for (let fases of listFases) {
        if (Ids.includes(fases.Id) === false) {
          dispatch(setFilterFaseArray(fases));
        }
      }
      setToogleSelectFase((state) => !state);
      dispatch(clearAllFasesSelected(true));
    }
  };

  const handleClickToogle = () => {
    console.log({ toogleSelect })
    console.log({ toogleSelectFase })
    if (!!filters.openToogleClosed) {
      setToogleSelect(false);
      setToogleSelectFase(false);
    }

    dispatch(itemOpenToogleClosed(false))

    if ((type === 'complexo' && filters.corredor)) {
      setToogleSelectFase(false);
      setToogleSelect((state) => !state);
      dispatch(itemOpenToogleMultiSelectComplexo(false))
      dispatch(itemOpenToogleMultiSelectFase(true))
      setIsSelected((state) => !state)
    }
    if ((type === "fase" && filters.complexoArray.length > 0)) {
      setToogleSelect(false);
      setToogleSelectFase((state) => !state);
      dispatch(itemOpenToogleMultiSelectFase(false))
      dispatch(itemOpenToogleMultiSelectComplexo(true))
    }
    if (filters.openToogleMultiSelectComplexo) {
      setToogleSelect(true);
    }
    if (filters.openToogleMultiSelectFase) {
      setToogleSelectFase(true);
    }
  };

  const handleClickOption = (item: any) => {
    onClicks(item);
    if (type === "complexo") {
      const complexoSelectedCompleteCopy = complexoSelectedComplete.filter((value) => Object.keys(value).length !== 0 && value.Id !== item.Id);
      if (!!complexoSelectedCompleteCopy) {
        dispatch(clearFilterComplexosArray())
        dispatch(clearFilterFaseArray())
        complexoSelectedCompleteCopy.forEach(valueNew => {
          dispatch(setFilterComplexosArray(valueNew))
        })
      }
      if (complexoSelectedCompleteCopy.length === 0) {
        setIsSelected((state) => !state)
        setToogleSelectFase(false)
      }

      const ids = filters.complexoArray.map(item => item.Id)
      const canInsert = ids.includes(item.Id)
      if (canInsert === false) {
        dispatch(setFilterComplexosArray(item))
      }

    }
    if (type === "fase") {
      const faseSelectedCompleteCopy = faseSelectedComplete.filter((value) => Object.keys(value).length !== 0 && value.Id !== item.Id);
      if (!!faseSelectedCompleteCopy) {
        dispatch(clearFilterFaseArray())
        faseSelectedCompleteCopy.forEach(valueNew => {
          dispatch(setFilterFaseArray(valueNew))
        })
      }

      const ids = filters.faseArray.map(item => item.Id)
      const canInsert = ids.includes(item.Id)
      if (canInsert === false) {
        dispatch(setFilterFaseArray(item))
      }
    }
  };



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
        isToogle={type === 'complexo' ? toogleSelect : toogleSelectFase}
        isContent={type === 'complexo' ? filters.complexoArray.map(item => ` ${item.Nome}`).toString() : filters.faseArray.map(item => ` ${(item?.Nome + " - " + item?.Complexo?.Nome)}`).toString()}
        isVisibleHover={type === 'complexo' ? filters.complexoArray.length > 0 ? true : false : filters.faseArray.length > 0 ? true : false}
      >
        <S.WrapperOptionValue onClick={() => handleClickToogle()}>
          {type === 'complexo' && filters.complexoArray.map((item, index) => <S.Value isYellow={filters.complexoArray.length > 0} disabled={disabled}>
            {index === 0 ? item?.Nome : '- ' + item?.Nome}
          </S.Value>)
          }

          {type === 'fase' &&
            filters.faseArray.map((item, index) => (
              <S.Value isYellow={filters.faseArray.length > 0} disabled={disabled}>
                {index === 0 ? item?.Nome + `${'/' + item?.Complexo?.Nome}` : '- ' + item?.Nome + `${'/' + item?.Complexo?.Nome}`}
              </S.Value>
            ))}

          {type === 'complexo' && filters.complexoArray.length === 0 && <S.Value disabled={disabled}>{title}</S.Value>}

          {type === 'fase' && filters.faseArray.length === 0 && <S.Value disabled={disabled}>{title}</S.Value>}
        </S.WrapperOptionValue>
        {type === 'complexo' && (
          <S.SetaInput isToogle={!openToogleClosed && toogleSelect && !filters.openToogleMultiSelectComplexo} stroke={'var(--cinza-escuro)'} onClick={() => handleClickToogle()}
          />
        )}

        {type === 'fase' && (
          <S.SetaInput isToogle={!openToogleClosed && toogleSelectFase && !filters.openToogleMultiSelectFase} stroke={'var(--cinza-escuro)'} onClick={() => handleClickToogle()}
          />
        )}

        {type === 'complexo' && !openToogleClosed && toogleSelect && !filters.openToogleMultiSelectComplexo && filters.corredor && (
          <S.OptionsBox
            width={width}
            maxHeightOptions={maxHeightOptions}
            bottomOptions={bottomOptions}
            topOptions={topOptions}
          >
            {complexos?.filter((item) => item?.Corredor?.Id === selectedCorredor).map((item, index, number) => (
              <S.Option key={item.Id} onClick={(e) => handleClickOption(item)}>
                <S.listOptions>
                  <S.OptionValue>{item?.Nome}</S.OptionValue>
                  <Checkbox
                    disabled
                    key={item.Id}
                    checked={complexoSelectedComplete.some(check => check.Id === item.Id)}
                    styles={{
                      checkmark: {
                        backgroundColor: 'rgb(0 123 119 / 71%)',
                      },
                      checkbox: {
                        background: 'none',
                        border: '.05rem solid rgb(200, 198, 196)'
                      },
                    }}
                  />
                </S.listOptions>
              </S.Option>
            ))}

            {type === 'complexo' && (
              <S.Option isAfeter={true} onClick={() => onClicksComplexo()}>
                <S.listOptions>
                  <S.OptionValue>Todos os itens</S.OptionValue>
                </S.listOptions>
              </S.Option>
            )}
          </S.OptionsBox>
        )}

        {type === 'fase' && !openToogleClosed && toogleSelectFase && !filters.openToogleMultiSelectFase && filters.complexoArray.length > 0 && (
          <S.OptionsBox
            width={width}
            maxHeightOptions={maxHeightOptions}
            bottomOptions={bottomOptions}
            topOptions={topOptions}
          >
            {fases.filter((item) => complexoSelected?.includes(item?.Complexo.Id))?.map((item, index, number) => (
              <S.Option key={item.Id} onClick={(e) => handleClickOption(item)} >
                <S.listOptions>
                  <S.OptionValue>{item?.Nome + "/" + item.Complexo.Nome}</S.OptionValue>
                  <Checkbox
                    disabled
                    key={item.Id}
                    checked={faseSelectedComplete.some(check => check.Id === item.Id)}
                    styles={{
                      checkmark: {
                        backgroundColor: 'rgb(0 123 119 / 71%)',
                      },
                      checkbox: {
                        background: 'none',
                        border: '.05rem solid rgb(200, 198, 196)'
                      },
                    }}
                  />
                </S.listOptions>
              </S.Option>
            ))}
            {type === 'fase' && (
              <S.Option isAfeter={true} onClick={() => onClicksFase()}>
                <S.OptionValue>Todos os itens</S.OptionValue>
              </S.Option>
            )}
          </S.OptionsBox>
        )}
        {children}
      </S.Container>
    </>
  );
};
export default MultiSelect;
