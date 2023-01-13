var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import * as S from './styles';
import { sp } from '@pnp/sp/presets/all';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Category, ChartComponent, ColumnSeries, DataLabel, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
let toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', '|', 'Undo', 'Redo']
};
let insertImageSettings = {
    allowedTypes: ['.jpeg', '.jpg', '.png'],
    display: 'inline',
    width: 'auto',
    height: 'auto',
    saveFormat: 'Base64',
};
let quickToolbarSettings = {
    image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
};
let fontColor = {
    modeSwitcher: true,
    columns: 10,
    colorCode: {
        Custom: [
            '', '#000000', '#e7e6e6', '#44546a', '#4472c4', '#ed7d31', '#a5a5a5', '#ffc000', '#70ad47', '#ff0000',
            '#f2f2f2', '#808080', '#cfcdcd', '#d5dce4', '#d9e2f3', '#fbe4d5', '#ededed', '#fff2cc', '#e2efd9', '#ffcccc',
            '#d9d9d9', '#595959', '#aeaaaa', '#acb9ca', '#b4c6e7', '#f7caac', '#dbdbdb', '#ffe599', '#c5e0b3', '#ff8080',
            '#bfbfbf', '#404040', '#747070', '#8496b0', '#8eaadb', '#f4b083', '#c9c9c9', '#ffd966', '#a8d08d', '#ff3333',
            '#a6a6a6', '#262626', '#3b3838', '#323e4f', '#2f5496', '#c45911', '#7b7b7b', '#bf8f00', '#538135', '#b30000',
            '#7f7f7f', '#0d0d0d', '#161616', '#212934', '#1f3763', '#823b0b', '#525252', '#7f5f00', '#375623', '#660000',
            '#007E7A', '#0ABB98', '#3CB5E5', '#555555', '#ECB11F', '#EE6F16', '#C0305E'
        ]
    }
};
let backgroundColor = {
    modeSwitcher: true,
    columns: 10,
    colorCode: {
        Custom: [
            '', '#000000', '#e7e6e6', '#44546a', '#4472c4', '#ed7d31', '#a5a5a5', '#ffc000', '#70ad47', '#ff0000',
            '#f2f2f2', '#808080', '#cfcdcd', '#d5dce4', '#d9e2f3', '#fbe4d5', '#ededed', '#fff2cc', '#e2efd9', '#ffcccc',
            '#d9d9d9', '#595959', '#aeaaaa', '#acb9ca', '#b4c6e7', '#f7caac', '#dbdbdb', '#ffe599', '#c5e0b3', '#ff8080',
            '#bfbfbf', '#404040', '#747070', '#8496b0', '#8eaadb', '#f4b083', '#c9c9c9', '#ffd966', '#a8d08d', '#ff3333',
            '#a6a6a6', '#262626', '#3b3838', '#323e4f', '#2f5496', '#c45911', '#7b7b7b', '#bf8f00', '#538135', '#b30000',
            '#7f7f7f', '#0d0d0d', '#161616', '#212934', '#1f3763', '#823b0b', '#525252', '#7f5f00', '#375623', '#660000',
            '#007E7A', '#0ABB98', '#3CB5E5', '#555555', '#ECB11F', '#EE6F16', '#C0305E'
        ]
    }
};
import '@pnp/sp/files';
import '@pnp/sp/folders';
import Barra from '../../../../assets/img/BarraForm.png';
import Button from '../../../../components/Button';
import { ConteudoModuloClassService } from '../../../../services/ConteudoModuloClassService';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import { PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';
import MultSelect from '../../../../components/MultSelect';
import Select from '../../../../components/Select';
import { clearAllComplexosSelected, clearAllFasesSelected, clearFilterComplexosArray, clearFilterFaseArray, setAllGroupsEdicaoSelected, setAllGroupsLeituraSelected, setIsOpenOrDisable, setIsOpenOrDisableModalSucessOrError, setListFilterCorredor, setListFilterModulo, setListFilterTiposConteudo, } from '../../../../../../dataflow/reducers/StateList';
import Modal from '../../../../components/Modal';
import ChartModal from '../../../../components/ChartModal';
import * as xlsx from 'xlsx';
import upload from '../../../../assets/img/IconUploadFile.png';
import { useHistory, useLocation } from 'react-router-dom';
import FilterFormEdit from './FilterFormEdit';
const Form = ({ props, isEditValue = false, itemsConteudoEdit }) => {
    var _a;
    const location = useLocation();
    const regex = /([^/]+$)/g;
    const moduleName = regex.exec(location.pathname);
    const [isClearGroups, setIsClearGroups] = React.useState(false);
    const [isClearMultSelect, setIsClearMultSelect] = React.useState(false);
    const [isSucessMenssage, setIsSucessMenssage] = React.useState(false);
    const [isSpinnerModalEdit, setIsSpinnerModalEdit] = React.useState(false);
    const [isSpinnerModalEditOpen, setIsSpinnerModalEditOpen] = React.useState(false);
    const [isSpinnerModalEditRenderChart, setIsSpinnerModalEditOpenRenderChart] = React.useState(true);
    const isSucessChart = useAppSelector((state) => state.state.isChartValueContent);
    const [isErroMenssage, setIsErroMenssage] = React.useState(false);
    const [isErroMenssageLabel, setIsErroMenssageLabel] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState();
    const [analiseCriticaDataRich, setAnaliseCriticaDataRich] = React.useState(!!itemsConteudoEdit ? itemsConteudoEdit.AnaliseCritica : '');
    const conteudoModulo = new ConteudoModuloClassService();
    const filters = useAppSelector((state) => state.state.filters);
    const [errMsg, setErrMsg] = React.useState(null);
    const dispatch = useAppDispatch();
    const ref = React.useRef();
    const tiposConteudo = useAppSelector((state) => state.state.listTiposConteudos);
    const selectedTipoConteudo = useAppSelector((state) => { var _a; return (_a = state.state.filters) === null || _a === void 0 ? void 0 : _a.tiposConteudo; });
    const tiposConteudoTitles = tiposConteudo.map((i) => i.Title);
    const [renderChart, setrenderChart] = React.useState(false);
    const [data, setData] = React.useState([]);
    const sucessTitleMenssage = 'Cadastrado realizado com sucesso!';
    const sucessTitleMenssageUpdate = 'Atualizado com sucesso!';
    const sucessSubTitleMenssage = 'Por Favor aguarde, a página será redirecionada.';
    const errorTitleMenssage = 'Erro ao salvar!';
    const errorSubTitleMenssage = 'Por Favor verifique os dados preenchidos ou contate o administrador.';
    const history = useHistory();
    let refRichText = React.useRef(null);
    const scrollRef = React.useRef(null);
    console.log(moduleName[0]);
    const executeScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log(scrollRef.current.scrollIntoView());
    };
    const clickRenderRoutes = () => {
        history.push(`/FormConteudoModulo/Edit`);
    };
    React.useEffect(() => {
        if (!!itemsConteudoEdit) {
            dispatch(setAllGroupsEdicaoSelected(itemsConteudoEdit.GruposEdicao.Title));
            dispatch(setAllGroupsLeituraSelected(itemsConteudoEdit.GruposLeitura.Title));
            executeScroll();
        }
    }, []);
    const handlerMandatoryItems = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const response = {
            corredor: !!((_a = filters.corredor) === null || _a === void 0 ? void 0 : _a.Id) || false,
            complexo: ((_b = filters.corredor) === null || _b === void 0 ? void 0 : _b.Id) === 5 ? true : ((_c = filters.complexoArray) === null || _c === void 0 ? void 0 : _c.length) !== 0 || false,
            ciclo: !!((_d = filters.cicloCurrent) === null || _d === void 0 ? void 0 : _d.Id) || false,
            modulo: !!((_e = filters.modulo) === null || _e === void 0 ? void 0 : _e.Id) || false,
            urlConteudo: ((_f = filters.tiposConteudo) === null || _f === void 0 ? void 0 : _f.Id) === 4 ? true : !!selectedFile || false,
            groupEdicao: ((_g = filters.allGroupsEdicaoSelected) === null || _g === void 0 ? void 0 : _g.length) !== 0 || false,
            groupLeitura: ((_h = filters.allGroupsLeituraSelected) === null || _h === void 0 ? void 0 : _h.length) !== 0 || false,
            analiseCritica: analiseCriticaDataRich !== '' || false,
            tiposConteudo: !!((_j = filters.tiposConteudo) === null || _j === void 0 ? void 0 : _j.Id) || false,
        };
        return response;
    };
    const handleChangeUpload = (e) => {
        console.log('oie boladão', e.target.files[0]);
        setSelectedFile(e.target.files[0]);
    };
    const handleClickDownloadExcel = () => __awaiter(void 0, void 0, void 0, function* () {
        const blob = yield sp.web
            .getFileByUrl('https://globalvale.sharepoint.com/:x:/r/teams/PlanDirGestaoAtivos/_layouts/15/Doc.aspx?sourcedoc=%7B14ADC4E6-56F9-4930-8EF4-402F99DAC5E7%7D&file=modeloPlaninhaAnaliseEstruturada.xlsx&action=default&mobileredirect=true')
            .getBlob();
        const url = window.URL || window.webkitURL;
        const linkCreated = url.createObjectURL(blob);
        //window.open(linkCreated)
        const link = document.createElement('a');
        link.href = linkCreated;
        link.download = `modeloPlanilha.xlsx`;
        link.click();
        link.remove();
    });
    const handleChangeUploadExcel = (e) => {
        console.log(e.target.files[0]);
        setSelectedFile(e.target.files[0]);
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const atualYear = new Date().getFullYear();
                const json = xlsx.utils.sheet_to_json(worksheet, {
                    header: [
                        'Gerência',
                        'Grupo de ativo',
                        'Título do Item',
                        'Unidade',
                        (atualYear - 2).toString(),
                        (atualYear - 1).toString(),
                        (atualYear).toString(),
                        (atualYear + 1).toString(),
                        (atualYear + 2).toString(),
                        (atualYear + 3).toString(),
                        (atualYear + 4).toString(),
                        (atualYear + 5).toString(),
                        `Ref_${atualYear - 2}`,
                        `Ref_${atualYear - 1}`,
                        `Ref_${atualYear}`,
                        `Ref_${atualYear + 1}`,
                        `Ref_${atualYear + 2}`,
                        `Ref_${atualYear + 3}`,
                        `Ref_${atualYear + 4}`,
                        `Ref_${atualYear + 5}`,
                    ],
                });
                const values = [
                    (atualYear - 2).toString(),
                    (atualYear - 1).toString(),
                    (atualYear).toString(),
                    (atualYear + 1).toString(),
                    (atualYear + 2).toString(),
                    (atualYear + 3).toString(),
                    (atualYear + 4).toString(),
                    (atualYear + 5).toString(),
                    `Ref_${atualYear - 2}`,
                    `Ref_${atualYear - 1}`,
                    `Ref_${atualYear}`,
                    `Ref_${atualYear + 1}`,
                    `Ref_${atualYear + 2}`,
                    `Ref_${atualYear + 3}`,
                    `Ref_${atualYear + 4}`,
                    `Ref_${atualYear + 5}`,
                ];
                const alljson = json;
                const bodyjson = json.slice(1);
                const headerValues = json.slice(0, 1).map((item) => Object.keys(item).filter((key) => {
                    if (values.includes(key)) {
                        return item[key];
                    }
                }));
                const header = ['Ano', 'Valor', 'Referência'];
                const json1 = [];
                bodyjson.forEach((item) => {
                    console.log(item);
                    json1.push({
                        values: [
                            { x: (atualYear - 2), y: (atualYear - 2), color: '#555555' },
                            { x: (atualYear - 1), y: (atualYear - 1), color: '#555555' },
                            { x: atualYear, y: atualYear, color: '#ECB11F' },
                            { x: (atualYear + 1), y: (atualYear + 1), color: '#007E7A' },
                            { x: (atualYear + 2), y: (atualYear + 2), color: '#007E7A' },
                            { x: (atualYear + 3), y: (atualYear + 3), color: '#007E7A' },
                            { x: (atualYear + 4), y: (atualYear + 4), color: '#007E7A' },
                            { x: (atualYear + 5), y: (atualYear + 5), color: '#007E7A' },
                        ],
                        values2: [
                            { x: (atualYear - 2), y: item[`Ref_${atualYear - 2}`], color: '#555555' },
                            { x: (atualYear - 1), y: item[`Ref_${atualYear - 1}`], color: '#555555' },
                            { x: atualYear, y: item[`Ref_${atualYear}`], color: '#ECB11F' },
                            { x: (atualYear + 1), y: item[`Ref_${atualYear + 1}`], color: '#007E7A' },
                            { x: (atualYear + 2), y: item[`Ref_${atualYear + 2}`], color: '#007E7A' },
                            { x: (atualYear + 3), y: item[`Ref_${atualYear + 3}`], color: '#007E7A' },
                            { x: (atualYear + 4), y: item[`Ref_${atualYear + 4}`], color: '#007E7A' },
                            { x: (atualYear + 5), y: item[`Ref_${atualYear + 5}`], color: '#007E7A' },
                        ],
                        texts: {
                            gerencia: item['Gerência'],
                            grupoAtivo: item['Grupo de ativo'],
                            tituloItem: item['Título do Item'],
                            unidade: item['Unidade'],
                        },
                    });
                });
                console.log(json1);
                setData(json1);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };
    const handleSubmit = (file) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        setIsErroMenssage(false);
        setIsSucessMenssage(false);
        setIsSpinnerModalEdit(true);
        dispatch(setIsOpenOrDisableModalSucessOrError(true));
        const itensVerifiedSucess = ((_a = handlerMandatoryItems()) === null || _a === void 0 ? void 0 : _a.ciclo) &&
            ((_b = handlerMandatoryItems()) === null || _b === void 0 ? void 0 : _b.modulo) &&
            ((_c = handlerMandatoryItems()) === null || _c === void 0 ? void 0 : _c.complexo) &&
            ((_d = handlerMandatoryItems()) === null || _d === void 0 ? void 0 : _d.corredor) &&
            ((_e = handlerMandatoryItems()) === null || _e === void 0 ? void 0 : _e.urlConteudo) &&
            ((_f = handlerMandatoryItems()) === null || _f === void 0 ? void 0 : _f.groupEdicao) &&
            ((_g = handlerMandatoryItems()) === null || _g === void 0 ? void 0 : _g.groupLeitura) &&
            ((_h = handlerMandatoryItems()) === null || _h === void 0 ? void 0 : _h.analiseCritica) &&
            ((_j = handlerMandatoryItems()) === null || _j === void 0 ? void 0 : _j.tiposConteudo);
        console.log('items sucess', itensVerifiedSucess);
        if (itensVerifiedSucess) {
            const dataToSend = {
                CicloId: filters.cicloCurrent.Id,
                ModuloId: filters.modulo.Id,
                CorredorId: filters.corredor.Id,
                ComplexoId: { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.complexoArray.map((item) => item.Id) },
                FaseId: { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.faseArray.map((item) => item.Id) },
                GruposEdicaoId: { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.allGroupsEdicaoSelected.map((item) => parseInt(item.id)) },
                GruposLeituraId: {
                    __metadata: { type: 'Collection(Edm.Int32)' },
                    results: filters.allGroupsLeituraSelected.map((item) => parseInt(item.id)),
                },
                AnaliseCritica: analiseCriticaDataRich,
                TiposConteudoId: filters.tiposConteudo.Id,
            };
            if (((_k = filters === null || filters === void 0 ? void 0 : filters.tiposConteudo) === null || _k === void 0 ? void 0 : _k.Nome) === 'Análise Estruturada') {
                setrenderChart(false);
            }
            conteudoModulo
                .addConteudoModulo(dataToSend)
                .then((response) => {
                conteudoModulo
                    .addFileToFolder(file, filters, response.data['Id'])
                    .then((res) => {
                    console.log('resposta da inserção', res.data.ServerRelativeUrl);
                    const serverUrl = 'https://globalvale.sharepoint.com';
                    const absoluteUrl = serverUrl + res.data.ServerRelativeUrl;
                    const dataToSend = {
                        URLConteudo: {
                            __metadata: { type: 'SP.FieldUrlValue' },
                            Description: absoluteUrl,
                            Url: absoluteUrl,
                        },
                    };
                    conteudoModulo
                        .editConteudoModuloAddPdf(response.data['Id'], dataToSend)
                        .then((res) => {
                        dispatch(setIsOpenOrDisable(true));
                        setIsSucessMenssage(true);
                        dispatch(setIsOpenOrDisableModalSucessOrError(false));
                    })
                        .catch((err) => console.log('err in updating ConteudoModulos', err));
                })
                    .catch((err) => console.log('err in updating ConteudoModulos', err));
            })
                .catch((err) => {
                dispatch(setIsOpenOrDisable(true));
                setIsErroMenssage(true);
                dispatch(setIsOpenOrDisableModalSucessOrError(false));
                const msg = err.message;
                console.log(msg);
                if (msg.includes('arquivo com o nome')) {
                    setErrMsg('Já existe um arquivo com o nome na pasta em que você tentou salvar.');
                }
            });
        }
        else {
            dispatch(setIsOpenOrDisable(true));
            setIsErroMenssage(true);
            setIsErroMenssageLabel(true);
            dispatch(setIsOpenOrDisableModalSucessOrError(false));
        }
    };
    const handleSubmitUpdate = (file) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        dispatch(setIsOpenOrDisableModalSucessOrError(true));
        setIsSpinnerModalEditOpenRenderChart(false);
        setIsErroMenssage(false);
        setIsSucessMenssage(false);
        setIsSpinnerModalEdit(true);
        const itensVerifiedSucess = ((_a = handlerMandatoryItems()) === null || _a === void 0 ? void 0 : _a.ciclo) &&
            ((_b = handlerMandatoryItems()) === null || _b === void 0 ? void 0 : _b.modulo) &&
            ((_c = handlerMandatoryItems()) === null || _c === void 0 ? void 0 : _c.complexo) &&
            ((_d = handlerMandatoryItems()) === null || _d === void 0 ? void 0 : _d.corredor) &&
            ((_e = handlerMandatoryItems()) === null || _e === void 0 ? void 0 : _e.groupEdicao) &&
            ((_f = handlerMandatoryItems()) === null || _f === void 0 ? void 0 : _f.groupLeitura) &&
            ((_g = handlerMandatoryItems()) === null || _g === void 0 ? void 0 : _g.analiseCritica) &&
            ((_h = handlerMandatoryItems()) === null || _h === void 0 ? void 0 : _h.tiposConteudo);
        console.log(analiseCriticaDataRich);
        if (itensVerifiedSucess) {
            const dataToSendObject = [
                {
                    CicloId: filters.cicloCurrent.Id ? filters.cicloCurrent.Id : '',
                    ModuloId: filters.modulo.Id ? filters.modulo.Id : '',
                    CorredorId: filters.corredor.Id ? filters.corredor.Id : '',
                    AnaliseCritica: analiseCriticaDataRich,
                    TiposConteudoId: filters.tiposConteudo.Id ? filters.tiposConteudo.Id : '',
                    ComplexoId: { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.complexoArray.map((item) => item.Id) },
                    FaseId: { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.faseArray.map((item) => item.Id) },
                    GruposEdicaoId: filters.allGroupsEdicaoSelected.length > 0
                        ? { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.allGroupsEdicaoSelected.map((item) => parseInt(item.id)) }
                        : '',
                    GruposLeituraId: filters.allGroupsLeituraSelected.length > 0
                        ? { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.allGroupsLeituraSelected.map((item) => parseInt(item.id)) }
                        : '',
                },
            ];
            if (((_j = filters === null || filters === void 0 ? void 0 : filters.tiposConteudo) === null || _j === void 0 ? void 0 : _j.Nome) === 'Análise Estruturada') {
                setrenderChart(false);
            }
            dataToSendObject.forEach((value) => {
                Object.keys(value).forEach((key) => {
                    if (key === 'GruposEdicaoId' || key === 'GruposLeituraId') {
                        let valueKey = value[key];
                        console.log(isNaN(valueKey.results[0]));
                        if (valueKey.results[0] === '' || valueKey.results[0] === undefined || isNaN(valueKey.results[0])) {
                            delete value[key];
                        }
                    }
                });
            });
            const myObject = Object.assign({}, dataToSendObject[0]);
            console.log(myObject);
            conteudoModulo
                .editConteudoModulo(itemsConteudoEdit.Id, myObject)
                .then((response) => {
                setIsSucessMenssage(true);
                setIsSpinnerModalEdit(false);
                setIsSpinnerModalEditOpen(true);
                if (!!selectedFile) {
                    conteudoModulo
                        .editFileToFolder(file, filters, itemsConteudoEdit.Id)
                        .then((res) => {
                        console.log('resFile', res);
                    })
                        .catch((err) => console.log('err in updating ConteudoModulos', err));
                }
            })
                .catch((err) => {
                dispatch(setIsOpenOrDisable(true));
                setIsSpinnerModalEdit(false);
                setIsSpinnerModalEditOpen(true);
                setIsErroMenssage(true);
                const msg = err.message;
                console.log(msg);
                if (msg.includes('arquivo com o nome')) {
                    setErrMsg('Já existe um arquivo com o nome na pasta em que você tentou salvar.');
                }
            });
        }
        else {
            dispatch(setIsOpenOrDisable(true));
            setIsErroMenssage(true);
            setIsErroMenssageLabel(true);
            setIsSpinnerModalEdit(false);
            setIsSpinnerModalEditOpen(true);
        }
    };
    const clearAll = () => {
        setAnaliseCriticaDataRich('');
        refRichText = null;
        setIsClearGroups(true);
        setIsClearMultSelect(true);
        dispatch(clearFilterFaseArray());
        dispatch(clearFilterComplexosArray());
        dispatch(setListFilterCorredor(null));
        dispatch(setAllGroupsEdicaoSelected(null));
        dispatch(setAllGroupsLeituraSelected(null));
        dispatch(setListFilterTiposConteudo(null));
        setSelectedFile(null);
        dispatch(clearAllComplexosSelected(false));
        dispatch(clearAllFasesSelected(false));
        if (moduleName[0] === 'Edit') {
            executeScroll();
        }
        if (moduleName[0] === 'Created') {
            dispatch(setListFilterModulo(null));
        }
    };
    const onChangeAllGroups = (item, groups) => {
        if (groups === 'edicao') {
            dispatch(setAllGroupsEdicaoSelected(item));
        }
        else if (groups === 'leitura') {
            dispatch(setAllGroupsLeituraSelected(item));
        }
        console.log(filters.allGroupsEdicaoSelected.map((item) => parseInt(item.id)));
    };
    React.useEffect(() => {
        if (!selectedFile && (selectedTipoConteudo === null || selectedTipoConteudo === void 0 ? void 0 : selectedTipoConteudo.Title) === 'PDF' && moduleName[0] === 'Created') {
            ref.current.value = null;
        }
    }, [selectedFile]);
    React.useEffect(() => {
        if (!filters.isOpenOrDisable) {
            setIsErroMenssage(false);
            setIsSucessMenssage(false);
            setErrMsg('');
        }
    }, [filters.isOpenOrDisable]);
    React.useEffect(() => {
        dispatch(clearAllComplexosSelected(false));
        dispatch(clearAllFasesSelected(false));
    }, []);
    const renderAnaliseEstruturadaForm = () => {
        var _a;
        return (React.createElement(React.Fragment, null,
            React.createElement(S.LabelInput, null,
                "Baixar modelo de excel",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.BtnBox, null,
                    React.createElement("p", null, errMsg),
                    React.createElement(Button, { backgroundButton: 'rgb(0 123 119 / 71%)', hoverButton: 'rgb(0 123 119 / 100%)', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: handleClickDownloadExcel }, "Baixar Modelo"))),
            React.createElement(S.LabelInput, null,
                "Valores dos gr\u00E1ficos (Upload Excel)",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperInputLabel, null,
                    React.createElement(S.WrapperInputLabelFile, null,
                        React.createElement(S.UploadInput, { ref: ref, type: "file", name: "file", onChange: handleChangeUploadExcel, accept: ".xlsx" }),
                        React.createElement(S.BoxIconUpload, null,
                            React.createElement("img", { src: upload }))),
                    !!isErroMenssageLabel && !((_a = handlerMandatoryItems()) === null || _a === void 0 ? void 0 : _a.urlConteudo) && (React.createElement(S.TitleErroMenssage, null, "\u00C9 necess\u00E1rio cadastrar ao menos um item!"))))));
    };
    const onChangeRichText = (item) => {
        setAnaliseCriticaDataRich(item.value);
        console.log(item.value);
    };
    const FormRender = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (React.createElement(React.Fragment, null,
            React.createElement(S.LabelInput, null,
                "Modulo",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperInputLabel, null,
                    React.createElement(Select, { type: "modulo", title: "Selecione", width: "20.5rem", height: "2.625rem", maxHeightOptions: "25rem", bottomOptions: "auto", topOptions: "2.8125rem", marginBottom: "0" }),
                    !!isErroMenssageLabel && !((_a = handlerMandatoryItems()) === null || _a === void 0 ? void 0 : _a.modulo) && (React.createElement(S.TitleErroMenssage, null, "\u00C9 necess\u00E1rio cadastrar ao menos um item!")))),
            React.createElement(S.LabelInput, null,
                "Ciclo",
                React.createElement(S.SeparatorInput, null),
                React.createElement(Select, { type: "ciclo", title: "Selecione", width: "20.5rem", height: "2.625rem", maxHeightOptions: "25rem", bottomOptions: "auto", topOptions: "2.8125rem", disabledCiclo: true, form: true, marginBottom: "0" })),
            React.createElement(S.LabelInput, null,
                "Corredor",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperInputLabel, null,
                    React.createElement(Select, { type: "corredor", title: "Selecione", width: "20.5rem", height: "2.625rem", maxHeightOptions: "25rem", bottomOptions: "auto", topOptions: "2.8125rem", marginBottom: "0" }),
                    !!isErroMenssageLabel && !((_b = handlerMandatoryItems()) === null || _b === void 0 ? void 0 : _b.corredor) && (React.createElement(S.TitleErroMenssage, null, "\u00C9 necess\u00E1rio cadastrar ao menos um item!")))),
            React.createElement(S.LabelInput, null,
                "Complexo",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperInputLabel, null,
                    React.createElement(MultSelect, { type: "complexo", title: "Selecione", width: "20.5rem", height: "2.625rem", maxHeightOptions: "25rem", bottomOptions: "auto", topOptions: "2.8125rem", isClear: isClearMultSelect, marginBottom: "0" }),
                    !!isErroMenssageLabel && !((_c = handlerMandatoryItems()) === null || _c === void 0 ? void 0 : _c.complexo) && (React.createElement(S.TitleErroMenssage, null, "\u00C9 necess\u00E1rio cadastrar ao menos um item!")))),
            React.createElement(S.LabelInput, null,
                "Fase",
                React.createElement(S.SeparatorInput, null),
                React.createElement(MultSelect, { type: "fase", title: "Selecione", width: "20.5rem", height: "2.625rem", maxHeightOptions: "25rem", bottomOptions: "auto", topOptions: "2.8125rem", isClear: isClearMultSelect, marginBottom: "0" })),
            React.createElement(S.LabelInput, null,
                "Tipo de Conteudo",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperInputLabel, null,
                    React.createElement(Select, { type: "tiposConteudo", title: "Selecione", width: "20.5rem", height: "2.625rem", maxHeightOptions: "82.8125rem", bottomOptions: "auto", topOptions: "2.8125rem", marginBottom: "0" }),
                    !!isErroMenssageLabel && moduleName[0] === 'Created' && !((_d = handlerMandatoryItems()) === null || _d === void 0 ? void 0 : _d.urlConteudo) && (React.createElement(S.TitleErroMenssage, null, "\u00C9 necess\u00E1rio cadastrar ao menos um item!")))),
            (selectedTipoConteudo === null || selectedTipoConteudo === void 0 ? void 0 : selectedTipoConteudo.Title) === 'PDF' && (React.createElement(React.Fragment, null,
                ' ',
                React.createElement(S.LabelInput, null,
                    "Pdf Conte\u00FAdo",
                    React.createElement(S.SeparatorInput, null),
                    React.createElement(S.WrapperInputLabelFile, null,
                        React.createElement(S.UploadInput, { ref: ref, type: "file", name: "file", onChange: handleChangeUpload, accept: ".pdf" }),
                        React.createElement(S.BoxIconUpload, null,
                            React.createElement("img", { src: upload }))),
                    !!isErroMenssageLabel && moduleName[0] === 'Created' && !((_e = handlerMandatoryItems()) === null || _e === void 0 ? void 0 : _e.urlConteudo) && (React.createElement(S.TitleErroMenssage, null, "\u00C9 necess\u00E1rio cadastrar ao menos um item!"))),
                ' ')),
            (selectedTipoConteudo === null || selectedTipoConteudo === void 0 ? void 0 : selectedTipoConteudo.Title) === 'Análise Estruturada' && renderAnaliseEstruturadaForm(),
            React.createElement(S.LabelInput, null,
                "Descri\u00E7\u00E3o An\u00E1lise Cr\u00EDtica",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperInputLabel, null,
                    React.createElement(S.WrapperContainerRichText, null,
                        React.createElement(RichTextEditorComponent, { height: 450, width: 1036, toolbarSettings: toolbarSettings, quickToolbarSettings: quickToolbarSettings, locale: 'pt-BR', ref: refRichText, value: analiseCriticaDataRich, change: (param) => onChangeRichText(param), className: 'RichText', fontColor: fontColor, backgroundColor: backgroundColor, insertImageSettings: insertImageSettings },
                            React.createElement(Inject, { services: [Toolbar, Image, Link, HtmlEditor, QuickToolbar] }))),
                    !!isErroMenssageLabel && !((_f = handlerMandatoryItems()) === null || _f === void 0 ? void 0 : _f.analiseCritica) && (React.createElement(S.TitleErroMenssage, null, "O valor n\u00E3o pode ficar em branco!")))),
            React.createElement(S.LabelInput, null,
                "Grupos de Acesso para edi\u00E7\u00E3o",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperPeoplePick, null,
                    React.createElement(PeoplePicker, { errorMessage: !!isErroMenssageLabel && !((_g = handlerMandatoryItems()) === null || _g === void 0 ? void 0 : _g.groupEdicao) ? 'É necessário cadastrar ao menos um item!' : undefined, context: props.context, personSelectionLimit: 3, groupName: '', showtooltip: true, tooltipMessage: "Selecione os grupos para edi\u00E7\u00E3o", required: false, disabled: false, onChange: (item) => onChangeAllGroups(item, 'edicao'), showHiddenInUI: false, principalTypes: [PrincipalType.SharePointGroup], resolveDelay: 1000, defaultSelectedUsers: !!itemsConteudoEdit && filters.allGroupsEdicaoSelected ? filters.allGroupsEdicaoSelected : [''] }))),
            React.createElement(S.LabelInput, null,
                "Grupos de Acesso para leitura",
                React.createElement(S.SeparatorInput, null),
                React.createElement(S.WrapperPeoplePick, null,
                    React.createElement(PeoplePicker, { errorMessage: !!isErroMenssageLabel && !((_h = handlerMandatoryItems()) === null || _h === void 0 ? void 0 : _h.groupLeitura) ? 'É necessário cadastrar ao menos um item!' : undefined, context: props.context, personSelectionLimit: 3, groupName: '', showtooltip: true, tooltipMessage: "Selecione os grupos para leitura", required: false, disabled: false, onChange: (item) => onChangeAllGroups(item, 'leitura'), showHiddenInUI: false, principalTypes: [PrincipalType.SharePointGroup], resolveDelay: 1000, defaultSelectedUsers: !!itemsConteudoEdit && filters.allGroupsLeituraSelected ? filters.allGroupsLeituraSelected : [''] })))));
    };
    const CreatedForm = () => {
        var _a;
        return (React.createElement(React.Fragment, null,
            React.createElement(S.Container, null,
                React.createElement(S.WrapperContainer, null,
                    React.createElement(S.TopBarContainer, null,
                        React.createElement(S.TitleView, null, "Criar Conteudo Modulo"),
                        React.createElement(S.TopBar, { src: Barra })),
                    React.createElement(S.WrapperInput, null,
                        React.createElement(S.WrapperButtonEditRouter, null,
                            React.createElement(Button, { backgroundButton: '#007E7A', hoverButton: '#007e7ac2', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => clickRenderRoutes() }, "Editar Conteudo")),
                        React.createElement(S.Separator, { marginTopButton: '-0.5rem' }),
                        FormRender(),
                        React.createElement(S.Separator, null),
                        React.createElement(S.WrapperButton, null,
                            React.createElement("p", null, errMsg),
                            React.createElement(Button, { backgroundButton: 'var(--amarelo-vale)', hoverButton: '#CFA53D', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => clearAll() }, "Limpar"),
                            React.createElement(Button, { backgroundButton: '#007E7A', hoverButton: '#007e7ac2', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => { var _a; return (((_a = filters === null || filters === void 0 ? void 0 : filters.tiposConteudo) === null || _a === void 0 ? void 0 : _a.Nome) === 'Análise Estruturada' ? setrenderChart(true) : handleSubmit(selectedFile)); } }, ((_a = filters === null || filters === void 0 ? void 0 : filters.tiposConteudo) === null || _a === void 0 ? void 0 : _a.Nome) === 'Análise Estruturada' ? 'Confirmar' : 'Enviar')))),
                filters.isOpenOrDisable && moduleName[0] !== 'Edit' && (React.createElement(Modal, { titleMenssage: `${!!isSucessMenssage ? sucessTitleMenssage : errorTitleMenssage}`, SubTitleMenssage: `${!!isSucessMenssage ? sucessSubTitleMenssage : errorSubTitleMenssage}`, error: !!isErroMenssage, sucess: !!isSucessMenssage })),
                !!filters.isOpenOrDisableModalSucessOrError && moduleName[0] !== 'Edit' && React.createElement(Modal, null))));
    };
    const renderChartPngView = (data) => {
        const legendSettings = { visible: true, title: "Anos" };
        const marker = { dataLabel: { visible: true } };
        console.log('total de gráficos', data.length);
        return (React.createElement(React.Fragment, null, data.map((item, index) => {
            var _a, _b, _c, _d;
            return (React.createElement(S.ChartBox, { key: index },
                React.createElement(S.ChartBoxPrint, { id: 'chart' + index },
                    React.createElement(ChartComponent, { style: { display: "flex", justifyContent: "center" }, id: `charts${index}`, title: `${(_a = item.texts) === null || _a === void 0 ? void 0 : _a.tituloItem} | ${(_b = item.texts) === null || _b === void 0 ? void 0 : _b.unidade}`, subTitle: `${(_c = item.texts) === null || _c === void 0 ? void 0 : _c.gerencia} | ${(_d = item.texts) === null || _d === void 0 ? void 0 : _d.grupoAtivo}`, legendSettings: legendSettings, width: '650', height: '350' },
                        React.createElement(Inject, { services: [LineSeries, Tooltip, Category, ColumnSeries, Legend, DataLabel] }),
                        React.createElement(SeriesCollectionDirective, null,
                            React.createElement(SeriesDirective, { dataSource: item.values2, xName: 'x', yName: 'y', type: 'Line', marker: marker }),
                            React.createElement(SeriesDirective, { pointColorMapping: "color", dataSource: item.values, xName: 'x', yName: 'y', type: 'Column', marker: marker }))))));
        })));
    };
    return (React.createElement(React.Fragment, null,
        !!renderChart && (data.length > 0) && (React.createElement(ChartModal, { titleMenssage: "Confirma\u00E7\u00E3o dos gr\u00E1ficos", SubTitleMenssage: "", closeModal: setrenderChart, submitFunction: moduleName[0] === 'Edit' ? handleSubmitUpdate : handleSubmit, data: data, setFile: setSelectedFile, setIsSucessMenssage: setIsSucessMenssage, setIsErroMenssage: setIsErroMenssage, setIsSpinnerModalEditOpen: setIsSpinnerModalEditOpen, setIsSpinnerModalEdit: setIsSpinnerModalEdit },
            React.createElement(S.ChartContainer, { id: "chartContainer" }, renderChartPngView(data)),
            !!filters.isOpenOrDisableModalSucessOrError && !isSpinnerModalEditOpen && moduleName[0] === 'Edit' && (React.createElement(Modal, { isOpenEditFormSpinner: true, isOpenEditForm: true })),
            !!filters.isOpenOrDisableModalSucessOrError && !!isSpinnerModalEditOpen && !isSpinnerModalEdit && moduleName[0] === 'Edit' && (React.createElement(Modal, { titleMenssage: `${!!isSucessMenssage ? sucessTitleMenssageUpdate : errorTitleMenssage}`, SubTitleMenssage: `${!!isSucessMenssage ? sucessSubTitleMenssage : errorSubTitleMenssage}`, error: isErroMenssage, sucess: isSucessMenssage, isOpenEditForm: true })))),
        moduleName[0] === 'Created' && CreatedForm(),
        moduleName[0] === 'Edit' && !isEditValue && (React.createElement(S.Container, null,
            React.createElement(S.WrapperContainer, { minHeight: !!filters.isOpenOrDisable ? '77.0625rem' : '51.0625rem' },
                React.createElement(S.TopBarContainer, null,
                    React.createElement(S.TitleView, null, "Selecione o conteudo do modulo para edi\u00E7\u00E3o"),
                    React.createElement(S.TopBar, { src: Barra })),
                React.createElement(S.WrapperFilterEdit, null,
                    React.createElement(FilterFormEdit, Object.assign({}, props)))))),
        moduleName[0] === 'Edit' && !!isEditValue && (React.createElement(React.Fragment, null,
            React.createElement(S.ContainerEdit, null,
                React.createElement(S.WrapperContainer, { ref: scrollRef, minHeight: '65.0625rem', onScroll: executeScroll },
                    React.createElement(S.TopBarContainer, null,
                        React.createElement(S.TitleView, null, "Editar Conteudo Modulo"),
                        React.createElement(S.TopBar, { src: Barra })),
                    React.createElement(S.WrapperInput, null,
                        FormRender(),
                        React.createElement(S.Separator, null),
                        React.createElement(S.WrapperButton, null,
                            React.createElement("p", null, errMsg),
                            React.createElement(Button, { backgroundButton: 'var(--amarelo-vale)', hoverButton: '#CFA53D', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => clearAll() }, "Limpar"),
                            React.createElement(Button, { backgroundButton: '#007E7A', hoverButton: '#007e7ac2', widthButton: '9.625rem', heightButton: '2.625rem', funcAction: () => {
                                    var _a;
                                    return ((_a = filters === null || filters === void 0 ? void 0 : filters.tiposConteudo) === null || _a === void 0 ? void 0 : _a.Nome) === 'Análise Estruturada'
                                        ? data.length > 0
                                            ? setrenderChart(true)
                                            : handleSubmitUpdate(selectedFile)
                                        : handleSubmitUpdate(selectedFile);
                                } }, ((_a = filters === null || filters === void 0 ? void 0 : filters.tiposConteudo) === null || _a === void 0 ? void 0 : _a.Nome) === 'Análise Estruturada' ? 'Confirmar' : 'Atualizar'))))),
            !!filters.isOpenOrDisableModalSucessOrError && !renderChart && !!isSpinnerModalEditOpen && !isSpinnerModalEdit && moduleName[0] === 'Edit' && (React.createElement(Modal, { titleMenssage: `${!!isSucessMenssage ? sucessTitleMenssageUpdate : errorTitleMenssage}`, SubTitleMenssage: `${!!isSucessMenssage ? sucessSubTitleMenssage : errorSubTitleMenssage}`, error: isErroMenssage, sucess: isSucessMenssage, isOpenEditForm: true })),
            !!filters.isOpenOrDisableModalSucessOrError && !renderChart && !isSpinnerModalEditRenderChart && !isSpinnerModalEditOpen && moduleName[0] === 'Edit' && (React.createElement(Modal, { isOpenEditFormSpinner: true, isOpenEditForm: true }))))));
};
export default Form;
//# sourceMappingURL=index.js.map