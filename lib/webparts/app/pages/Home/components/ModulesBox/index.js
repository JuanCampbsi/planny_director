/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import { typesModulos } from '../../../../interfaces/IModuloItems';
import * as S from './styles';
import entrada from '../../../../assets/icons/IconEntrada.svg';
import manutencao from '../../../../assets/icons/IconManutencaoEOperacao.svg';
import saida from '../../../../assets/icons/IconSaida.svg';
import { Link } from 'react-router-dom';
import { setIsContextRouterModulo, setListFilterModulo } from '../../../../../../dataflow/reducers/StateList';
const ModulesBox = () => {
    const modulos = useAppSelector((state) => state.state.listModulo);
    const isModalOpen = useAppSelector((state) => state.state.filters.isOpenOrDisable);
    const modulosEntrada = modulos.filter((item) => item.TipoModulo === typesModulos.entrada);
    const modulosManutecao = modulos.filter((item) => item.TipoModulo === typesModulos.manutencao);
    const modulosSaida = modulos.filter((item) => item.TipoModulo === typesModulos.saida);
    const dispatch = useAppDispatch();
    const modulosColumn = [
        {
            infos: {
                name: 'Entradas',
                src: entrada,
                id: 1,
            },
            data: modulosEntrada,
        },
        {
            infos: {
                name: 'Manutenção e Operação',
                src: manutencao,
                id: 2,
            },
            data: modulosManutecao,
        },
        {
            infos: {
                name: 'Saída',
                src: saida,
                id: 3,
            },
            data: modulosSaida,
        },
    ];
    const isContextRouterModulo = (item) => {
        dispatch(setIsContextRouterModulo(item));
    };
    const handleSetFilterModule = (value) => {
        dispatch(setListFilterModulo(value));
        isContextRouterModulo(value.Nome.trim());
    };
    const renderColumn = (obj) => {
        return (React.createElement(S.Column, null,
            React.createElement(S.TopBox, null,
                React.createElement(S.ColumnNameBox, null,
                    React.createElement(S.ImgContainer, null,
                        React.createElement(S.ColumnImg, { src: obj.infos.src, alt: 'icone representando ' + obj.infos.name })),
                    React.createElement(S.ColumnName, null, obj.infos.name))),
            React.createElement(S.ModulosWrapper, null, obj.data.map((item) => {
                var _a, _b;
                return (React.createElement(Link, { to: `/${isModalOpen ? 'Conteudo' : 'ContextoTema'}/` + item.Nome.trim(), onClick: () => handleSetFilterModule(item), role: "button" },
                    React.createElement(S.ModulosBox, { key: item.Id },
                        React.createElement(S.ModuloImg, { src: ((_a = item.Icone) === null || _a === void 0 ? void 0 : _a.serverUrl) + ((_b = item.Icone) === null || _b === void 0 ? void 0 : _b.serverRelativeUrl) }),
                        React.createElement(S.ModuloName, null, item.Nome))));
            }))));
    };
    return React.createElement(S.Wrapper, null, modulosColumn.map((item) => renderColumn(item)));
};
export default ModulesBox;
//# sourceMappingURL=index.js.map