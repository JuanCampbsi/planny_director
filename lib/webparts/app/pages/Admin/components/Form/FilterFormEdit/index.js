import * as React from 'react';
import * as S from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../../dataflow/hooks';
import { setListFiltred } from '../../../../../../../dataflow/reducers/StateList';
import Select from '../../../../../components/Select';
import { ConteudoModuloClassService } from '../../../../../services/ConteudoModuloClassService';
import CardViewEdit from './CardViewEdit';
import Icon from '../../../../../assets/icons/Lupa.svg';
import Spinner from '../../../../../components/Spinner';
import Button from '../../../../../components/Button';
const FilterFormEdit = (props) => {
    const location = useLocation();
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const filters = useAppSelector((state) => state.state.filters);
    const modulos = useAppSelector((state) => state.state.listModulo);
    const conteudoModulo = new ConteudoModuloClassService();
    const [data, setData] = React.useState();
    const [isDataValue, setIsDataValue] = React.useState(true);
    const [isDataValueNot, setIsDataValueNot] = React.useState(false);
    const dispatch = useAppDispatch();
    const [isDataSpinner, setIsDataSpinner] = React.useState(false);
    const history = useHistory();
    const clickRenderRoutes = () => {
        history.push(`/FormConteudoModulo/Created`);
    };
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
            console.log(err);
        });
    };
    const isDataViewNotItems = !data || (data === null || data === void 0 ? void 0 : data.length) === 0;
    const isDataViewRenderNot = !!data && !!data.length && !filters.isOpenOrDisable;
    const isDataViewRender = (!!data && !!data.length && filters.isOpenOrDisable) || (isDataViewRenderNot);
    const renderTextItemsFilterNone = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(S.ContainerIframe, null,
                React.createElement(S.WrapperIframe, null,
                    React.createElement(S.WrapperIcon, null,
                        React.createElement(S.Icon, { src: Icon })),
                    !!isDataValue && !isDataValueNot ? (React.createElement(React.Fragment, null,
                        React.createElement(S.TitleNotView, null,
                            "Os itens n\u00E3o podem ser exibidos",
                            React.createElement(S.SubTitleNotView, null,
                                "Para que os itens do conteudo apare\u00E7am aqui \u00E9 necess\u00E1rio selecionar pelo menos o",
                                React.createElement(S.TextSpan, null, " Modulo "),
                                ".")))) : (React.createElement(React.Fragment, null,
                        React.createElement(S.TitleNotView, null,
                            "O conteudo est\u00E1 indispon\u00EDvel para o filtro selecionado",
                            React.createElement(S.SubTitleNotView, null,
                                "Por favor verifique o respons\u00E1vel na se\u00E7\u00E3o ",
                                React.createElement("a", { href: 'https://globalvale.sharepoint.com/:u:/r/teams/PlanDirGestaoAtivos/SitePages/4_Duvidas_Contatos.aspx?csf=1&web=1&e=Fs6IJx' }, "D\u00FAvidas e Contatos"),
                                " ")))),
                    React.createElement(S.WrapperText, null)))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.WrapperButton, null,
                React.createElement(Button, { backgroundButton: '#007E7A', hoverButton: '#007e7ac2', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => clickRenderRoutes() }, "Criar Conteudo")),
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
                        React.createElement(Select, { type: "corredor", title: "Selecione", width: "120px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Complexo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "complexo", title: "Selecione", width: "190px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Fase",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "fase", title: "Selecione", width: "190px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.WrapperInput, null,
                    React.createElement(S.LabelInput, null,
                        "Cap\u00EDtulo/Modulo",
                        React.createElement(S.SeparatorInput, null),
                        React.createElement(Select, { type: "modulo", title: "Selecione", width: "250px", height: "42px", maxHeightOptions: '25rem', bottomOptions: 'auto', topOptions: '45px', isFilterSelect: true }))),
                React.createElement(S.FilterBtn, { onClick: handleClickFilter }, "Filtrar")),
            isDataViewRender && !isDataViewNotItems && (React.createElement(React.Fragment, null,
                React.createElement(CardViewEdit, { items: data, context: props }))),
            isDataViewNotItems && !isDataSpinner && renderTextItemsFilterNone(),
            !!isDataSpinner && !filters.isOpenOrDisableModalSucessOrError && (React.createElement(S.WrapperSpinner, null,
                React.createElement(Spinner, null))))));
};
export default FilterFormEdit;
//# sourceMappingURL=index.js.map