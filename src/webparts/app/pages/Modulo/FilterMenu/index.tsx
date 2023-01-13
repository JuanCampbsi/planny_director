import * as React from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import Select from '../../../components/Select';
import { useAppSelector } from '../../../../../dataflow/hooks';
import { ConteudoModuloClassService } from '../../../services/ConteudoModuloClassService';
import Icon from '../../../assets/icons/IconArquivoPDF.svg';
import { IConteudoItems } from '../../../interfaces/IConteudoItems';
import Modal from '../../../components/Modal';
import { itemsFilterOpenToogle, setListFilterModulo, setListFiltred } from '../../../../../dataflow/reducers/StateList';
import { useDispatch } from 'react-redux';
import CardViewPdf from '../components/CardViewPdf';
import ViewPdf from '../components/ViewPdf';
import Spinner from '../../../components/Spinner';

const FilterMenu = () => {
  const location = useLocation();
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const filters = useAppSelector((state) => state.state.filters);
  const modulos = useAppSelector((state) => state.state.listModulo);
  const conteudoModulo = new ConteudoModuloClassService();
  const [data, setData] = React.useState<IConteudoItems[]>();
  const [isDataValue, setIsDataValue] = React.useState(true);
  const [isDataValueNot, setIsDataValueNot] = React.useState(false);
  const dispatch = useDispatch();
  const [isDataSpinner, setIsDataSpinner] = React.useState(false);

  const isDataViewNotItems = !data || data?.length === 0;
  const isDataViewRenderNot = !!data && !!data.length && !filters.isOpenOrDisable;
  const isDataViewLenghtOne = !!data && data.length === 1;
  const isDataViewRender = (!!data && !!data.length && filters.isOpenOrDisable) || isDataViewRenderNot;

  const handleClickFilter = () => {
    setData(undefined);
    setIsDataValueNot(false);
    setIsDataValue(false);
    setIsDataSpinner(true);
    conteudoModulo
      .getConteudoByFilter(filters)
      .then((res: any) => {
        setIsDataSpinner(false);
        console.log(res);
        setData(res);
        dispatch(setListFiltred(res));
      })
      .catch((err) => {
        setIsDataValueNot(true)
        setIsDataSpinner(false)
        setIsDataValue(false)
      });
  };

  React.useEffect(() => {
    if (modulos) {
      dispatch(setListFilterModulo(modulos.filter((item: any) => item.Nome === moduleName[0]).reduce((acc, cur) => {
        return Object.assign(acc, cur);
      }, {})))
    }
  }, [modulos]);

  React.useEffect(() => {
    dispatch(itemsFilterOpenToogle(false))
  }, []);

  React.useEffect(() => {
    handleClickFilter()
  }, []);

  const renderItemsFilter = () => {
    const TextSelector = [
      filters.modulo?.Nome,
      `Ciclo ${filters.ciclo?.Title}`,
      !!filters.corredor ? `Corredor ${filters.corredor?.Nome}` : undefined,
      filters?.complexo?.Nome,
      filters?.fase?.Nome,
    ].filter((item) => item !== undefined);

    return (
      <>
        <S.WrapperTextFilterView>
          {data.length > 0 &&
            TextSelector &&
            TextSelector.map((item, index) => (
              <>
                <S.TextViewFilter>{item}</S.TextViewFilter>
                {data.length > 0 && index !== TextSelector.length - 1 && <S.SetaTextFilterView />}
              </>
            ))}
        </S.WrapperTextFilterView>

        <S.SeparatorFilterView />
        {data.length === 1 && (
          <Modal isOpen={true}>
            {data.map((item) => (
              <ViewPdf url={item.URLConteudo.Url} />
            ))}
          </Modal>
        )}
      </>
    );
  };

  const renderTextItemsFilterNone = () => {
    return (
      <>
        <S.WrapperIframe>
          <S.WrapperIcon>
            <S.Icon src={Icon} />
          </S.WrapperIcon>
          {!!isDataValue && !isDataValueNot ? (
            <>
              <S.TitleNotView>
                Os documentos não podem ser exibidos
                <S.SubTitleNotView>
                  Para que os documentos apareçam aqui é necessário selecionar pelo menos o<S.TextSpan> Ciclo </S.TextSpan>e o
                  <S.TextSpan> Corredor</S.TextSpan>.
                </S.SubTitleNotView>
              </S.TitleNotView>
            </>
          ) : (
            <>
              <S.TitleNotView>
                O conteudo está indisponível para o filtro selecionado
                <S.SubTitleNotView>Por favor verifique o responsável na seção <a href='https://globalvale.sharepoint.com/:u:/r/teams/PlanDirGestaoAtivos/SitePages/4_Duvidas_Contatos.aspx?csf=1&web=1&e=Fs6IJx'>Dúvidas e Contatos</a> </S.SubTitleNotView>
              </S.TitleNotView>
            </>
          )}
          <S.WrapperText />
        </S.WrapperIframe>
      </>
    );
  };

  return (
    <S.Wrapper>
      <S.Banner>
        <S.YellowBar />
        <S.ModuloName>{!!filters && filters.modulo?.Nome}</S.ModuloName>
      </S.Banner>
      <S.FilterMsg>Filtre seu modulo aqui</S.FilterMsg>
      <S.FilterBox>
        <S.WrapperInput>
          <S.LabelInput>
            Ciclo
            <S.SeparatorInput />
            <Select
              type="ciclo"
              title="Selecione"
              width="5rem"
              height="3.75rem"
              maxHeightOptions='25rem'
              bottomOptions='auto'
              topOptions='2.8125rem'
              isFilterSelect={true}
            />
          </S.LabelInput>
        </S.WrapperInput>
        <S.WrapperInput>
          <S.LabelInput>
            Corredor
            <S.SeparatorInput />
            <Select
              type="corredor"
              title="Selecione"
              width="6.5rem"
              height="2.625rem"
              maxHeightOptions='25rem'
              bottomOptions='auto'
              topOptions='2.8125rem'
              isFilterSelect={true}
            />
          </S.LabelInput>
        </S.WrapperInput>
        <S.WrapperInput>
          <S.LabelInput>
            Complexo
            <S.SeparatorInput />
            <Select
              type="complexo"
              title="Selecione"
              width="6.875rem"
              height="2.625rem"
              maxHeightOptions='25rem'
              bottomOptions='auto'
              topOptions='2.8125rem'
              isFilterSelect={true}
            />
          </S.LabelInput>
        </S.WrapperInput>
        <S.WrapperInput>
          <S.LabelInput>
            Fase
            <S.SeparatorInput />
            <Select
              type="fase"
              title="Selecione"
              width="6.25rem"
              height="2.625rem"
              maxHeightOptions='25rem'
              bottomOptions='auto'
              topOptions='2.8125rem'
              isFilterSelect={true}
            />
          </S.LabelInput>
        </S.WrapperInput>
        <S.WrapperInput>
          <S.LabelInput>
            Capítulo/Modulo
            <S.SeparatorInput />
            <Select
              type="modulo"
              title="Selecione"
              width="10.8125rem"
              height="2.625rem"
              maxHeightOptions='25rem'
              bottomOptions='auto'
              topOptions='2.8125rem'
              isFilterSelect={true}
              form={false}
            />
          </S.LabelInput>
        </S.WrapperInput>
        <S.FilterBtn onClick={handleClickFilter}>Filtrar</S.FilterBtn>
      </S.FilterBox>

      {isDataViewRender && isDataViewLenghtOne && (
        <>
          {data.map((item) => {
            return renderItemsFilter();
          })}
          <CardViewPdf items={data} />
        </>
      )}

      {isDataViewRender && !isDataViewLenghtOne && (
        <>
          {
            data.map((item) => {
              return renderItemsFilter();
            })[0]
          }
          <CardViewPdf items={data} />
        </>
      )}

      {isDataViewNotItems && !isDataSpinner && renderTextItemsFilterNone()}

      {!!isDataSpinner && (
        <S.WrapperTextArea widthProps="45.25rem">
          <S.WrapperSpinner>
            <Spinner />
          </S.WrapperSpinner>
        </S.WrapperTextArea>
      )}
    </S.Wrapper>
  );
};

export default FilterMenu;
