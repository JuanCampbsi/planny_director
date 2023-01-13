import * as React from 'react';
import IconInformatives from '../../../../assets/icons/IconInformatives.svg';
import { format } from 'date-fns';
import Carousel from 'nuka-carousel';
import * as S from './styles';
import { useAppSelector } from '../../../../../../dataflow/hooks';
const Informative = () => {
    const listInformatives = useAppSelector((state) => state.state.listInformativos);
    const listInformativesLabel = useAppSelector((state) => state.state.listInfoLabel)
        .slice()
        .sort(function (x, y) {
        return x.Fixaritem === y.Fixaritem ? 0 : x.Fixaritem ? -1 : 1;
    });
    const linkUrl = (url) => {
        window.open(url, '_blank');
    };
    const renderInformativeItem = (item, index, lenght) => {
        return (React.createElement(S.WrapperInfo, null,
            React.createElement(S.SubWrapperInfo, null,
                React.createElement(S.IconWrapperInfo, { onClick: () => linkUrl(item.UrlLink), src: item.Background.serverUrl + item.Background.serverRelativeUrl }),
                React.createElement(S.SubTextWrapperInfo, { onClick: () => linkUrl(item.UrlLink) },
                    React.createElement(S.SubTitleInfo, null, item.Title),
                    React.createElement(S.TextInfo, null, item.SubTitulo),
                    React.createElement(S.TexDatetInfo, null, `${format(new Date(item.Modified), 'dd.MM.yyyy')}`))),
            index !== lenght && React.createElement(S.Separator, null)));
    };
    const renderCard = (item) => {
        return React.createElement(S.SectionKnowMoreWrapper, { pictureBackground: item.Background.serverUrl + item.Background.serverRelativeUrl });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.CarouselBox, null,
                React.createElement(Carousel, { wrapAround: true, autoplay: true, renderCenterLeftControls: () => React.createElement("span", null), renderCenterRightControls: () => React.createElement("span", null), disableEdgeSwiping: true, defaultControlsConfig: {
                        pagingDotsStyle: {
                            fill: '#007E7A',
                        },
                    } }, listInformatives && listInformatives.map((item) => renderCard(item))),
                listInformatives &&
                    listInformatives.map((item) => (React.createElement(S.KnowMoreWrapper, null,
                        React.createElement(S.TitleKnowMoreWrapper, null, item.Title),
                        React.createElement(S.SubTitleKnowMoreWrapper, null, item.SubTitulo))))[0]),
            React.createElement(S.SectionInformativesItems, null,
                React.createElement(S.WrapperTitleInfo, null,
                    React.createElement(S.IconInfo, { src: IconInformatives }),
                    React.createElement(S.TitleInfo, null, "Informativos")),
                React.createElement(S.Separator, null),
                React.createElement(S.InfoBox, null, listInformativesLabel.map((item, index) => renderInformativeItem(item, index, listInformativesLabel.length - 1)))))));
};
export default Informative;
//# sourceMappingURL=index.js.map