import * as React from 'react';
import * as S from './styles';
import btnIcon from '../../../assets/icons/IconButtonStructure.svg';
import btnIconHovered from '../../../assets/icons/IconButtonStructureHovered.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../dataflow/hooks';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';
import { IAppProps } from '../../../interfaces/IAppProps';
import { itemsFilterOpenToogle, setIsContextRouterModulo, setIsOpenOrDisable, setIsOpenOrDisableModalSucessOrError } from '../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../services/ConteudoModuloClassService';
import Modal from '../../../components/Modal';


interface ButtonProps {
  name: string;
  onclick: () => void;
  id: number;
}

const LateralMenu = (props: IAppProps) => {
  const location = useLocation();
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const listModulo = useAppSelector((state) => state.state.filters.modulo);
  const filters = useAppSelector((state) => state.state.filters);
  const listModuloState = useAppSelector((state) => state.state.listModulo).filter(item => filters.modulo?.Nome ? item.Nome === filters.modulo?.Nome : moduleName[0]);
  const dispatch = useAppDispatch();
  const [isValueButtonRender, setIsValueButtonRender] = React.useState(false);
  const isContextRouterModulo = useAppSelector((state) => state.state.isContextRouterModulo);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const history = useHistory();
  const listFiltred = useAppSelector((state) => state.state.filters?.modulo)
  const moduloNameFiltred = listFiltred?.Nome;
  const modulos = useAppSelector((state) => state.state.listModulo);
  const contextoDoTema = modulos.find((item) => item?.Nome === moduloNameFiltred);
  const [idNotFound, setIdNotFound] = React.useState(false);

  const conteudoModulo = new ConteudoModuloClassService();

  const clickRenderRoutes = (item: string, id: number) => {
    dispatch(itemsFilterOpenToogle(false))
    history.push(`/${item}/${(id === 0 || id === 1 || id === 2 || id === 4) ? isContextRouterModulo : ''}`);
  }

  React.useEffect(() => {
    if (!!listModuloState) {
      listModuloState.map((item) => dispatch(setIsContextRouterModulo(item.Nome)));
      setIsValueButtonRender(true);
    }
  }, [listModulo, filters]);

  const dataToSend = {
    contextoDoTema: contextoDoTema?.ConteudoTema,
    nome: contextoDoTema?.Nome,
  };

  const filtersData = {
    corredor: filters.corredor?.Nome,
    complexo: filters.complexo?.Nome,
    fase: filters.fase?.Nome
  }

  const handlePrintPDF = () => {
    const filterWithoutModulo = { ...filters };
    conteudoModulo
      .getConteudoByFilter(filterWithoutModulo)
      .then((res) => {
        const data = res.map((item) => {
          //const contextoDoTema = modulos.find((item2) => item2?.Nome === item.Modulo.Nome);
          return item.Id;
        });

        if (data.length > 0) {
          dispatch(setIsOpenOrDisableModalSucessOrError(true))
          props.context.aadHttpClientFactory
            .getClient('api://e1beb51a-7aef-4370-9b3e-7660cf5c5ff2')
            .then((client: AadHttpClient): void => {
              client
                .post('https://app-pldiretor-dev.azurewebsites.net/Pdf', AadHttpClient.configurations.v1, {
                  body: JSON.stringify({ ids: data, filters: filtersData }),
                  headers: {
                    'Content-Type': 'application/json',
                    // 'Acess-Control-Allow-Origin': 'https://globalvale.sharepoint.com'
                  },
                })
                .then((res: HttpClientResponse): Promise<Blob> => {
                  return res.blob();
                })
                .then((data: Blob) => {
                  dispatch(setIsOpenOrDisableModalSucessOrError(false))
                  const blob = new Blob([data], { type: 'application/pdf' });
                  const url = window.URL || window.webkitURL;
                  const linkCreated = url.createObjectURL(blob);
                  //window.open(linkCreated)
                  const link = document.createElement('a');
                  link.href = linkCreated;
                  link.download = `Plano Diretor - ${dataToSend.nome}`;
                  link.click();
                  link.remove();
                })
                .catch((err) => {
                  dispatch(setIsOpenOrDisableModalSucessOrError(false))
                  console.log(err)
                });
            })
            .catch((err: any) => {
              dispatch(setIsOpenOrDisableModalSucessOrError(false))
              console.log(err)
            });
        } else {
          setIdNotFound(true)
          dispatch(setIsOpenOrDisable(true))
        }
      })
      .catch((err) => {
        console.log(err);
      })

    props.context.aadHttpClientFactory
      .getClient('api://e1beb51a-7aef-4370-9b3e-7660cf5c5ff2/user_impersonation')
      .then((client: AadHttpClient): void => {
        client
          .post('https://localhost:7189/Pdf', AadHttpClient.configurations.v1, {
            body: JSON.stringify(dataToSend),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res: HttpClientResponse): Promise<Blob> => {
            return res.blob();
          })
          .then((data: Blob) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = window.URL || window.webkitURL;
            const linkCreated = url.createObjectURL(blob);
            //window.open(linkCreated)
            const link = document.createElement('a');
            link.href = linkCreated;
            link.download = `Plano Diretor - ${dataToSend.nome}`;
            link.click();
            link.remove();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));


  };

  const buttonData = [
    {
      name: 'Contexto do Tema',
      onclick: (): void => {
        clickRenderRoutes('ContextoTema', 0);
      },
      id: 0,
    },
    {
      name: 'Análise crítica do conteúdo no ciclo',
      onclick: (): void => {
        clickRenderRoutes('AnaliseCritica', 1);
      },
      id: 1,
    },
    {
      name: 'Conteúdo',
      onclick: (): void => {
        clickRenderRoutes('Conteudo', 2);
      },
      id: 2,
    },
    {
      name: 'Equipe Responsável',
      onclick: (): void => {
        clickRenderRoutes('EquipeResponsavel', 4);
      },
      id: 3,
    },
    {
      name: 'Imprimir módulo',
      onclick: (): void => {
        handlePrintPDF();
      },
      id: 4,
    },
  ];

  const handleMouseEnter = (id: number): void => {
    setHoveredItem(id);
  };

  const handleMouseLeave = (): void => {
    setHoveredItem(null);
  };

  const renderButton = (data: ButtonProps, index: number) => {
    const isHovered = data.id === hoveredItem;
    const isLastIndex = index === buttonData.length - 1;
    return (
      <S.ButtonBox disabled={data.id === 4 && (!filters.corredor?.Id)} key={data.id} isLastIndex={isLastIndex} onMouseEnter={() => handleMouseEnter(data.id)} onMouseLeave={handleMouseLeave} onClick={data.onclick}>
        <S.ButtonName isHovered={isHovered}>{data.name}</S.ButtonName>
        <S.ButtonIcon src={isHovered ? btnIconHovered : btnIcon} />
      </S.ButtonBox>
    );
  };

  return (
    <S.Wrapper>
      <S.Title>Estrutura</S.Title>
      {!!isValueButtonRender && buttonData.map((item, index) => renderButton(item, index))}

      {idNotFound && <Modal
        titleMenssage={`Não foi possível gerar seu pdf`}
        SubTitleMenssage={idNotFound ? "Não foram encontrados resultados para sua busca" : `Tente novamente`}
        error={true}
      />}
      {<Modal
        titleMenssage={`Não foi possível gerar seu pdf`}
        SubTitleMenssage={idNotFound ? "Não foram encontrados resultados para sua busca" : `Tente novamente`}
        error={true}
      />}
    </S.Wrapper>
  );
};

export default LateralMenu;
