import * as React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import Barra from '../../../../assets/img/BarraModal.png';
import Icon from '../../../../assets/icons/IconEdit.svg';
import { IAppProps } from '../../../../interfaces/IAppProps';

const OptionBoxConteudoModulo = (props?: IAppProps) => {
  const history = useHistory();
  const clickRenderRoutes = (item: string, id: number) => {
    history.push(`/${item}`);
  }

  const buttonLink = [
    {
      name: 'Criar Conteudo modulo',
      onclick: (): void => {
        clickRenderRoutes('FormConteudoModulo/Created', 0)
      },
      id: 0
    },
    {
      name: 'Editar Conteudo modulo',
      onclick: (): void => {
        clickRenderRoutes('FormConteudoModulo/Edit', 1)
      },
      id: 1
    },
  ]
  return (
    <>
      <S.Container>
        <S.WrapperContainer>
          <S.TopBarContainer >
            <S.TitleView>Escolha uma opção para prosseguir</S.TitleView>
            <S.TopBar src={Barra} />
          </S.TopBarContainer>

          <S.WrapperBox>
            <S.WrapperCardView >
              {buttonLink.map(item => {
                return (
                  <S.CardView onClick={item.onclick}>
                    <S.Icon src={Icon} />
                    <S.TitleCard>{item.name}</S.TitleCard>
                  </S.CardView>
                )
              })}
            </S.WrapperCardView>
          </S.WrapperBox>
        </S.WrapperContainer>
      </S.Container>
    </>
  );
}

export default OptionBoxConteudoModulo;