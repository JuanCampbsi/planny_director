import * as React from 'react';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../../../../../../dataflow/hooks';
import Button from '../../../../../components/Button';
import Select from '../../../../../components/Select';
import ElCapacete from '../../../../../assets/img/ElipseCapacete.png';
import IconClose from '../../../../../assets/icons/IconClose.svg';
import IconPrint from '../../../../../assets/icons/IconPrint.svg';
import ModulesBox from '../../ModulesBox';
import Modal from '../../../../../components/Modal';
import { setIsOpenOrDisable, setIsOpenOrDisableModalSucessOrError } from '../../../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../../../services/ConteudoModuloClassService';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';
import { IAppProps } from '../../../../../interfaces/IAppProps';
import { id } from 'date-fns/locale';

const BoxFilteredMapa = (props: IAppProps) => {
  const filters = useAppSelector((state) => state.state.filters);
  const ciclo = useAppSelector((state) => state.state.filters.ciclo);
  const complexoSelected = useAppSelector((state) => state.state.filters.corredor);
  const complexoSelectedFilter = useAppSelector((state) => state.state.filters.complexo?.Id);
  const conteudoModulo = new ConteudoModuloClassService();
  const modulos = useAppSelector((state) => state.state.listModulo);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [idNotFound, setIdNotFound] = React.useState(false);

  const dispatch = useAppDispatch();

  const isConclikMouse = () => {
    setIdNotFound(false)
    dispatch(setIsOpenOrDisable(true))
  };
  

  const handleDownloadPdf = () => {
    setIsLoading(true);
    const filterWithoutModulo = { ...filters };
    filterWithoutModulo.modulo = null;
    conteudoModulo
      .getConteudoByFilter(filterWithoutModulo)
      .then((res) => {
        const data = res.map((item) => {
          //const contextoDoTema = modulos.find((item2) => item2?.Nome === item.Modulo.Nome);
          return item.Id;
        });

        const filtersData = {
          corredor : filters.corredor?.Nome,
          complexo: filters.complexo?.Nome,
          fase: filters.fase?.Nome
        }

        if(data.length > 0){
          props.context.aadHttpClientFactory
          .getClient('api://e1beb51a-7aef-4370-9b3e-7660cf5c5ff2')
          .then((client: AadHttpClient): void => {
            client
              .post('https://app-pldiretor-dev.azurewebsites.net/Pdf', AadHttpClient.configurations.v1, {
                body: JSON.stringify({ids: data, filters: filtersData}),
                headers: {
                  'Content-Type': 'application/json',
                  // 'Acess-Control-Allow-Origin': 'https://globalvale.sharepoint.com'
                },
              })
              .then((res: HttpClientResponse): Promise<Blob> => {
                return res.blob();
              })
              .then((data: Blob) => {
                setIsLoading(false);
                const blob = new Blob([data], { type: 'application/pdf' });
                const url = window.URL || window.webkitURL;
                const linkCreated = url.createObjectURL(blob);
                //window.open(linkCreated)
                const link = document.createElement('a');
                link.href = linkCreated;
                link.download = `Plano Diretor - Consolidado`;
                link.click();
                link.remove();
              })
              .catch((err) => {
                setIsLoading(false);
                console.log(err)
              });
          })
          .catch((err: any) =>{ 
            setIsLoading(false);
            console.log(err)
          });
        } else {
          setIdNotFound(true)
          dispatch(setIsOpenOrDisable(true))
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const isRenderModal = () => {
    const TextSelector = [`Ciclo ${filters.ciclo.Title}`, `Corredor ${filters.corredor.Nome}`, filters?.complexo?.Nome, filters?.fase?.Nome].filter(
      (item) => item !== undefined
    );

    return (
      <>
        <Modal isOpen={true}>
          <S.WrapperModal>
            <S.IconClose src={IconClose} />
            <S.WrapperTopIcon isActive={true}>
              {TextSelector &&
                TextSelector.map((item, index) => (
                  <>
                    <S.WrapperTopTitle>{item}</S.WrapperTopTitle>
                    {TextSelector.length > 0 && index !== TextSelector.length - 1 && <S.SetaTextFilterView>{'>'}</S.SetaTextFilterView>}
                  </>
                ))}
            </S.WrapperTopIcon>
            <S.WrapperBoxModal>
              <ModulesBox />
            </S.WrapperBoxModal>
          </S.WrapperModal>
        </Modal>
      </>
    );
  };

  const typesDisabled = !!complexoSelectedFilter;

  return (
    <>
      <S.Container>
        <S.WrapperTopIcon>
          <S.WrapperTopTitle>Ciclo {ciclo && ciclo.Title}</S.WrapperTopTitle>
        </S.WrapperTopIcon>
        <S.ContainerWrapper>
          <S.MapaContainerBg>
            <S.MapaContainer>
              <S.StyledMapa isActive={true} />
            </S.MapaContainer>
          </S.MapaContainerBg>

          <S.FiltredContainer>
            {!!complexoSelected && (
              <>
                <S.ContainerCapacete>
                  <S.ImgCapacete src={ElCapacete} />
                  <S.WrapperTextBoxCorredor>
                    <S.TitleFiltredMapa>{`Corredor ${complexoSelected.Nome}`}</S.TitleFiltredMapa>
                    <S.TextBoxCorredor>{`${complexoSelected.Estados}`}</S.TextBoxCorredor>
                  </S.WrapperTextBoxCorredor>
                </S.ContainerCapacete>
              </>
            )}
            {!complexoSelected && <S.TitleFiltredMapa>Acesse selecionando no mapa!</S.TitleFiltredMapa>}
            <S.Separator />
            <S.WrapperInput>
              <S.LabelInput>
                Corredor
                <S.SeparatorInput />
                <Select
                  type="corredor"
                  title="Selecione aqui um corredor"
                  height="42px"
                  maxHeightOptions="573px"
                  bottomOptions="auto"
                  topOptions="45px"
                  isMap
                />
              </S.LabelInput>
              <S.LabelInput>
                Complexo
                <S.SeparatorInput />
                <Select
                  type="complexo"
                  title="Selecione aqui um complexo"
                  height="42px"
                  maxHeightOptions="573px"
                  bottomOptions="auto"
                  topOptions="45px"
                />
              </S.LabelInput>
              <S.LabelInput>
                Fase
                <S.SeparatorInput />
                <Select type="fase" title="Selecione aqui uma fase" height="42px" maxHeightOptions="573px" bottomOptions="auto" topOptions="45px" />
              </S.LabelInput>
              <S.WrapperButton disabled={isLoading} >
                <S.WrapperButttonPrint onClick={ () => (!filters.corredor?.Nome || isLoading)? null :handleDownloadPdf()}  isDisabled={!filters.corredor?.Nome} >
                  <S.IconPrint src={IconPrint} />
                  <S.TextButtonPrint>{isLoading ? 'Criando pdf...' : 'Imprimir plano diretor'}</S.TextButtonPrint>
                </S.WrapperButttonPrint>
                <Button
                  backgroundButton={'var(--amarelo-vale)'}
                  hoverButton={'#CFA53D'}
                  disabled={!typesDisabled}
                  funcAction={() => {
                    isConclikMouse();
                  }}
                >
                  Visualizar
                </Button>
                {filters.isOpenOrDisable && !idNotFound && isRenderModal()}
              </S.WrapperButton>
            </S.WrapperInput>
          </S.FiltredContainer>
        </S.ContainerWrapper>
       {idNotFound && <Modal
              titleMenssage={`Não foi possível gerar seu pdf`}
              SubTitleMenssage={`Não foram encontrados resultados para sua busca`}
              error={true}
            />}
      </S.Container>
    </>
  );
};

export default BoxFilteredMapa;
