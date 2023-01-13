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
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import { clearAllComplexosSelected, clearAllFasesSelected, clearFilterComplexosArray, clearFilterFaseArray, itemOpenToogleClosed, itemOpenToogleMultiSelectComplexo, itemOpenToogleMultiSelectFase, setFilterComplexosArray, setFilterFaseArray, setListFilterComplexo, setListFilterFase } from '../../../../dataflow/reducers/StateList';
import * as S from './styles';
import { Checkbox } from '@fluentui/react';
const MultiSelect = (_a) => {
    var _b;
    var { title, width, height, maxHeightOptions, bottomOptions, topOptions, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingRight, paddingLeft, isTogleSelect, isClear, disabled, children, type } = _a, rest = __rest(_a, ["title", "width", "height", "maxHeightOptions", "bottomOptions", "topOptions", "marginTop", "marginBottom", "marginLeft", "marginRight", "paddingTop", "paddingBottom", "paddingRight", "paddingLeft", "isTogleSelect", "isClear", "disabled", "children", "type"]);
    const [toogleSelect, setToogleSelect] = React.useState(false);
    const [toogleSelectFase, setToogleSelectFase] = React.useState(false);
    const [allComplexosSelected, setAllComplexosSelected] = React.useState(false);
    const [allFasesSelected, setAllFasesSelected] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState(false);
    const complexoSelected = useAppSelector((state) => state.state.filters.complexoArray.map(item => item.Id));
    const complexoSelectedComplete = useAppSelector((state) => state.state.filters.complexoArray);
    const faseSelectedComplete = useAppSelector((state) => state.state.filters.faseArray);
    const selectedCorredor = useAppSelector((state) => { var _a, _b; return (_b = (_a = state.state.filters) === null || _a === void 0 ? void 0 : _a.corredor) === null || _b === void 0 ? void 0 : _b.Id; });
    const complexos = useAppSelector((state) => state.state.listComplexo);
    const fases = useAppSelector((state) => state.state.listFase);
    const dispatch = useDispatch();
    const filters = useAppSelector((state) => state.state.filters);
    const openToogleClosed = useAppSelector((state) => state.state.filters.openToogleClosed);
    const typesDisabled = () => {
        const response = {
            complexo: selectedCorredor === undefined || selectedCorredor === null,
            fase: complexoSelected.length === 0,
        };
        return response[type];
    };
    const onClicks = (item) => {
        const response = {
            complexo: () => dispatch(setListFilterComplexo(item)),
            fase: () => dispatch(setListFilterFase(item)),
        };
        return response[type]();
    };
    const listsComplexo = complexos === null || complexos === void 0 ? void 0 : complexos.filter((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.Corredor) === null || _a === void 0 ? void 0 : _a.Id) == selectedCorredor; });
    const listFases = fases.filter((item) => complexoSelected === null || complexoSelected === void 0 ? void 0 : complexoSelected.includes(item === null || item === void 0 ? void 0 : item.Complexo.Id));
    const onClicksComplexo = () => {
        if (!allComplexosSelected) {
            const Ids = filters.complexoArray.map((item) => item.Id);
            for (let complexos of listsComplexo) {
                if (Ids.includes(complexos.Id) === false) {
                    dispatch(setFilterComplexosArray(complexos));
                }
            }
            setToogleSelect((state) => !state);
            dispatch(clearAllComplexosSelected(true));
        }
    };
    const onClicksFase = () => {
        if (!allFasesSelected) {
            const Ids = filters.faseArray.map((item) => item.Id);
            for (let fases of listFases) {
                if (Ids.includes(fases.Id) === false) {
                    dispatch(setFilterFaseArray(fases));
                }
            }
            setToogleSelectFase((state) => !state);
            dispatch(clearAllFasesSelected(true));
        }
    };
    const handleClickToogle = () => {
        console.log({ toogleSelect });
        console.log({ toogleSelectFase });
        if (!!filters.openToogleClosed) {
            setToogleSelect(false);
            setToogleSelectFase(false);
        }
        dispatch(itemOpenToogleClosed(false));
        if ((type === 'complexo' && filters.corredor)) {
            setToogleSelectFase(false);
            setToogleSelect((state) => !state);
            dispatch(itemOpenToogleMultiSelectComplexo(false));
            dispatch(itemOpenToogleMultiSelectFase(true));
            setIsSelected((state) => !state);
        }
        if ((type === "fase" && filters.complexoArray.length > 0)) {
            setToogleSelect(false);
            setToogleSelectFase((state) => !state);
            dispatch(itemOpenToogleMultiSelectFase(false));
            dispatch(itemOpenToogleMultiSelectComplexo(true));
        }
        if (filters.openToogleMultiSelectComplexo) {
            setToogleSelect(true);
        }
        if (filters.openToogleMultiSelectFase) {
            setToogleSelectFase(true);
        }
    };
    const handleClickOption = (item) => {
        onClicks(item);
        if (type === "complexo") {
            const complexoSelectedCompleteCopy = complexoSelectedComplete.filter((value) => Object.keys(value).length !== 0 && value.Id !== item.Id);
            if (!!complexoSelectedCompleteCopy) {
                dispatch(clearFilterComplexosArray());
                dispatch(clearFilterFaseArray());
                complexoSelectedCompleteCopy.forEach(valueNew => {
                    dispatch(setFilterComplexosArray(valueNew));
                });
            }
            if (complexoSelectedCompleteCopy.length === 0) {
                setIsSelected((state) => !state);
                setToogleSelectFase(false);
            }
            const ids = filters.complexoArray.map(item => item.Id);
            const canInsert = ids.includes(item.Id);
            if (canInsert === false) {
                dispatch(setFilterComplexosArray(item));
            }
        }
        if (type === "fase") {
            const faseSelectedCompleteCopy = faseSelectedComplete.filter((value) => Object.keys(value).length !== 0 && value.Id !== item.Id);
            if (!!faseSelectedCompleteCopy) {
                dispatch(clearFilterFaseArray());
                faseSelectedCompleteCopy.forEach(valueNew => {
                    dispatch(setFilterFaseArray(valueNew));
                });
            }
            const ids = filters.faseArray.map(item => item.Id);
            const canInsert = ids.includes(item.Id);
            if (canInsert === false) {
                dispatch(setFilterFaseArray(item));
            }
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, { width: width, height: height, marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, paddingTop: paddingTop, paddingBottom: paddingBottom, paddingRight: paddingRight, paddingLeft: paddingLeft, disabled: typesDisabled(), isToogle: type === 'complexo' ? toogleSelect : toogleSelectFase, isContent: type === 'complexo' ? filters.complexoArray.map(item => ` ${item.Nome}`).toString() : filters.faseArray.map(item => { var _a; return ` ${((item === null || item === void 0 ? void 0 : item.Nome) + " - " + ((_a = item === null || item === void 0 ? void 0 : item.Complexo) === null || _a === void 0 ? void 0 : _a.Nome))}`; }).toString(), isVisibleHover: type === 'complexo' ? filters.complexoArray.length > 0 ? true : false : filters.faseArray.length > 0 ? true : false },
            React.createElement(S.WrapperOptionValue, { onClick: () => handleClickToogle() },
                type === 'complexo' && filters.complexoArray.map((item, index) => React.createElement(S.Value, { isYellow: filters.complexoArray.length > 0, disabled: disabled }, index === 0 ? item === null || item === void 0 ? void 0 : item.Nome : '- ' + (item === null || item === void 0 ? void 0 : item.Nome))),
                type === 'fase' &&
                    filters.faseArray.map((item, index) => {
                        var _a, _b;
                        return (React.createElement(S.Value, { isYellow: filters.faseArray.length > 0, disabled: disabled }, index === 0 ? (item === null || item === void 0 ? void 0 : item.Nome) + `${'/' + ((_a = item === null || item === void 0 ? void 0 : item.Complexo) === null || _a === void 0 ? void 0 : _a.Nome)}` : '- ' + (item === null || item === void 0 ? void 0 : item.Nome) + `${'/' + ((_b = item === null || item === void 0 ? void 0 : item.Complexo) === null || _b === void 0 ? void 0 : _b.Nome)}`));
                    }),
                type === 'complexo' && filters.complexoArray.length === 0 && React.createElement(S.Value, { disabled: disabled }, title),
                type === 'fase' && filters.faseArray.length === 0 && React.createElement(S.Value, { disabled: disabled }, title)),
            type === 'complexo' && (React.createElement(S.SetaInput, { isToogle: !openToogleClosed && toogleSelect && !filters.openToogleMultiSelectComplexo, stroke: 'var(--cinza-escuro)', onClick: () => handleClickToogle() })),
            type === 'fase' && (React.createElement(S.SetaInput, { isToogle: !openToogleClosed && toogleSelectFase && !filters.openToogleMultiSelectFase, stroke: 'var(--cinza-escuro)', onClick: () => handleClickToogle() })),
            type === 'complexo' && !openToogleClosed && toogleSelect && !filters.openToogleMultiSelectComplexo && filters.corredor && (React.createElement(S.OptionsBox, { width: width, maxHeightOptions: maxHeightOptions, bottomOptions: bottomOptions, topOptions: topOptions }, complexos === null || complexos === void 0 ? void 0 :
                complexos.filter((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.Corredor) === null || _a === void 0 ? void 0 : _a.Id) === selectedCorredor; }).map((item, index, number) => (React.createElement(S.Option, { key: item.Id, onClick: (e) => handleClickOption(item) },
                    React.createElement(S.listOptions, null,
                        React.createElement(S.OptionValue, null, item === null || item === void 0 ? void 0 : item.Nome),
                        React.createElement(Checkbox, { disabled: true, key: item.Id, checked: complexoSelectedComplete.some(check => check.Id === item.Id), styles: {
                                checkmark: {
                                    backgroundColor: 'rgb(0 123 119 / 71%)',
                                },
                                checkbox: {
                                    background: 'none',
                                    border: '.05rem solid rgb(200, 198, 196)'
                                },
                            } }))))),
                type === 'complexo' && (React.createElement(S.Option, { isAfeter: true, onClick: () => onClicksComplexo() },
                    React.createElement(S.listOptions, null,
                        React.createElement(S.OptionValue, null, "Todos os itens")))))),
            type === 'fase' && !openToogleClosed && toogleSelectFase && !filters.openToogleMultiSelectFase && filters.complexoArray.length > 0 && (React.createElement(S.OptionsBox, { width: width, maxHeightOptions: maxHeightOptions, bottomOptions: bottomOptions, topOptions: topOptions }, (_b = fases.filter((item) => complexoSelected === null || complexoSelected === void 0 ? void 0 : complexoSelected.includes(item === null || item === void 0 ? void 0 : item.Complexo.Id))) === null || _b === void 0 ? void 0 :
                _b.map((item, index, number) => (React.createElement(S.Option, { key: item.Id, onClick: (e) => handleClickOption(item) },
                    React.createElement(S.listOptions, null,
                        React.createElement(S.OptionValue, null, (item === null || item === void 0 ? void 0 : item.Nome) + "/" + item.Complexo.Nome),
                        React.createElement(Checkbox, { disabled: true, key: item.Id, checked: faseSelectedComplete.some(check => check.Id === item.Id), styles: {
                                checkmark: {
                                    backgroundColor: 'rgb(0 123 119 / 71%)',
                                },
                                checkbox: {
                                    background: 'none',
                                    border: '.05rem solid rgb(200, 198, 196)'
                                },
                            } }))))),
                type === 'fase' && (React.createElement(S.Option, { isAfeter: true, onClick: () => onClicksFase() },
                    React.createElement(S.OptionValue, null, "Todos os itens"))))),
            children)));
};
export default MultiSelect;
//# sourceMappingURL=index.js.map