import * as React from 'react';
import * as S from './styles';
import btnIcon from '../../../assets/icons/IconButtonStructure.svg';
import btnIconHovered from '../../../assets/icons/IconButtonStructureHovered.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../dataflow/hooks';
import { AadHttpClient } from '@microsoft/sp-http';
import { itemsFilterOpenToogle, setIsContextRouterModulo, setIsOpenOrDisable, setIsOpenOrDisableModalSucessOrError } from '../../../../../dataflow/reducers/StateList';
import { ConteudoModuloClassService } from '../../../services/ConteudoModuloClassService';
import Modal from '../../../components/Modal';
const LateralMenu = (props) => {
    var _a, _b, _c;
    const location = useLocation();
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const listModulo = useAppSelector((state) => state.state.filters.modulo);
    const filters = useAppSelector((state) => state.state.filters);
    const listModuloState = useAppSelector((state) => state.state.listModulo).filter(item => { var _a, _b; return ((_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.Nome) ? item.Nome === ((_b = filters.modulo) === null || _b === void 0 ? void 0 : _b.Nome) : moduleName[0]; });
    const dispatch = useAppDispatch();
    const [isValueButtonRender, setIsValueButtonRender] = React.useState(false);
    const isContextRouterModulo = useAppSelector((state) => state.state.isContextRouterModulo);
    const [hoveredItem, setHoveredItem] = React.useState(null);
    const history = useHistory();
    const listFiltred = useAppSelector((state) => { var _a; return (_a = state.state.filters) === null || _a === void 0 ? void 0 : _a.modulo; });
    const moduloNameFiltred = listFiltred === null || listFiltred === void 0 ? void 0 : listFiltred.Nome;
    const modulos = useAppSelector((state) => state.state.listModulo);
    const contextoDoTema = modulos.find((item) => (item === null || item === void 0 ? void 0 : item.Nome) === moduloNameFiltred);
    const [idNotFound, setIdNotFound] = React.useState(false);
    const conteudoModulo = new ConteudoModuloClassService();
    const clickRenderRoutes = (item, id) => {
        dispatch(itemsFilterOpenToogle(false));
        history.push(`/${item}/${(id === 0 || id === 1 || id === 2 || id === 4) ? isContextRouterModulo : ''}`);
    };
    React.useEffect(() => {
        if (!!listModuloState) {
            listModuloState.map((item) => dispatch(setIsContextRouterModulo(item.Nome)));
            setIsValueButtonRender(true);
        }
    }, [listModulo, filters]);
    const dataToSend = {
        contextoDoTema: contextoDoTema === null || contextoDoTema === void 0 ? void 0 : contextoDoTema.ConteudoTema,
        nome: contextoDoTema === null || contextoDoTema === void 0 ? void 0 : contextoDoTema.Nome,
    };
    const filtersData = {
        corredor: (_a = filters.corredor) === null || _a === void 0 ? void 0 : _a.Nome,
        complexo: (_b = filters.complexo) === null || _b === void 0 ? void 0 : _b.Nome,
        fase: (_c = filters.fase) === null || _c === void 0 ? void 0 : _c.Nome
    };
    const handlePrintPDF = () => {
        const filterWithoutModulo = Object.assign({}, filters);
        conteudoModulo
            .getConteudoByFilter(filterWithoutModulo)
            .then((res) => {
            const data = res.map((item) => {
                //const contextoDoTema = modulos.find((item2) => item2?.Nome === item.Modulo.Nome);
                return item.Id;
            });
            if (data.length > 0) {
                dispatch(setIsOpenOrDisableModalSucessOrError(true));
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
                        dispatch(setIsOpenOrDisableModalSucessOrError(false));
                        const blob = new Blob([data], { type: 'application/pdf' });
                        const url = window.URL || window.webkitURL;
                        const linkCreated = url.createObjectURL(blob);
                        //window.open(linkCreated)
                        const link = document.createElement('a');
                        link.href = linkCreated;
                        link.download = `Plano Diretor - ${dataToSend.nome}`;
                        link.click();
                        link.remove();
                    })
                        .catch((err) => {
                        dispatch(setIsOpenOrDisableModalSucessOrError(false));
                        console.log(err);
                    });
                })
                    .catch((err) => {
                    dispatch(setIsOpenOrDisableModalSucessOrError(false));
                    console.log(err);
                });
            }
            else {
                setIdNotFound(true);
                dispatch(setIsOpenOrDisable(true));
            }
        })
            .catch((err) => {
            console.log(err);
        });
        props.context.aadHttpClientFactory
            .getClient('api://e1beb51a-7aef-4370-9b3e-7660cf5c5ff2/user_impersonation')
            .then((client) => {
            client
                .post('https://localhost:7189/Pdf', AadHttpClient.configurations.v1, {
                body: JSON.stringify(dataToSend),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                return res.blob();
            })
                .then((data) => {
                const blob = new Blob([data], { type: 'application/pdf' });
                const url = window.URL || window.webkitURL;
                const linkCreated = url.createObjectURL(blob);
                //window.open(linkCreated)
                const link = document.createElement('a');
                link.href = linkCreated;
                link.download = `Plano Diretor - ${dataToSend.nome}`;
                link.click();
                link.remove();
            })
                .catch((err) => console.log(err));
        })
            .catch((err) => console.log(err));
    };
    const buttonData = [
        {
            name: 'Contexto do Tema',
            onclick: () => {
                clickRenderRoutes('ContextoTema', 0);
            },
            id: 0,
        },
        {
            name: 'Análise crítica do conteúdo no ciclo',
            onclick: () => {
                clickRenderRoutes('AnaliseCritica', 1);
            },
            id: 1,
        },
        {
            name: 'Conteúdo',
            onclick: () => {
                clickRenderRoutes('Conteudo', 2);
            },
            id: 2,
        },
        {
            name: 'Equipe Responsável',
            onclick: () => {
                clickRenderRoutes('EquipeResponsavel', 4);
            },
            id: 3,
        },
        {
            name: 'Imprimir módulo',
            onclick: () => {
                handlePrintPDF();
            },
            id: 4,
        },
    ];
    const handleMouseEnter = (id) => {
        setHoveredItem(id);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    const renderButton = (data, index) => {
        var _a;
        const isHovered = data.id === hoveredItem;
        const isLastIndex = index === buttonData.length - 1;
        return (React.createElement(S.ButtonBox, { disabled: data.id === 4 && (!((_a = filters.corredor) === null || _a === void 0 ? void 0 : _a.Id)), key: data.id, isLastIndex: isLastIndex, onMouseEnter: () => handleMouseEnter(data.id), onMouseLeave: handleMouseLeave, onClick: data.onclick },
            React.createElement(S.ButtonName, { isHovered: isHovered }, data.name),
            React.createElement(S.ButtonIcon, { src: isHovered ? btnIconHovered : btnIcon })));
    };
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.Title, null, "Estrutura"),
        !!isValueButtonRender && buttonData.map((item, index) => renderButton(item, index)),
        idNotFound && React.createElement(Modal, { titleMenssage: `Não foi possível gerar seu pdf`, SubTitleMenssage: idNotFound ? "Não foram encontrados resultados para sua busca" : `Tente novamente`, error: true }),
        React.createElement(Modal, { titleMenssage: `Não foi possível gerar seu pdf`, SubTitleMenssage: idNotFound ? "Não foram encontrados resultados para sua busca" : `Tente novamente`, error: true })));
};
export default LateralMenu;
//# sourceMappingURL=index.js.map