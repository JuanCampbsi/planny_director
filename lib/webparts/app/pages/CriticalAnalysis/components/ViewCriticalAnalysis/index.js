import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import Select from '../../../../components/Select';
import * as S from './styles';
import Icon from '../../../../assets/icons/IconClose.svg';
import IconEntrada from '../../../../assets/icons/IconEntrada.svg';
import { setListFilterModulo } from '../../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../../services/ConteudoModuloClassService';
const ViewCriticalAnalysis = () => {
    var _a;
    const location = useLocation();
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const filters = useAppSelector((state) => state.state.filters);
    const modulo = useAppSelector((state) => state.state.listModulo);
    const contentCritico = modulo.filter((item) => item.Nome === moduleName[0]);
    const [data, setData] = React.useState([]);
    const conteudoModulo = new ConteudoModuloClassService();
    const [isDataValue, setIsDataValue] = React.useState(true);
    const [valueIsNull, setValueIsNull] = React.useState();
    const [isNotFirstTime, setNotFirstTime] = React.useState(true);
    const dispatch = useAppDispatch();
    const handleClickFilter = () => {
        setNotFirstTime(false);
        conteudoModulo
            .getConteudoByFilter(filters)
            .then((res) => {
            console.log("resAnalise", res);
            const analisecritica = res.map(item => item.AnaliseCritica !== null ? item.AnaliseCritica : '');
            setData(analisecritica);
            //dispatch(setListFiltred(res))
            setIsDataValue(res.map(item => item.AnaliseCritica).length === 0);
            setValueIsNull(analisecritica.length === 0);
        })
            .catch((err) => {
            console.log(err);
            setValueIsNull(true);
        });
    };
    React.useEffect(() => {
        if (contentCritico) {
            contentCritico.map((item) => dispatch(setListFilterModulo(item)));
        }
    }, []);
    React.useEffect(() => {
        handleClickFilter();
    }, []);
    const renderNotTextFiltredAnalisys = () => {
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
    const renderNotTextAnalisys = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(S.WrapperNotConteudo, null,
                React.createElement(S.Icon, { src: IconEntrada }),
                React.createElement(S.TextArea, null,
                    React.createElement(S.TitleNotView, null, "Selecione os filtros para exibi\u00E7\u00E3o dos conte\u00FAdos!")))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.Banner, null,
                React.createElement(S.YellowBar, null),
                React.createElement(S.ModuloName, null, !!filters && ((_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome))),
            React.createElement(S.FilterMsg, null, "Para saber a an\u00E1lise cr\u00EDtica do conte\u00FAdo no ciclo filtre aqui"),
            React.createElement(S.FilterBox, null,
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Ciclo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "ciclo", title: "Selecione", width: "80px", height: "60px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Corredor",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "corredor", title: "Selecione", width: "104px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Complexo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "complexo", title: "Selecione", width: "110px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Fase",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "fase", title: "Selecione", width: "100px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Cap\u00EDtulo/Modulo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "modulo", title: "Selecione", width: "10.8125rem", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.FilterBtn, { onClick: handleClickFilter }, "Filtrar")),
            React.createElement(S.WrapperTextArea, null,
                (data === null || data === void 0 ? void 0 : data.length) > 0 && !valueIsNull && (React.createElement(React.Fragment, null, data.map((item) => {
                    return React.createElement(S.TextArea, null,
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: item } }));
                })[0])),
                valueIsNull && renderNotTextFiltredAnalisys(),
                isNotFirstTime && renderNotTextAnalisys()))));
};
export default ViewCriticalAnalysis;
//# sourceMappingURL=index.js.map