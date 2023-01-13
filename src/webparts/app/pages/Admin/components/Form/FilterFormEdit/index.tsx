import * as React from 'react';
import * as S from './styles';

import { useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../../dataflow/hooks';
import { setListFiltred } from '../../../../../../../dataflow/reducers/StateList';
import Select from '../../../../../components/Select';
import { IConteudoItems } from '../../../../../interfaces/IConteudoItems';
import { ConteudoModuloClassService } from '../../../../../services/ConteudoModuloClassService';
import CardViewEdit from './CardViewEdit';
import Icon from '../../../../../assets/icons/Lupa.svg'
import Spinner from '../../../../../components/Spinner';
import { IAppProps } from '../../../../../interfaces/IAppProps';
import Button from '../../../../../components/Button';

const FilterFormEdit = (props?: IAppProps) => {
  const location = useLocation();
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const filters = useAppSelector((state) => state.state.filters);
  const modulos = useAppSelector((state) => state.state.listModulo);
  const conteudoModulo = new ConteudoModuloClassService();
  const [data, setData] = React.useState<IConteudoItems[]>();
  const [isDataValue, setIsDataValue] = React.useState(true);
  const [isDataValueNot, setIsDataValueNot] = React.useState(false);
  const dispatch = useAppDispatch();
  const [isDataSpinner, setIsDataSpinner] = React.useState(false);
  const history = useHistory();

  const clickRenderRoutes = () => {
    history.push(`/FormConteudoModulo/Created`);
  }

  const handleClickFilter = () => {
    setData(undefined)
    setIsDataValueNot(false)
    setIsDataValue(false)
    setIsDataSpinner(true)
    conteudoModulo
      .getConteudoByFilter(filters)
      .then((res: any) => {
        setIsDataSpinner(false)
        console.log(res);
        setData(res);
        dispatch(setListFiltred(res))
      })
      .catch((err) => {
        setIsDataValueNot(true)
        setIsDataSpinner(false)
        setIsDataValue(false)
        console.log(err);
      });
  };

  const isDataViewNotItems = !data || data?.length === 0;
  const isDataViewRenderNot = !!data && !!data.length && !filters.isOpenOrDisable;
  const isDataViewRender = (!!data && !!data.length && filters.isOpenOrDisable) || (isDataViewRenderNot);

  const renderTextItemsFilterNone = () => {
    return (
      <>
        <S.ContainerIframe>
          <S.WrapperIframe>
            <S.WrapperIcon>
              <S.Icon src={Icon} />
            </S.WrapperIcon>
            {!!isDataValue && !isDataValueNot ? (
              <>
                <S.TitleNotView>

                  Os itens não podem ser exibidos
                  <S.SubTitleNotView>
                    Para que os itens do conteudo apareçam aqui é necessário selecionar pelo menos o
                    <S.TextSpan> Modulo </S.TextSpan>.

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
        </S.ContainerIframe>
      </>
    )
  }

  return (
    <>
      <S.Container>
        <S.WrapperButton>
          <Button
            backgroundButton={'#007E7A'}
            hoverButton={'#007e7ac2'}
            widthButton={'9.625rem'}
            heightButton={'2.625rem'}
            funcAction={() => clickRenderRoutes()}
          >
            Criar Conteudo
          </Button>
        </S.WrapperButton>
        <S.FilterBox>
          <S.WrapperInput>
            <S.LabelInput>
              Ciclo
              <S.SeparatorInput />
              <Select
                type="ciclo"
                title="Selecione"
                width="80px"
                height="60px"
                maxHeightOptions='25rem'
                bottomOptions='auto'
                topOptions='45px'
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
                width="120px"
                height="42px"
                maxHeightOptions='25rem'
                bottomOptions='auto'
                topOptions='45px'
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
                width="190px"
                height="42px"
                maxHeightOptions='25rem'
                bottomOptions='auto'
                topOptions='45px'
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
                width="190px"
                height="42px"
                maxHeightOptions='25rem'
                bottomOptions='auto'
                topOptions='45px'
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
                width="250px"
                height="42px"
                maxHeightOptions='25rem'
                bottomOptions='auto'
                topOptions='45px'
                isFilterSelect={true}
              />
            </S.LabelInput>
          </S.WrapperInput>
          <S.FilterBtn onClick={handleClickFilter}>Filtrar</S.FilterBtn>
        </S.FilterBox>

        {
          isDataViewRender && !isDataViewNotItems && (
            <>
              <CardViewEdit items={data} context={props} />
            </>
          )
        }

        {isDataViewNotItems && !isDataSpinner && renderTextItemsFilterNone()}

        {!!isDataSpinner && !filters.isOpenOrDisableModalSucessOrError && (
          <S.WrapperSpinner>
            <Spinner />
          </S.WrapperSpinner>
        )}
      </S.Container>
    </>
  );
}

export default FilterFormEdit;