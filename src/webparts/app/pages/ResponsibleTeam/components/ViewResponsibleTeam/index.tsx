import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import Select from '../../../../components/Select';
import * as S from './styles';
import Icon from '../../../../assets/icons/IconClose.svg'
import IconEntrada from '../../../../assets/icons/IconEntrada.svg'
import { IConteudoAnaliseCritica } from '../../../../interfaces/IConteudoAnaliseCritica';
import { clearGroupsTeamEdicao, clearGroupsTeamLeitura, itemsFilterOpenToogle, setListFilterModulo } from '../../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../../services/ConteudoModuloClassService';
import Spinner from '../../../../components/Spinner';

const ViewResponsibleTeam = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const filters = useAppSelector((state) => state.state.filters);
  const modulo = useAppSelector((state) => state.state.listModulo);
  const gruposEdicao = useAppSelector((state) => state.state.listGroupsTeamsEdicao);
  const gruposLeiura = useAppSelector((state) => state.state.listGroupsTeamsLeitura);
  const contentCritico = modulo.filter((item) => item.Nome === moduleName[0]);
  const [data, setData] = React.useState<IConteudoAnaliseCritica[]>();
  const conteudoModulo = new ConteudoModuloClassService();
  const [isDataValue, setIsDataValue] = React.useState(true);
  const [isDataValueReload, setIsDataValueReload] = React.useState(true);
  const [isDataSpinner, setIsDataSpinner] = React.useState(false);


  const reload = () => {
    dispatch(clearGroupsTeamEdicao());
    dispatch(clearGroupsTeamLeitura());
  };

  React.useEffect(() => {
    setIsDataValue(true);
    reload();
  }, []);

  const handleClickFilter = () => {
    setIsDataValueReload(false);
    setIsDataValue(true);
    dispatch(clearGroupsTeamEdicao());
    dispatch(clearGroupsTeamLeitura());
    setIsDataSpinner(true);
    conteudoModulo
      .getConteudoByFilter(filters)
      .then((res: any) => {
        setIsDataSpinner(false);
        dispatch(itemsFilterOpenToogle(false))
        if (res.length === 0) {
          setIsDataValue(false)
        }
      })
      .catch((err) => {
        console.log({ err });
        setIsDataValue(false);
        setIsDataSpinner(false);
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

  const renderNotTextFiltredGroups = () => {
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

  const renderNotTextGroups = () => {
    return (
      <>
        <S.WrapperNotConteudo>
          <S.Icon src={IconEntrada} />
          <S.TextArea>
            <S.TitleNotView>
              Selecione os filtros para exibição!
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
        <S.FilterMsg>Para saber a equipe responsável filtre aqui</S.FilterMsg>
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

        {!!data &&
          data.map((item) => {
            return <S.TitleContext>{item.Title}</S.TitleContext>;
          })[0]}
        <S.WrapperGroupsContainer>
          <S.WrapperGroups>
            {gruposEdicao.length > 0 && !isDataSpinner && (
              <>
                <S.TitleGroups>Equipe responsável pela edição</S.TitleGroups>
                <S.SeparatorGroup />
              </>
            )}
            {gruposEdicao.length > 0 && !isDataSpinner && (
              <>
                <S.WrapperTextArea heightProps={'30.575rem'}>
                  {gruposEdicao?.map((item) => {
                    return (
                      <S.WrapperProfilePicture>
                        <S.UserContainer>
                          <S.UserPictureContainer>
                            <S.ProfilePicture src={item.Url} />
                          </S.UserPictureContainer>
                          <S.TextArea>{item.Title}</S.TextArea>
                        </S.UserContainer>
                      </S.WrapperProfilePicture>
                    );
                  })}
                </S.WrapperTextArea>
              </>
            )}
          </S.WrapperGroups>

          <S.WrapperGroups>
            {gruposLeiura.length > 0 && !isDataSpinner && (
              <>
                <S.TitleGroups>Visualizadores do conteúdo do módulo</S.TitleGroups>
                <S.SeparatorGroup />
              </>
            )}

            {gruposLeiura.length > 0 && !isDataSpinner && (
              <>
                <S.WrapperTextArea heightProps={'30.575rem'}>
                  {gruposLeiura?.map((item) => {
                    return (
                      <S.WrapperProfilePicture>
                        <S.UserContainer>
                          <S.UserPictureContainer>
                            <S.ProfilePicture src={item.Url} />
                          </S.UserPictureContainer>
                          <S.TextArea>{item.Title}</S.TextArea>
                        </S.UserContainer>
                      </S.WrapperProfilePicture>
                    );
                  })}
                </S.WrapperTextArea>
              </>
            )}
          </S.WrapperGroups>
        </S.WrapperGroupsContainer>

        {(gruposLeiura.length === 0 || gruposEdicao.length === 0) && !isDataSpinner && (
          <S.WrapperTextArea widthProps="45.25rem">
            {!isDataValue && renderNotTextFiltredGroups()}
            {!!isDataValueReload && renderNotTextGroups()}
          </S.WrapperTextArea>
        )}
        {!!isDataSpinner && (
          <S.WrapperTextArea widthProps="45.25rem">
            <S.WrapperSpinner>
              <Spinner />
            </S.WrapperSpinner>
          </S.WrapperTextArea>
        )}
      </S.Container>
    </>
  );
};

export default ViewResponsibleTeam;
