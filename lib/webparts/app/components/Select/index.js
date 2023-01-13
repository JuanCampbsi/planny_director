var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import { clearFilterComplexosArray, clearFilterFaseArray, setListFilterCiclo, setListFilterComplexo, setListFilterCorredor, setListFilterFase, setListFilterModulo, setListFilterTiposConteudo, itemsFilterOpenToogle, itemOpenToogleClosed, } from '../../../../dataflow/reducers/StateList';
import { setSelectedCorredor } from '../../../../dataflow/reducers/EventMapa';
import * as S from './styles';
const Select = (_a) => {
    var _b, _c, _d, _e;
    var { form, title, width, height, maxHeightOptions, bottomOptions, topOptions, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingRight, paddingLeft, isTogleSelect, isDisableFilter, disabled, isFilterSelect, children, type, multi, setState, disabledCiclo, isMap } = _a, rest = __rest(_a, ["form", "title", "width", "height", "maxHeightOptions", "bottomOptions", "topOptions", "marginTop", "marginBottom", "marginLeft", "marginRight", "paddingTop", "paddingBottom", "paddingRight", "paddingLeft", "isTogleSelect", "isDisableFilter", "disabled", "isFilterSelect", "children", "type", "multi", "setState", "disabledCiclo", "isMap"]);
    const [toogleSelect, setToogleSelect] = React.useState(false);
    const [value, setValue] = useState('');
    const complexoSelected = useAppSelector((state) => { var _a; return (_a = state.state.filters.complexo) === null || _a === void 0 ? void 0 : _a.Id; });
    const selectedCorredor = useAppSelector((state) => { var _a, _b; return (_b = (_a = state.state.filters) === null || _a === void 0 ? void 0 : _a.corredor) === null || _b === void 0 ? void 0 : _b.Id; });
    const openToogle = useAppSelector((state) => state.state.filters.openToogle);
    const ciclos = useAppSelector((state) => state.state.listCiclo);
    const modulos = useAppSelector((state) => state.state.listModulo);
    const corredores = useAppSelector((state) => state.state.listCorredor);
    const complexos = useAppSelector((state) => state.state.listComplexo);
    const fases = useAppSelector((state) => state.state.listFase);
    const dispatch = useDispatch();
    const filters = useAppSelector((state) => state.state.filters);
    const tiposConteudo = useAppSelector((state) => state.state.listTiposConteudos);
    // const tiposConteudo = tiposConteudoAll.filter(i => filters.modulo?.TiposConteudo.map(i => i.Title).includes(i.Title) )
    const typesDisabled = () => {
        const response = {
            corredor: false || isDisableFilter,
            complexo: selectedCorredor === undefined || selectedCorredor === null || isDisableFilter,
            fase: complexoSelected === undefined || complexoSelected === null || isDisableFilter,
            ciclo: false || isDisableFilter,
            tiposConteudo: false,
            modulo: false || isDisableFilter
        };
        return response[type];
    };
    const onClicks = (item) => {
        const resolveMap = isMap ? dispatch(setSelectedCorredor(item["Id"])) : null;
        const response = {
            corredor: () => dispatch(setListFilterCorredor(item)) &&
                dispatch(setListFilterComplexo(null)) &&
                dispatch(setListFilterFase(null)) &&
                dispatch(clearFilterComplexosArray()) &&
                dispatch(clearFilterFaseArray()) &&
                resolveMap,
            complexo: () => dispatch(setListFilterComplexo(item)) && dispatch(setListFilterFase(null)),
            fase: () => dispatch(setListFilterFase(item)),
            ciclo: () => dispatch(setListFilterCiclo(item)) &&
                dispatch(setListFilterCorredor(null)) &&
                dispatch(setListFilterComplexo(null)) &&
                dispatch(setListFilterFase(null)),
            modulo: () => dispatch(setListFilterModulo(item)) &&
                dispatch(setListFilterTiposConteudo(null)),
            tiposConteudo: () => dispatch(setListFilterTiposConteudo(item)),
        };
        return response[type]();
    };
    const lists = () => {
        const arrays = {
            corredor: corredores,
            complexo: complexos === null || complexos === void 0 ? void 0 : complexos.filter((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.Corredor) === null || _a === void 0 ? void 0 : _a.Id) == selectedCorredor; }),
            fase: fases.filter((item) => {
                var _a;
                return ((_a = item.Complexo) === null || _a === void 0 ? void 0 : _a.Id) == complexoSelected;
            }),
            ciclo: ciclos,
            modulo: modulos,
            tiposConteudo: tiposConteudo.filter((i) => { var _a; return (_a = filters.modulo) === null || _a === void 0 ? void 0 : _a.TiposConteudo.map((i) => i === null || i === void 0 ? void 0 : i.Title).includes(i === null || i === void 0 ? void 0 : i.Title); }),
        };
        return arrays[type];
    };
    const handleClickToogle = () => {
        dispatch(itemOpenToogleClosed(true));
        if (!typesDisabled() && !disabledCiclo) {
            setToogleSelect((state) => !state);
            dispatch(itemsFilterOpenToogle(!openToogle));
        }
    };
    const handleClickOption = (item) => {
        setToogleSelect(false);
        setValue(item.Nome);
        onClicks(item);
    };
    useEffect(() => {
        setToogleSelect(false);
        setValue('');
    }, [value]);
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, { width: width, height: height, marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, paddingTop: paddingTop, paddingBottom: paddingBottom, paddingRight: paddingRight, paddingLeft: paddingLeft, disabled: typesDisabled(), isToogle: openToogle, onClick: () => handleClickToogle() },
            React.createElement(S.WrapperOptionValue, null,
                React.createElement(S.Value, { isYellow: filters[type] && !!filters[type].Nome, disabled: disabled, isFilterSelect: isFilterSelect }, filters[type] && filters[type].Nome
                    ? !!form && type === 'ciclo'
                        ? (_b = filters.cicloCurrent) === null || _b === void 0 ? void 0 : _b.Title
                        : type === ('ciclo' || type === 'tiposConteudo')
                            ? (_c = filters[type]) === null || _c === void 0 ? void 0 : _c.Title
                            : (_d = filters[type]) === null || _d === void 0 ? void 0 : _d.Nome
                    : title)),
            !disabledCiclo && React.createElement(S.SetaInput, { isToogle: toogleSelect, stroke: 'var(--cinza-escuro)' }),
            toogleSelect && (React.createElement(S.OptionsBox, { width: width, maxHeightOptions: maxHeightOptions, bottomOptions: bottomOptions, topOptions: topOptions }, (_e = lists()) === null || _e === void 0 ? void 0 : _e.map((item, index, number) => (React.createElement(S.Option, { key: item.Id, onClick: () => handleClickOption(item), isAfeter: (index !== number.length - 1) ? false : true },
                React.createElement(S.OptionValue, null, type === 'ciclo' ? item === null || item === void 0 ? void 0 : item.Title : type === 'modulo' && !form ? `[${item === null || item === void 0 ? void 0 : item.OrdemImpressao}] - ` + (item === null || item === void 0 ? void 0 : item.Nome) : item === null || item === void 0 ? void 0 : item.Nome)))))),
            children)));
};
export default Select;
//# sourceMappingURL=index.js.map