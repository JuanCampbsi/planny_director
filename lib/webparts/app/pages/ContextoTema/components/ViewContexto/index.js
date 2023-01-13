import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../../../../dataflow/hooks';
import * as S from './styles';
import Icon from '../../../../assets/icons/IconClose.svg';
import Select from '../../../../components/Select';
const ViewContexto = () => {
    var _a;
    const location = useLocation();
    const filters = useAppSelector((state) => state.state.filters);
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const listModuloState = useAppSelector((state) => state.state.listModulo).filter(item => { var _a; return item.Nome === ((_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome); });
    const isNotContexto = listModuloState && !!listModuloState.length;
    const renderNotContextProvider = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(S.WrapperNotConteudo, null,
                React.createElement(S.Icon, { src: Icon }),
                React.createElement(S.TextArea, null,
                    React.createElement(S.TitleNotView, null,
                        "O conteudo est\u00E1 indispon\u00EDvel para o filtro selecionado",
                        React.createElement(S.SubTitleNotView, null,
                            "Por favor verifique o respons\u00E1vel na se\u00E7\u00E3o ",
                            React.createElement("a", { href: 'https://globalvale.sharepoint.com/:u:/r/teams/PlanDirGestaoAtivos/SitePages/4_Duvidas_Contatos.aspx?csf=1&web=1&e=Fs6IJx' }, "D\u00FAvidas e Contatos"),
                            " "))))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.Banner, null,
                React.createElement(S.YellowBar, null),
                React.createElement(S.ModuloName, null, !!filters && ((_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome))),
            React.createElement(S.TitleContext, null, "Contexto do Tema"),
            React.createElement(S.FilterBox, null,
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Ciclo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "ciclo", title: "Selecione", width: "80px", height: "60px", maxHeightOptions: '1200px', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true, isDisableFilter: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Corredor",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "corredor", title: "Selecione", width: "104px", height: "42px", maxHeightOptions: '1200px', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true, isDisableFilter: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Complexo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "complexo", title: "Selecione", width: "110px", height: "42px", maxHeightOptions: '1200px', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true, isDisableFilter: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Fase",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "fase", title: "Selecione", width: "100px", height: "42px", maxHeightOptions: '1200px', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true, isDisableFilter: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Cap\u00EDtulo/Modulo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "modulo", title: "Selecione", width: "10.8125rem", height: "42px", maxHeightOptions: '1200px', bottomOptions: 'auto', topOptions: '45px', isDisableFilter: true, isFilterSelect: true }))),
                React.createElement(S.FilterBtn, null, "Filtrar")),
            React.createElement(S.WrapperTextArea, null, listModuloState && isNotContexto ? (React.createElement(React.Fragment, null, listModuloState.map((item) => {
                return React.createElement(S.TextArea, null, item.ConteudoTema);
            }))) : (React.createElement(React.Fragment, null, renderNotContextProvider()))))));
};
export default ViewContexto;
//# sourceMappingURL=index.js.map