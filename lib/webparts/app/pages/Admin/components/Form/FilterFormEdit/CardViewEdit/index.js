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
import * as S from './styles';
import Pdf from '../../../../../../assets/img/IconPdf.png';
import Icon from '../../../../../../assets/icons/IconView.svg';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { setIsOpenOrDisable, setListFilterCorredor, setFilterComplexosArray, clearFilterComplexosArray, clearFilterFaseArray, setFilterFaseArray, setListFilterTiposConteudo } from '../../../../../../../../dataflow/reducers/StateList';
import Form from '../..';
import Modal from '../../../../../../components/Modal';
import IconClose from '../../../../../../assets/icons/IconClose.svg';
import { useAppSelector } from '../../../../../../../../dataflow/hooks';
const CardViewEdit = (_a) => {
    var { items, context, children } = _a, rest = __rest(_a, ["items", "context", "children"]);
    const [value, setValue] = React.useState();
    const dispatch = useDispatch();
    const complexos = useAppSelector((state) => state.state.listComplexo);
    const fases = useAppSelector((state) => state.state.listFase);
    const corredores = useAppSelector((state) => state.state.listCorredor);
    const tiposConteudo = useAppSelector((state) => state.state.listTiposConteudos);
    const filters = useAppSelector((state) => state.state.filters);
    console.log({ value });
    const handleClick = (items, e) => {
        dispatch(setIsOpenOrDisable(true));
        setValue(items);
        for (let itemConteudo of tiposConteudo) {
            if (itemConteudo.Id === items.TiposConteudo.Id) {
                dispatch(setListFilterTiposConteudo(itemConteudo));
            }
        }
        for (let corredorItem of corredores) {
            if (corredorItem.Id === items.Corredor.Id) {
                dispatch(setListFilterCorredor(corredorItem));
            }
        }
        for (let complexoItem of complexos) {
            items.Complexo.map(value => {
                if (value.Id === complexoItem.Id) {
                    dispatch(setFilterComplexosArray(complexoItem));
                }
            });
        }
        for (let faseItem of fases) {
            items.Fase.map(value => {
                if (value.Id === faseItem.Id) {
                    dispatch(setFilterFaseArray(faseItem));
                }
            });
        }
    };
    const handleDisable = () => {
        dispatch(setIsOpenOrDisable(false));
        dispatch(clearFilterComplexosArray());
        dispatch(clearFilterFaseArray());
    };
    const renderFaseItem = (item) => {
        const setItemsFase = new Set();
        let faseItems;
        const faseArray = item.map((item) => item);
        const faseItem = faseArray.map((item) => item);
        for (let fase of item) {
            faseItems = fase;
        }
        const filterFaseDuplicates = faseItem.filter((person) => {
            const duplicatedPerson = setItemsFase.has(person.Nome);
            setItemsFase.add(person.Nome);
            return !duplicatedPerson;
        });
        console.log(filterFaseDuplicates);
        return (React.createElement(React.Fragment, null, filterFaseDuplicates.map(value => {
            return (React.createElement(React.Fragment, null,
                React.createElement(S.WrapperFase, null,
                    React.createElement(S.TextFase, null, value.Nome))));
        })));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            items && items.map((itemValue) => {
                return (React.createElement(S.WrapperBoxView, null,
                    React.createElement(S.WrapperBox, null,
                        React.createElement(S.WrapperIcon, null,
                            React.createElement(S.IconPdf, { src: Pdf, onClick: (e) => handleClick(itemValue, e) })),
                        React.createElement(S.WrapperBoxTitle, { onClick: (e) => handleClick(itemValue, e) },
                            React.createElement(S.TitleComplexo, null, (itemValue === null || itemValue === void 0 ? void 0 : itemValue.Complexo.length) > 0 ? itemValue === null || itemValue === void 0 ? void 0 : itemValue.Complexo.map((item, index, number) => {
                                return `${(item === null || item === void 0 ? void 0 : item.Nome.includes('Serra')) ? index == 0 ? item.Nome : '' + item.Nome.replace('Serra', '') : item.Nome}${index !== number.length - 1 ? `/` : ''}`;
                            }) : itemValue === null || itemValue === void 0 ? void 0 : itemValue.Corredor.Nome),
                            React.createElement(S.WrapperBoxFase, null, renderFaseItem(itemValue.Fase)),
                            React.createElement(S.WrapperDateFile, { topDate: (itemValue === null || itemValue === void 0 ? void 0 : itemValue.Corredor.Id) === 5 ? true : false },
                                React.createElement(S.TextDateFile, null, `Modificação: ${format(new Date(itemValue.Modified), 'dd.MM.yyyy')}`)))),
                    React.createElement(S.IconViewPdf, { src: Icon, onClick: (e) => handleClick(itemValue, e) })));
            }),
            !!value && (React.createElement(Modal, { isOpen: true, isOpenEditForm: true },
                React.createElement(S.IconClose, { src: IconClose, onClick: () => handleDisable() }),
                React.createElement(S.WrapperEdit, null,
                    React.createElement(Form, { props: context, isEditValue: true, itemsConteudoEdit: value })),
                React.createElement(S.WrapperEditDisable, { onClick: () => handleDisable() }))))));
};
export default CardViewEdit;
//# sourceMappingURL=index.js.map