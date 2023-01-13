import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../../../../dataflow/hooks';
import * as S from './styles';
import Icon from '../../../../assets/icons/IconClose.svg';
import Select from '../../../../components/Select';

const ViewContexto = () => {
  const location = useLocation();
  const filters = useAppSelector((state) => state.state.filters);
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const listModuloState = useAppSelector((state) => state.state.listModulo).filter(item => item.Nome === filters.modulo?.Nome);

  const isNotContexto = listModuloState && !!listModuloState.length;

  const renderNotContextProvider = () => {
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

  return (
    <>
      <S.Container>
        <S.Banner>
          <S.YellowBar />
          <S.ModuloName>{!!filters && filters.modulo?.Nome}</S.ModuloName>
        </S.Banner>
        <S.TitleContext>Contexto do Tema</S.TitleContext>
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
                maxHeightOptions='1200px'
                bottomOptions='auto'
                topOptions='45px'
                isFilterSelect={true}
                isDisableFilter={true}
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
                maxHeightOptions='1200px'
                bottomOptions='auto'
                topOptions='45px'
                isFilterSelect={true}
                isDisableFilter={true}
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
                maxHeightOptions='1200px'
                bottomOptions='auto'
                topOptions='45px'
                isFilterSelect={true}
                isDisableFilter={true}
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
                maxHeightOptions='1200px'
                bottomOptions='auto'
                topOptions='45px'
                isFilterSelect={true}
                isDisableFilter={true}
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
                maxHeightOptions='1200px'
                bottomOptions='auto'
                topOptions='45px'
                isDisableFilter={true}
                isFilterSelect={true}
              />
            </S.LabelInput>
          </S.WrapperInput>
          <S.FilterBtn>Filtrar</S.FilterBtn>
        </S.FilterBox>

        <S.WrapperTextArea>
          {listModuloState && isNotContexto ? (
            <>
              {listModuloState.map((item) => {
                return <S.TextArea>{item.ConteudoTema}</S.TextArea>;
              })}
            </>
          ) : (
            <>{renderNotContextProvider()}</>
          )}
        </S.WrapperTextArea>
      </S.Container>
    </>
  );
};

export default ViewContexto;
