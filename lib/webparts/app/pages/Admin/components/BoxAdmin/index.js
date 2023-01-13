import * as React from 'react';
import * as S from './styles';
import Barra from '../../../../assets/img/BarraModal.png';
import Icon from '../../../../assets/icons/IconEdit.svg';
import { useHistory } from 'react-router-dom';
const BoxAdmin = () => {
    const history = useHistory();
    const clickRenderRoutes = (item, id) => {
        if (id === 5) {
            history.push(`/${item}`);
        }
        else {
            window.open(`https://globalvale.sharepoint.com/teams/PlanDirGestaoAtivos/${item}`);
        }
    };
    const buttonLink = [
        {
            name: 'Criar/Editar Módulo',
            onclick: () => {
                clickRenderRoutes('Lists/Modulo/AllItems.aspx', 0);
            },
            id: 0,
        },
        {
            name: 'Criar/Editar Ciclo',
            onclick: () => {
                clickRenderRoutes('Lists/Ciclo/AllItems.aspx', 1);
            },
            id: 1,
        },
        {
            name: 'Criar/Editar Corredor',
            onclick: () => {
                clickRenderRoutes('Lists/Corredor/AllItems.aspx', 2);
            },
            id: 2,
        },
        {
            name: 'Criar/Editar Fase',
            onclick: () => {
                clickRenderRoutes('Lists/Fase/AllItems.aspx', 3);
            },
            id: 3,
        },
        {
            name: 'Administrar Grupos',
            onclick: () => {
                clickRenderRoutes('_layouts/15/user.aspx', 4);
            },
            id: 4,
        },
        {
            name: 'Criar/Editar Conteudo modulo',
            onclick: () => {
                clickRenderRoutes('OptionBoxConteudoModulo', 5);
            },
            id: 5,
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.WrapperContainer, null,
                React.createElement(S.TopBarContainer, null,
                    React.createElement(S.TitleView, null, "Painel Administrativo"),
                    React.createElement(S.TopBar, { src: Barra })),
                React.createElement(S.WrapperBox, null,
                    React.createElement(S.WrapperCardView, null, buttonLink.map((item) => {
                        return (React.createElement(S.CardView, { onClick: item.onclick },
                            React.createElement(S.Icon, { src: Icon }),
                            React.createElement(S.TitleCard, null, item.name)));
                    })))))));
};
export default BoxAdmin;
//# sourceMappingURL=index.js.map