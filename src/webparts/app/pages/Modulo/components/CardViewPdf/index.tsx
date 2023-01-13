import * as React from 'react';
import * as S from './styles';

import { IConteudoItems } from '../../../../interfaces/IConteudoItems';
import Pdf from '../../../../assets/img/IconPdf.png';
import Icon from '../../../../assets/icons/IconView.svg';
import Modal from '../../../../components/Modal';
import ViewPdf from '../ViewPdf';
import { useDispatch } from 'react-redux';
import { setIsOpenOrDisable } from '../../../../../../dataflow/reducers/StateList';
import { IAppProps } from '../../../../interfaces/IAppProps';
import { format } from 'date-fns';
import { IFaseItems } from '../../../../interfaces/IFaseItems';

interface IProps {
  items?: IConteudoItems[];
  children?: React.ReactNode;
}

const CardViewPdf = ({ items, children, ...rest }: IProps) => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
  const handleClick = (url: string) => {
    dispatch(setIsOpenOrDisable(true))
    setValue(url)
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
        {items && items.map((item) => {
          console.log(item)
          return (
            <S.WrapperBoxView >
              <S.WrapperBox>
                <S.WrapperIcon>
                  <S.IconPdf src={Pdf} onClick={() => handleClick(item.URLConteudo.Url)} />
                </S.WrapperIcon>

                <S.WrapperBoxTitle onClick={() => handleClick(item.URLConteudo.Url)}>
                  <S.TitleComplexo>{item?.Complexo.length > 0 ? item?.Complexo.map((item, index, number) => {
                    return `${item?.Nome.includes('Serra') ? index == 0 ? item.Nome : '' + item.Nome.replace('Serra', '') : item.Nome}${index !== number.length - 1 ? `/` : ''}`
                  }) : item?.Corredor.Nome}</S.TitleComplexo>

                  <S.WrapperBoxFase>
                    {renderFaseItem(item.Fase)}
                  </S.WrapperBoxFase>
                  <S.WrapperDateFile topDate={item?.Corredor.Id === 5 ? true : false}>
                    <S.TextDateFile>{`Modificação: ${format(new Date(item.Modified), 'dd.MM.yyyy')}`}</S.TextDateFile>
                  </S.WrapperDateFile>
                </S.WrapperBoxTitle>

              </S.WrapperBox>
              <S.IconViewPdf src={Icon} onClick={() => handleClick(item.URLConteudo.Url)} />
            </S.WrapperBoxView>
          )
        })}
        {!!value && (
          <Modal isOpen={true}>
            <ViewPdf url={value} />
          </Modal>
        )}
      </S.Container>
    </>
  );
};

export default CardViewPdf;
