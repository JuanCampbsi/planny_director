import * as React from 'react';
import * as S from './styles';
import IconeMouse from '../../../../assets/icons/IconeMouse.svg';
import BoxFilteredMapa from './BoxFilteredMapa/Index';
import { ICicloItemsFormated } from '../../../../interfaces/ICicloItems';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import { setListFilterCiclo } from '../../../../../../dataflow/reducers/StateList';
import SetaLeft from '../../../../assets/icons/SetaLeft.svg';
import SetaRight from '../../../../assets/icons/SetaRight.svg';
import { IAppProps } from '../../../../interfaces/IAppProps';

const Mapa = (props: IAppProps) => {
  const dispatch = useAppDispatch();
  const ciclo: ICicloItemsFormated[] = useAppSelector((state) => state.state.listCiclo);
  const cicloCurrent = useAppSelector((state) => state.state.filters.ciclo);
  const scrollRef = React.useRef(null);
  const [timeLineActive, setTimeLineActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(0);

  console.log('ciclo', ciclo);
  const isConclikMouseTimeLine = (itemCiclo?: ICicloItemsFormated) => {
    dispatch(setListFilterCiclo(itemCiclo));
    setIsHovered(itemCiclo.Id);
  };

  const executeScroll = (scrollOffset: number) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const handleMouseEnter = () => {
    setTimeLineActive(true);
  };

  const handleMouseLeave = () => {
    setTimeLineActive(false);
  };

  const RenderCicleItem = (item: ICicloItemsFormated, index: any) => {
    return (
      <S.CicloElipse
        key={item.Id}
        id={`${item.Id}`}
        onClick={() => isConclikMouseTimeLine(item)}
        isHovered={item?.Id === isHovered || item?.Id === cicloCurrent?.Id}
      >
        {item.Title}
      </S.CicloElipse>
    );
  };

  return (
    <>
      <S.Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <S.WrapperLabelTimeline>
          <S.IconTimeline src={IconeMouse} />
          <S.LabelTimelineTitle>Escolha o Ciclo Plurianual para consultar o Plano Diretor</S.LabelTimelineTitle>
        </S.WrapperLabelTimeline>
        <S.TimeLine>
          <S.Line />
          <S.ButtonLeftContainer onClick={() => executeScroll(-2000)}>
            <S.Left src={SetaLeft} isActive={timeLineActive} />
          </S.ButtonLeftContainer>
          <S.TimeLineWrapper ref={scrollRef}>
            <S.CicloElipseWrapper>{ciclo && ciclo.map((item, index) => RenderCicleItem(item, index))}</S.CicloElipseWrapper>
          </S.TimeLineWrapper>
          <S.ButtonRightContainer onClick={() => executeScroll(2000)}>
            <S.Right src={SetaRight} isActive={timeLineActive} />
          </S.ButtonRightContainer>
        </S.TimeLine>
        <BoxFilteredMapa {...props} />
      </S.Container>
    </>
  );
};

export default React.memo(Mapa);
