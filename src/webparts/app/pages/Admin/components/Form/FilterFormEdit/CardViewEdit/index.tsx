import * as React from 'react';
import * as S from './styles';

import Pdf from '../../../../../../assets/img/IconPdf.png';
import Icon from '../../../../../../assets/icons/IconView.svg';

import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { IConteudoItems, IConteudoItemsEdit } from '../../../../../../interfaces/IConteudoItems';
import { setIsOpenOrDisable, setListFilterCorredor, setFilterComplexosArray, clearFilterComplexosArray, clearFilterFaseArray, setFilterFaseArray, setListFilterTiposConteudo } from '../../../../../../../../dataflow/reducers/StateList';
import Form from '../..';
import { IAppProps } from '../../../../../../interfaces/IAppProps';
import Modal from '../../../../../../components/Modal';
import IconClose from '../../../../../../assets/icons/IconClose.svg';
import { useAppSelector } from '../../../../../../../../dataflow/hooks';
import { IFaseItems } from '../../../../../../interfaces/IFaseItems';
interface IProps {
  items?: IConteudoItems[];
  context?: IAppProps
  children?: React.ReactNode;
}

const CardViewEdit = ({ items, context, children, ...rest }: IProps) => {
  const [value, setValue] = React.useState<IConteudoItemsEdit>();
  const dispatch = useDispatch();
  const complexos = useAppSelector((state) => state.state.listComplexo);
  const fases = useAppSelector((state) => state.state.listFase);
  const corredores = useAppSelector((state) => state.state.listCorredor);
  const tiposConteudo = useAppSelector((state) => state.state.listTiposConteudos);
  const filters = useAppSelector((state) => state.state.filters);
  console.log({ value })

  const handleClick = (items: IConteudoItemsEdit, e: any) => {
    dispatch(setIsOpenOrDisable(true))
    setValue(items)

    for (let itemConteudo of tiposConteudo) {
      if (itemConteudo.Id === items.TiposConteudo.Id) {
        dispatch(setListFilterTiposConteudo(itemConteudo))
      }
    }

    for (let corredorItem of corredores) {
      if (corredorItem.Id === items.Corredor.Id) {
        dispatch(setListFilterCorredor(corredorItem))
      }
    }


    for (let complexoItem of complexos) {
      items.Complexo.map(value => {
        if (value.Id === complexoItem.Id) {
          dispatch(setFilterComplexosArray(complexoItem))
        }
      })
    }

    for (let faseItem of fases) {
      items.Fase.map(value => {
        if (value.Id === faseItem.Id) {
          dispatch(setFilterFaseArray(faseItem))
        }
      })
    }
  }


  const handleDisable = () => {
    dispatch(setIsOpenOrDisable(false))
    dispatch(clearFilterComplexosArray())
    dispatch(clearFilterFaseArray())
  }


  const renderFaseItem = (item: IFaseItems[]) => {
    const setItemsFase = new Set();
    let faseItems;
    const faseArray = item.map((item) => item);
    const faseItem = faseArray.map((item) => item);

    for (let fase of item) {
      faseItems = fase
    }

    const filterFaseDuplicates = faseItem.filter((person) => {
      const duplicatedPerson = setItemsFase.has(person.Nome);
      setItemsFase.add(person.Nome);

      return !duplicatedPerson;
    });
    console.log(filterFaseDuplicates)

    return (
      <>
        {filterFaseDuplicates.map(value => {
          return (
            <>
              <S.WrapperFase>
                <S.TextFase>{value.Nome}</S.TextFase>
              </S.WrapperFase>
            </>
          )
        })}
      </>
    )
  }

  return (
    <>
      <S.Container>
        {items && items.map((itemValue) => {
          return (
            <S.WrapperBoxView >
              <S.WrapperBox>
                <S.WrapperIcon>
                  <S.IconPdf src={Pdf} onClick={(e) => handleClick(itemValue as any, e)} />
                </S.WrapperIcon>

                <S.WrapperBoxTitle onClick={(e) => handleClick(itemValue as any, e)}>
                  <S.TitleComplexo>{itemValue?.Complexo.length > 0 ? itemValue?.Complexo.map((item, index, number) => {
                    return `${item?.Nome.includes('Serra') ? index == 0 ? item.Nome : '' + item.Nome.replace('Serra', '') : item.Nome}${index !== number.length - 1 ? `/` : ''}`
                  }) : itemValue?.Corredor.Nome}</S.TitleComplexo>

                  <S.WrapperBoxFase>
                    {renderFaseItem(itemValue.Fase)}
                  </S.WrapperBoxFase>
                  <S.WrapperDateFile topDate={itemValue?.Corredor.Id === 5 ? true : false} >
                    <S.TextDateFile>{`Modificação: ${format(new Date(itemValue.Modified), 'dd.MM.yyyy')}`}</S.TextDateFile>
                  </S.WrapperDateFile>
                </S.WrapperBoxTitle>

              </S.WrapperBox>
              <S.IconViewPdf src={Icon} onClick={(e) => handleClick(itemValue as any, e)} />
            </S.WrapperBoxView>
          )
        })}
        {!!value && (
          <Modal isOpen={true} isOpenEditForm={true}>
            <S.IconClose src={IconClose} onClick={() => handleDisable()} />
            <S.WrapperEdit>
              <Form props={context} isEditValue={true} itemsConteudoEdit={value as any} />
            </S.WrapperEdit>

            <S.WrapperEditDisable onClick={() => handleDisable()} />
          </Modal>
        )}
      </S.Container>
    </>
  );
}

export default CardViewEdit;