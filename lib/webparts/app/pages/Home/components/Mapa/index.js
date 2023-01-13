import * as React from 'react';
import * as S from './styles';
import IconeMouse from '../../../../assets/icons/IconeMouse.svg';
import BoxFilteredMapa from './BoxFilteredMapa/Index';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import { setListFilterCiclo } from '../../../../../../dataflow/reducers/StateList';
import SetaLeft from '../../../../assets/icons/SetaLeft.svg';
import SetaRight from '../../../../assets/icons/SetaRight.svg';
const Mapa = (props) => {
    const dispatch = useAppDispatch();
    const ciclo = useAppSelector((state) => state.state.listCiclo);
    const cicloCurrent = useAppSelector((state) => state.state.filters.ciclo);
    const scrollRef = React.useRef(null);
    const [timeLineActive, setTimeLineActive] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(0);
    console.log('ciclo', ciclo);
    const isConclikMouseTimeLine = (itemCiclo) => {
        dispatch(setListFilterCiclo(itemCiclo));
        setIsHovered(itemCiclo.Id);
    };
    const executeScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };
    const handleMouseEnter = () => {
        setTimeLineActive(true);
    };
    const handleMouseLeave = () => {
        setTimeLineActive(false);
    };
    const RenderCicleItem = (item, index) => {
        return (React.createElement(S.CicloElipse, { key: item.Id, id: `${item.Id}`, onClick: () => isConclikMouseTimeLine(item), isHovered: (item === null || item === void 0 ? void 0 : item.Id) === isHovered || (item === null || item === void 0 ? void 0 : item.Id) === (cicloCurrent === null || cicloCurrent === void 0 ? void 0 : cicloCurrent.Id) }, item.Title));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(S.WrapperLabelTimeline, null,
                React.createElement(S.IconTimeline, { src: IconeMouse }),
                React.createElement(S.LabelTimelineTitle, null, "Escolha o Ciclo Plurianual para consultar o Plano Diretor")),
            React.createElement(S.TimeLine, null,
                React.createElement(S.Line, null),
                React.createElement(S.ButtonLeftContainer, { onClick: () => executeScroll(-2000) },
                    React.createElement(S.Left, { src: SetaLeft, isActive: timeLineActive })),
                React.createElement(S.TimeLineWrapper, { ref: scrollRef },
                    React.createElement(S.CicloElipseWrapper, null, ciclo && ciclo.map((item, index) => RenderCicleItem(item, index)))),
                React.createElement(S.ButtonRightContainer, { onClick: () => executeScroll(2000) },
                    React.createElement(S.Right, { src: SetaRight, isActive: timeLineActive }))),
            React.createElement(BoxFilteredMapa, Object.assign({}, props)))));
};
export default React.memo(Mapa);
//# sourceMappingURL=index.js.map