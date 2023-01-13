import * as React from 'react';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../../../../../../dataflow/hooks';
import Button from '../../../../../components/Button';
import Select from '../../../../../components/Select';
import ElCapacete from '../../../../../assets/img/ElipseCapacete.png';
import IconClose from '../../../../../assets/icons/IconClose.svg';
import IconPrint from '../../../../../assets/icons/IconPrint.svg';
import ModulesBox from '../../ModulesBox';
import Modal from '../../../../../components/Modal';
import { setIsOpenOrDisable } from '../../../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../../../services/ConteudoModuloClassService';
import { AadHttpClient } from '@microsoft/sp-http';
const BoxFilteredMapa = (props) => {
    var _a;
    const filters = useAppSelector((state) => state.state.filters);
    const ciclo = useAppSelector((state) => state.state.filters.ciclo);
    const complexoSelected = useAppSelector((state) => state.state.filters.corredor);
    const complexoSelectedFilter = useAppSelector((state) => { var _a; return (_a = state.state.filters.complexo) === null || _a === void 0 ? void 0 : _a.Id; });
    const conteudoModulo = new ConteudoModuloClassService();
    const modulos = useAppSelector((state) => state.state.listModulo);
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [idNotFound, setIdNotFound] = React.useState(false);
    const dispatch = useAppDispatch();
    const isConclikMouse = () => {
        setIdNotFound(false);
        dispatch(setIsOpenOrDisable(true));
    };
    const handleDownloadPdf = () => {
        setIsLoading(true);
        const filterWithoutModulo = Object.assign({}, filters);
        filterWithoutModulo.modulo = null;
        conteudoModulo
            .getConteudoByFilter(filterWithoutModulo)
            .then((res) => {
            var _a, _b, _c;
            const data = res.map((item) => {
                //const contextoDoTema = modulos.find((item2) => item2?.Nome === item.Modulo.Nome);
                return item.Id;
            });
            const filtersData = {
                corredor: (_a = filters.corredor) === null || _a === void 0 ? void 0 : _a.Nome,
                complexo: (_b = filters.complexo) === null || _b === void 0 ? void 0 : _b.Nome,
                fase: (_c = filters.fase) === null || _c === void 0 ? void 0 : _c.Nome
            };
            if (data.length > 0) {
                props.context.aadHttpClientFactory
                    .getClient('api://e1beb51a-7aef-4370-9b3e-7660cf5c5ff2')
                    .then((client) => {
                    client
                        .post('https://app-pldiretor-dev.azurewebsites.net/Pdf', AadHttpClient.configurations.v1, {
                        body: JSON.stringify({ ids: data, filters: filtersData }),
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Acess-Control-Allow-Origin': 'https://globalvale.sharepoint.com'
                        },
                    })
                        .then((res) => {
                        return res.blob();
                    })
                        .then((data) => {
                        setIsLoading(false);
                        const blob = new Blob([data], { type: 'application/pdf' });
                        const url = window.URL || window.webkitURL;
                        const linkCreated = url.createObjectURL(blob);
                        //window.open(linkCreated)
                        const link = document.createElement('a');
                        link.href = linkCreated;
                        link.download = `Plano Diretor - Consolidado`;
                        link.click();
                        link.remove();
                    })
                        .catch((err) => {
                        setIsLoading(false);
                        console.log(err);
                    });
                })
                    .catch((err) => {
                    setIsLoading(false);
                    console.log(err);
                });
            }
            else {
                setIdNotFound(true);
                dispatch(setIsOpenOrDisable(true));
                setIsLoading(false);
            }
        })
            .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    };
    const isRenderModal = () => {
        var _a, _b;
        const TextSelector = [`Ciclo ${filters.ciclo.Title}`, `Corredor ${filters.corredor.Nome}`, (_a = filters === null || filters === void 0 ? void 0 : filters.complexo) === null || _a === void 0 ? void 0 : _a.Nome, (_b = filters === null || filters === void 0 ? void 0 : filters.fase) === null || _b === void 0 ? void 0 : _b.Nome].filter((item) => item !== undefined);
        return (React.createElement(React.Fragment, null,
            React.createElement(Modal, { isOpen: true },
                React.createElement(S.WrapperModal, null,
                    React.createElement(S.IconClose, { src: IconClose }),
                    React.createElement(S.WrapperTopIcon, { isActive: true }, TextSelector &&
                        TextSelector.map((item, index) => (React.createElement(React.Fragment, null,
                            React.createElement(S.WrapperTopTitle, null, item),
                            TextSelector.length > 0 && index !== TextSelector.length - 1 && React.createElement(S.SetaTextFilterView, null, '>'))))),
                    React.createElement(S.WrapperBoxModal, null,
                        React.createElement(ModulesBox, null))))));
    };
    const typesDisabled = !!complexoSelectedFilter;
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.WrapperTopIcon, null,
                React.createElement(S.WrapperTopTitle, null,
                    "Ciclo ",
                    ciclo && ciclo.Title)),
            React.createElement(S.ContainerWrapper, null,
                React.createElement(S.MapaContainerBg, null,
                    React.createElement(S.MapaContainer, null,
                        React.createElement(S.StyledMapa, { isActive: true }))),
                React.createElement(S.FiltredContainer, null,
                    !!complexoSelected && (React.createElement(React.Fragment, null,
                        React.createElement(S.ContainerCapacete, null,
                            React.createElement(S.ImgCapacete, { src: ElCapacete }),
                            React.createElement(S.WrapperTextBoxCorredor, null,
                                React.createElement(S.TitleFiltredMapa, null, `Corredor ${complexoSelected.Nome}`),
                                React.createElement(S.TextBoxCorredor, null, `${complexoSelected.Estados}`))))),
                    !complexoSelected && React.createElement(S.TitleFiltredMapa, null, "Acesse selecionando no mapa!"),
                    React.createElement(S.Separator, null),
                    React.createElement(S.WrapperInput, null,
                        React.createElement(S.LabelInput, null,
                            "Corredor",
                            React.createElement(S.SeparatorInput, null),
                            React.createElement(Select, { type: "corredor", title: "Selecione aqui um corredor", height: "42px", maxHeightOptions: "573px", bottomOptions: "auto", topOptions: "45px", isMap: true })),
                        React.createElement(S.LabelInput, null,
                            "Complexo",
                            React.createElement(S.SeparatorInput, null),
                            React.createElement(Select, { type: "complexo", title: "Selecione aqui um complexo", height: "42px", maxHeightOptions: "573px", bottomOptions: "auto", topOptions: "45px" })),
                        React.createElement(S.LabelInput, null,
                            "Fase",
                            React.createElement(S.SeparatorInput, null),
                            React.createElement(Select, { type: "fase", title: "Selecione aqui uma fase", height: "42px", maxHeightOptions: "573px", bottomOptions: "auto", topOptions: "45px" })),
                        React.createElement(S.WrapperButton, { disabled: isLoading },
                            React.createElement(S.WrapperButttonPrint, { onClick: () => { var _a; return (!((_a = filters.corredor) === null || _a === void 0 ? void 0 : _a.Nome) || isLoading) ? null : handleDownloadPdf(); }, isDisabled: !((_a = filters.corredor) === null || _a === void 0 ? void 0 : _a.Nome) },
                                React.createElement(S.IconPrint, { src: IconPrint }),
                                React.createElement(S.TextButtonPrint, null, isLoading ? 'Criando pdf...' : 'Imprimir plano diretor')),
                            React.createElement(Button, { backgroundButton: 'var(--amarelo-vale)', hoverButton: '#CFA53D', disabled: !typesDisabled, funcAction: () => {
                                    isConclikMouse();
                                } }, "Visualizar"),
                            filters.isOpenOrDisable && !idNotFound && isRenderModal())))),
            idNotFound && React.createElement(Modal, { titleMenssage: `Não foi possível gerar seu pdf`, SubTitleMenssage: `Não foram encontrados resultados para sua busca`, error: true }))));
};
export default BoxFilteredMapa;
//# sourceMappingURL=Index.js.map