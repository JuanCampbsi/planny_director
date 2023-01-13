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
import Pdf from '../../../../assets/img/IconPdf.png';
import Icon from '../../../../assets/icons/IconView.svg';
import Modal from '../../../../components/Modal';
import ViewPdf from '../ViewPdf';
import { useDispatch } from 'react-redux';
import { setIsOpenOrDisable } from '../../../../../../dataflow/reducers/StateList';
import { format } from 'date-fns';
const CardViewPdf = (_a) => {
    var { items, children } = _a, rest = __rest(_a, ["items", "children"]);
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    const handleClick = (url) => {
        dispatch(setIsOpenOrDisable(true));
        setValue(url);
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
            items && items.map((item) => {
                console.log(item);
                return (React.createElement(S.WrapperBoxView, null,
                    React.createElement(S.WrapperBox, null,
                        React.createElement(S.WrapperIcon, null,
                            React.createElement(S.IconPdf, { src: Pdf, onClick: () => handleClick(item.URLConteudo.Url) })),
                        React.createElement(S.WrapperBoxTitle, { onClick: () => handleClick(item.URLConteudo.Url) },
                            React.createElement(S.TitleComplexo, null, (item === null || item === void 0 ? void 0 : item.Complexo.length) > 0 ? item === null || item === void 0 ? void 0 : item.Complexo.map((item, index, number) => {
                                return `${(item === null || item === void 0 ? void 0 : item.Nome.includes('Serra')) ? index == 0 ? item.Nome : '' + item.Nome.replace('Serra', '') : item.Nome}${index !== number.length - 1 ? `/` : ''}`;
                            }) : item === null || item === void 0 ? void 0 : item.Corredor.Nome),
                            React.createElement(S.WrapperBoxFase, null, renderFaseItem(item.Fase)),
                            React.createElement(S.WrapperDateFile, { topDate: (item === null || item === void 0 ? void 0 : item.Corredor.Id) === 5 ? true : false },
                                React.createElement(S.TextDateFile, null, `Modificação: ${format(new Date(item.Modified), 'dd.MM.yyyy')}`)))),
                    React.createElement(S.IconViewPdf, { src: Icon, onClick: () => handleClick(item.URLConteudo.Url) })));
            }),
            !!value && (React.createElement(Modal, { isOpen: true },
                React.createElement(ViewPdf, { url: value }))))));
};
export default CardViewPdf;
//# sourceMappingURL=index.js.map