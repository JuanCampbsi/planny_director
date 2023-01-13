import * as React from 'react';
import * as S from './styles';
import Barra from '../../../../assets/img/BarraModal.png';
import Icon from '../../../../assets/icons/IconEdit.svg';
import { useHistory } from 'react-router-dom';

const BoxAdmin = () => {
  const history = useHistory();
  const clickRenderRoutes = (item: string, id: number) => {
    if (id === 5) {
      history.push(`/${item}`);
    } else {
      window.open(`https://globalvale.sharepoint.com/teams/PlanDirGestaoAtivos/${item}`);
    }
  };

  const buttonLink = [
    {
      name: 'Criar/Editar Módulo',
      onclick: (): void => {
        clickRenderRoutes('Lists/Modulo/AllItems.aspx', 0)
      },
      id: 0,
    },
    {
      name: 'Criar/Editar Ciclo',
      onclick: (): void => {
        clickRenderRoutes('Lists/Ciclo/AllItems.aspx', 1);
      },
      id: 1,
    },
    {
      name: 'Criar/Editar Corredor',
      onclick: (): void => {
        clickRenderRoutes('Lists/Corredor/AllItems.aspx', 2)
      },
      id: 2,
    },
    {
      name: 'Criar/Editar Fase',
      onclick: (): void => {
        clickRenderRoutes('Lists/Fase/AllItems.aspx', 3)
      },
      id: 3,
    },
    {
      name: 'Administrar Grupos',
      onclick: (): void => {
        clickRenderRoutes('_layouts/15/user.aspx', 4)
      },
      id: 4,
    },
    {
      name: 'Criar/Editar Conteudo modulo',
      onclick: (): void => {
        clickRenderRoutes('OptionBoxConteudoModulo', 5)
      },
      id: 5,
    },
  ];

  return (
    <>
      <S.Container>
        <S.WrapperContainer>
          <S.TopBarContainer>
            <S.TitleView>Painel Administrativo</S.TitleView>
            <S.TopBar src={Barra} />
          </S.TopBarContainer>

          <S.WrapperBox>
            <S.WrapperCardView>
              {buttonLink.map((item) => {
                return (
                  <S.CardView onClick={item.onclick}>
                    <S.Icon src={Icon} />
                    <S.TitleCard>{item.name}</S.TitleCard>
                  </S.CardView>
                );
              })}
            </S.WrapperCardView>
          </S.WrapperBox>
        </S.WrapperContainer>
      </S.Container>
    </>
  );
};

export default BoxAdmin;
