import * as React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import Barra from '../../../../assets/img/BarraModal.png';
import Icon from '../../../../assets/icons/IconEdit.svg';
const OptionBoxConteudoModulo = (props) => {
    const history = useHistory();
    const clickRenderRoutes = (item, id) => {
        history.push(`/${item}`);
    };
    const buttonLink = [
        {
            name: 'Criar Conteudo modulo',
            onclick: () => {
                clickRenderRoutes('FormConteudoModulo/Created', 0);
            },
            id: 0
        },
        {
            name: 'Editar Conteudo modulo',
            onclick: () => {
                clickRenderRoutes('FormConteudoModulo/Edit', 1);
            },
            id: 1
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.WrapperContainer, null,
                React.createElement(S.TopBarContainer, null,
                    React.createElement(S.TitleView, null, "Escolha uma op\u00E7\u00E3o para prosseguir"),
                    React.createElement(S.TopBar, { src: Barra })),
                React.createElement(S.WrapperBox, null,
                    React.createElement(S.WrapperCardView, null, buttonLink.map(item => {
                        return (React.createElement(S.CardView, { onClick: item.onclick },
                            React.createElement(S.Icon, { src: Icon }),
                            React.createElement(S.TitleCard, null, item.name)));
                    })))))));
};
export default OptionBoxConteudoModulo;
//# sourceMappingURL=index.js.map