import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import Select from '../../../../components/Select';
import * as S from './styles';
import Icon from '../../../../assets/icons/IconClose.svg';
import IconEntrada from '../../../../assets/icons/IconEntrada.svg';
import { clearGroupsTeamEdicao, clearGroupsTeamLeitura, itemsFilterOpenToogle, setListFilterModulo } from '../../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../../services/ConteudoModuloClassService';
import Spinner from '../../../../components/Spinner';
const ViewResponsibleTeam = () => {
    var _a;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const filters = useAppSelector((state) => state.state.filters);
    const modulo = useAppSelector((state) => state.state.listModulo);
    const gruposEdicao = useAppSelector((state) => state.state.listGroupsTeamsEdicao);
    const gruposLeiura = useAppSelector((state) => state.state.listGroupsTeamsLeitura);
    const contentCritico = modulo.filter((item) => item.Nome === moduleName[0]);
    const [data, setData] = React.useState();
    const conteudoModulo = new ConteudoModuloClassService();
    const [isDataValue, setIsDataValue] = React.useState(true);
    const [isDataValueReload, setIsDataValueReload] = React.useState(true);
    const [isDataSpinner, setIsDataSpinner] = React.useState(false);
    const reload = () => {
        dispatch(clearGroupsTeamEdicao());
        dispatch(clearGroupsTeamLeitura());
    };
    React.useEffect(() => {
        setIsDataValue(true);
        reload();
    }, []);
    const handleClickFilter = () => {
        setIsDataValueReload(false);
        setIsDataValue(true);
        dispatch(clearGroupsTeamEdicao());
        dispatch(clearGroupsTeamLeitura());
        setIsDataSpinner(true);
        conteudoModulo
            .getConteudoByFilter(filters)
            .then((res) => {
            setIsDataSpinner(false);
            dispatch(itemsFilterOpenToogle(false));
            if (res.length === 0) {
                setIsDataValue(false);
            }
        })
            .catch((err) => {
            console.log({ err });
            setIsDataValue(false);
            setIsDataSpinner(false);
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
    const renderNotTextFiltredGroups = () => {
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
    const renderNotTextGroups = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(S.WrapperNotConteudo, null,
                React.createElement(S.Icon, { src: IconEntrada }),
                React.createElement(S.TextArea, null,
                    React.createElement(S.TitleNotView, null, "Selecione os filtros para exibi\u00E7\u00E3o!")))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.Banner, null,
                React.createElement(S.YellowBar, null),
                React.createElement(S.ModuloName, null, !!filters && ((_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome))),
            React.createElement(S.FilterMsg, null, "Para saber a equipe respons\u00E1vel filtre aqui"),
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
            !!data &&
                data.map((item) => {
                    return React.createElement(S.TitleContext, null, item.Title);
                })[0],
            React.createElement(S.WrapperGroupsContainer, null,
                React.createElement(S.WrapperGroups, null,
                    gruposEdicao.length > 0 && !isDataSpinner && (React.createElement(React.Fragment, null,
                        React.createElement(S.TitleGroups, null, "Equipe respons\u00E1vel pela edi\u00E7\u00E3o"),
                        React.createElement(S.SeparatorGroup, null))),
                    gruposEdicao.length > 0 && !isDataSpinner && (React.createElement(React.Fragment, null,
                        React.createElement(S.WrapperTextArea, { heightProps: '30.575rem' }, gruposEdicao === null || gruposEdicao === void 0 ? void 0 : gruposEdicao.map((item) => {
                            return (React.createElement(S.WrapperProfilePicture, null,
                                React.createElement(S.UserContainer, null,
                                    React.createElement(S.UserPictureContainer, null,
                                        React.createElement(S.ProfilePicture, { src: item.Url })),
                                    React.createElement(S.TextArea, null, item.Title))));
                        }))))),
                React.createElement(S.WrapperGroups, null,
                    gruposLeiura.length > 0 && !isDataSpinner && (React.createElement(React.Fragment, null,
                        React.createElement(S.TitleGroups, null, "Visualizadores do conte\u00FAdo do m\u00F3dulo"),
                        React.createElement(S.SeparatorGroup, null))),
                    gruposLeiura.length > 0 && !isDataSpinner && (React.createElement(React.Fragment, null,
                        React.createElement(S.WrapperTextArea, { heightProps: '30.575rem' }, gruposLeiura === null || gruposLeiura === void 0 ? void 0 : gruposLeiura.map((item) => {
                            return (React.createElement(S.WrapperProfilePicture, null,
                                React.createElement(S.UserContainer, null,
                                    React.createElement(S.UserPictureContainer, null,
                                        React.createElement(S.ProfilePicture, { src: item.Url })),
                                    React.createElement(S.TextArea, null, item.Title))));
                        })))))),
            (gruposLeiura.length === 0 || gruposEdicao.length === 0) && !isDataSpinner && (React.createElement(S.WrapperTextArea, { widthProps: "45.25rem" },
                !isDataValue && renderNotTextFiltredGroups(),
                !!isDataValueReload && renderNotTextGroups())),
            !!isDataSpinner && (React.createElement(S.WrapperTextArea, { widthProps: "45.25rem" },
                React.createElement(S.WrapperSpinner, null,
                    React.createElement(Spinner, null)))))));
};
export default ViewResponsibleTeam;
//# sourceMappingURL=index.js.map