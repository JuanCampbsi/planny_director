var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { toPng } from 'html-to-image';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import Button from '../Button';
import { jsPDF } from "jspdf";
import { itemsIsChartValueContent, setIsOpenOrDisableModalSucessOrError } from '../../../../dataflow/reducers/StateList';
const ChartModal = (_a) => {
    var { isOpen, sucess, error, closeModal, titleMenssage, SubTitleMenssage, submitFunction, data, setFile, setIsSucessMenssage, setIsErroMenssage, setIsSpinnerModalEditOpen, setIsSpinnerModalEdit, children } = _a, rest = __rest(_a, ["isOpen", "sucess", "error", "closeModal", "titleMenssage", "SubTitleMenssage", "submitFunction", "data", "setFile", "setIsSucessMenssage", "setIsErroMenssage", "setIsSpinnerModalEditOpen", "setIsSpinnerModalEdit", "children"]);
    const dispatch = useDispatch();
    const images = useAppSelector(state => state.state.graphicsImages);
    console.log('data', data);
    const handleGenerateImg = () => __awaiter(void 0, void 0, void 0, function* () {
        let array = [];
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'px',
        });
        data.forEach((item, index) => {
            toPng(document.getElementById(`charts${index}`))
                .then(function (dataUrl) {
                array.push(dataUrl);
                setTimeout(() => {
                    if (index === (array.length - 1)) {
                        console.log('dentro do if', array.length === data.length, array, data);
                        array.forEach((image, index2) => {
                            console.log(index2);
                            if (index2 > 0 && (index2 % 2 === 0)) {
                                doc.addPage();
                            }
                            const width = doc.internal.pageSize.getWidth();
                            const height = doc.internal.pageSize.getHeight();
                            if (index2 === 0) {
                                doc.addImage(image, 70, 60, 300, 230);
                            }
                            else if (index2 % 2 !== 0) {
                                doc.addImage(image, 70, 320, 300, 230);
                            }
                            else {
                                doc.addImage(image, 70, 60, 300, 230);
                            }
                            //doc.addImage(image, 60, 60, 200, 150)
                            doc.setFont('Segoe UI');
                        });
                        setTimeout(() => {
                            const blob = new Blob([doc.output('blob')], { type: 'application/pdf' });
                            console.log(blob);
                            setFile(blob);
                            setTimeout(() => { submitFunction(blob); }, 200);
                            //     const url = window.URL || window.webkitURL;
                            // const linkCreated = url.createObjectURL(blob);
                            // //window.open(linkCreated)
                            // const link = document.createElement('a');
                            // link.href = linkCreated;
                            // link.download = `Plano Diretor - Consolidado`;
                            // link.click();
                            // link.remove();
                        }, 200);
                    }
                }, 500);
            }).catch(err => console.log('Alguma coisa deu errado' + "index" + index));
        });
    });
    const handleSumit = () => {
        dispatch(setIsOpenOrDisableModalSucessOrError(true));
        setIsErroMenssage(false);
        setIsSucessMenssage(false);
        setIsSpinnerModalEditOpen(false);
        setIsSpinnerModalEdit(false);
        dispatch(itemsIsChartValueContent(true));
        void handleGenerateImg();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.ContainerSpinner, null,
                React.createElement(S.Box, null,
                    React.createElement(S.Title, null, titleMenssage),
                    React.createElement(S.SubTitle, null, SubTitleMenssage),
                    React.createElement(S.ChildrenContainer, null, children),
                    React.createElement(S.WrapperButton, null,
                        React.createElement(Button, { backgroundButton: 'var(--amarelo-vale)', hoverButton: '#CFA53D', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => closeModal(false) }, "Voltar"),
                        React.createElement(Button, { backgroundButton: '#007E7A', hoverButton: '#007e7ac2', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => handleSumit() }, "Enviar")))))));
};
export default ChartModal;
//# sourceMappingURL=index.js.map