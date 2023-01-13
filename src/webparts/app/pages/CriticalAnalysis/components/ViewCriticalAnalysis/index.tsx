import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import Select from '../../../../components/Select';
import * as S from './styles';
import Icon from '../../../../assets/icons/IconClose.svg'
import IconEntrada from '../../../../assets/icons/IconEntrada.svg'
import { setListFilterModulo } from '../../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../../services/ConteudoModuloClassService';
import { IConteudoItems } from '../../../../interfaces/IConteudoItems';


const ViewCriticalAnalysis = () => {
  const location = useLocation();
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const filters = useAppSelector((state) => state.state.filters);
  const modulo = useAppSelector((state) => state.state.listModulo);
  const contentCritico = modulo.filter((item) => item.Nome === moduleName[0]);
  const [data, setData] = React.useState<string[]>([]);
  const conteudoModulo = new ConteudoModuloClassService();
  const [isDataValue, setIsDataValue] = React.useState(true);
  const [valueIsNull, setValueIsNull] = React.useState<boolean>();
  const [isNotFirstTime, setNotFirstTime] = React.useState(true);
  const dispatch = useAppDispatch();

  const handleClickFilter = () => {
    setNotFirstTime(false);
    conteudoModulo
      .getConteudoByFilter(filters)
      .then((res: IConteudoItems[]) => {
        console.log("resAnalise", res);
        const analisecritica = res.map(item => item.AnaliseCritica !== null ? item.AnaliseCritica : '')
        setData(analisecritica);
        //dispatch(setListFiltred(res))
        setIsDataValue(res.map(item => item.AnaliseCritica).length === 0)
        setValueIsNull(analisecritica.length === 0)
      })
      .catch((err) => {
        console.log(err)
        setValueIsNull(true)
      });
  };

  React.useEffect(() => {
    if (contentCritico) {
      contentCritico.map((item) => dispatch(setListFilterModulo(item)));
    }
  }, []);

  React.useEffect(() => {
    handleClickFilter()
  }, []);


  const renderNotTextFiltredAnalisys = () => {
    return (
      <>
        <S.WrapperNotConteudo>
          <S.Icon src={Icon} />
          <S.TextArea>
            <S.TitleNotView>
              O conteudo está indisponível para o filtro selecionado
              <S.SubTitleNotView>Por favor verifique o responsável na seção <a href='https://globalvale.sharepoint.com/:u:/r/teams/PlanDirGestaoAtivos/SitePages/4_Duvidas_Contatos.aspx?csf=1&web=1&e=Fs6IJx'>Dúvidas e Contatos</a> </S.SubTitleNotView>
            </S.TitleNotView>
          </S.TextArea>
        </S.WrapperNotConteudo>
      </>
    );
  };

  const renderNotTextAnalisys = () => {
    return (
      <>
        <S.WrapperNotConteudo>
          <S.Icon src={IconEntrada} />
          <S.TextArea>
            <S.TitleNotView>
              Selecione os filtros para exibição dos conteúdos!
            </S.TitleNotView>
          </S.TextArea>
        </S.WrapperNotConteudo>
      </>
    );
  };

  return (
    <>
      <S.Container>
        <S.Banner>
          <S.YellowBar />
          <S.ModuloName>{!!filters && filters.modulo?.Nome}</S.ModuloName>
        </S.Banner>
        <S.FilterMsg>Para saber a análise crítica do conteúdo no ciclo filtre aqui</S.FilterMsg>
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
                width="104px"
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
                width="110px"
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
                width="100px"
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
                width="10.8125rem"
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

        <S.WrapperTextArea>
          {
            data?.length > 0 && !valueIsNull && (
              <>
                {
                  data.map((item: string) => {
                    return <S.TextArea><div dangerouslySetInnerHTML={{ __html: item }}></div></S.TextArea>
                  })[0]
                }
              </>
            )
          }
          {valueIsNull && renderNotTextFiltredAnalisys()}
          {isNotFirstTime && renderNotTextAnalisys()}
        </S.WrapperTextArea>
      </S.Container>
    </>
  );
};

export default ViewCriticalAnalysis;
