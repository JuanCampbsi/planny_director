import * as React from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import Select from '../../../components/Select';
import { useAppSelector } from '../../../../../dataflow/hooks';
import { ConteudoModuloClassService } from '../../../services/ConteudoModuloClassService';
import Icon from '../../../assets/icons/IconArquivoPDF.svg';
import Modal from '../../../components/Modal';
import { itemsFilterOpenToogle, setListFilterModulo, setListFiltred } from '../../../../../dataflow/reducers/StateList';
import { useDispatch } from 'react-redux';
import CardViewPdf from '../components/CardViewPdf';
import ViewPdf from '../components/ViewPdf';
import Spinner from '../../../components/Spinner';
const FilterMenu = () => {
    var _a;
    const location = useLocation();
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const filters = useAppSelector((state) => state.state.filters);
    const modulos = useAppSelector((state) => state.state.listModulo);
    const conteudoModulo = new ConteudoModuloClassService();
    const [data, setData] = React.useState();
    const [isDataValue, setIsDataValue] = React.useState(true);
    const [isDataValueNot, setIsDataValueNot] = React.useState(false);
    const dispatch = useDispatch();
    const [isDataSpinner, setIsDataSpinner] = React.useState(false);
    const isDataViewNotItems = !data || (data === null || data === void 0 ? void 0 : data.length) === 0;
    const isDataViewRenderNot = !!data && !!data.length && !filters.isOpenOrDisable;
    const isDataViewLenghtOne = !!data && data.length === 1;
    const isDataViewRender = (!!data && !!data.length && filters.isOpenOrDisable) || isDataViewRenderNot;
    const handleClickFilter = () => {
        setData(undefined);
        setIsDataValueNot(false);
        setIsDataValue(false);
        setIsDataSpinner(true);
        conteudoModulo
            .getConteudoByFilter(filters)
            .then((res) => {
            setIsDataSpinner(false);
            console.log(res);
            setData(res);
            dispatch(setListFiltred(res));
        })
            .catch((err) => {
            setIsDataValueNot(true);
            setIsDataSpinner(false);
            setIsDataValue(false);
        });
    };
    React.useEffect(() => {
        if (modulos) {
            dispatch(setListFilterModulo(modulos.filter((item) => item.Nome === moduleName[0]).reduce((acc, cur) => {
                return Object.assign(acc, cur);
            }, {})));
        }
    }, [modulos]);
    React.useEffect(() => {
        dispatch(itemsFilterOpenToogle(false));
    }, []);
    React.useEffect(() => {
        handleClickFilter();
    }, []);
    const renderItemsFilter = () => {
        var _a, _b, _c, _d, _e;
        const TextSelector = [
            (_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome,
            `Ciclo ${(_b = filters.ciclo) === null || _b === void 0 ? void 0 : _b.Title}`,
            !!filters.corredor ? `Corredor ${(_c = filters.corredor) === null || _c === void 0 ? void 0 : _c.Nome}` : undefined,
            (_d = filters === null || filters === void 0 ? void 0 : filters.complexo) === null || _d === void 0 ? void 0 : _d.Nome,
            (_e = filters === null || filters === void 0 ? void 0 : filters.fase) === null || _e === void 0 ? void 0 : _e.Nome,
        ].filter((item) => item !== undefined);
        return (React.createElement(React.Fragment, null,
            React.createElement(S.WrapperTextFilterView, null, data.length > 0 &&
                TextSelector &&
                TextSelector.map((item, index) => (React.createElement(React.Fragment, null,
                    React.createElement(S.TextViewFilter, null, item),
                    data.length > 0 && index !== TextSelector.length - 1 && React.createElement(S.SetaTextFilterView, null))))),
            React.createElement(S.SeparatorFilterView, null),
            data.length === 1 && (React.createElement(Modal, { isOpen: true }, data.map((item) => (React.createElement(ViewPdf, { url: item.URLConteudo.Url })))))));
    };
    const renderTextItemsFilterNone = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(S.WrapperIframe, null,
                React.createElement(S.WrapperIcon, null,
                    React.createElement(S.Icon, { src: Icon })),
                !!isDataValue && !isDataValueNot ? (React.createElement(React.Fragment, null,
                    React.createElement(S.TitleNotView, null,
                        "Os documentos n\u00E3o podem ser exibidos",
                        React.createElement(S.SubTitleNotView, null,
                            "Para que os documentos apare\u00E7am aqui \u00E9 necess\u00E1rio selecionar pelo menos o",
                            React.createElement(S.TextSpan, null, " Ciclo "),
                            "e o",
                            React.createElement(S.TextSpan, null, " Corredor"),
                            ".")))) : (React.createElement(React.Fragment, null,
                    React.createElement(S.TitleNotView, null,
                        "O conteudo est\u00E1 indispon\u00EDvel para o filtro selecionado",
                        React.createElement(S.SubTitleNotView, null,
                            "Por favor verifique o respons\u00E1vel na se\u00E7\u00E3o ",
                            React.createElement("a", { href: 'https://globalvale.sharepoint.com/:u:/r/teams/PlanDirGestaoAtivos/SitePages/4_Duvidas_Contatos.aspx?csf=1&web=1&e=Fs6IJx' }, "D\u00FAvidas e Contatos"),
                            " ")))),
                React.createElement(S.WrapperText, null))));
    };
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.Banner, null,
            React.createElement(S.YellowBar, null),
            React.createElement(S.ModuloName, null, !!filters && ((_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome))),
        React.createElement(S.FilterMsg, null, "Filtre seu modulo aqui"),
        React.createElement(S.FilterBox, null,
            React.createElement(S.WrapperInput, null,
                React.createElement(S.LabelInput, null,
                    "Ciclo",
                    React.createElement(S.SeparatorInput, null),
                    React.createElement(Select, { type: "ciclo", title: "Selecione", width: "5rem", height: "3.75rem", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '2.8125rem', isFilterSelect: true }))),
            React.createElement(S.WrapperInput, null,
                React.createElement(S.LabelInput, null,
                    "Corredor",
                    React.createElement(S.SeparatorInput, null),
                    React.createElement(Select, { type: "corredor", title: "Selecione", width: "6.5rem", height: "2.625rem", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '2.8125rem', isFilterSelect: true }))),
            React.createElement(S.WrapperInput, null,
                React.createElement(S.LabelInput, null,
                    "Complexo",
                    React.createElement(S.SeparatorInput, null),
                    React.createElement(Select, { type: "complexo", title: "Selecione", width: "6.875rem", height: "2.625rem", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '2.8125rem', isFilterSelect: true }))),
            React.createElement(S.WrapperInput, null,
                React.createElement(S.LabelInput, null,
                    "Fase",
                    React.createElement(S.SeparatorInput, null),
                    React.createElement(Select, { type: "fase", title: "Selecione", width: "6.25rem", height: "2.625rem", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '2.8125rem', isFilterSelect: true }))),
            React.createElement(S.WrapperInput, null,
                React.createElement(S.LabelInput, null,
                    "Cap\u00EDtulo/Modulo",
                    React.createElement(S.SeparatorInput, null),
                    React.createElement(Select, { type: "modulo", title: "Selecione", width: "10.8125rem", height: "2.625rem", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '2.8125rem', isFilterSelect: true, form: false }))),
            React.createElement(S.FilterBtn, { onClick: handleClickFilter }, "Filtrar")),
        isDataViewRender && isDataViewLenghtOne && (React.createElement(React.Fragment, null,
            data.map((item) => {
                return renderItemsFilter();
            }),
            React.createElement(CardViewPdf, { items: data }))),
        isDataViewRender && !isDataViewLenghtOne && (React.createElement(React.Fragment, null,
            data.map((item) => {
                return renderItemsFilter();
            })[0],
            React.createElement(CardViewPdf, { items: data }))),
        isDataViewNotItems && !isDataSpinner && renderTextItemsFilterNone(),
        !!isDataSpinner && (React.createElement(S.WrapperTextArea, { widthProps: "45.25rem" },
            React.createElement(S.WrapperSpinner, null,
                React.createElement(Spinner, null))))));
};
export default FilterMenu;
//# sourceMappingURL=index.js.map