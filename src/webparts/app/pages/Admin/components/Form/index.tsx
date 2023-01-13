import * as React from 'react';
import * as S from './styles';
import { sp } from '@pnp/sp/presets/all';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Category, ChartComponent, ColumnSeries, DataLabel, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';


let toolbarSettings: object = {
  items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', '|', 'Undo', 'Redo']
}

let insertImageSettings: object = {
  allowedTypes: ['.jpeg', '.jpg', '.png'],
  display: 'inline',
  width: 'auto',
  height: 'auto',
  saveFormat: 'Base64',

}

let quickToolbarSettings: object = {
  image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
}

let fontColor: object = {
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
}


let backgroundColor: object = {
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
}


import '@pnp/sp/files';
import '@pnp/sp/folders';
import Barra from '../../../../assets/img/BarraForm.png';
import Button from '../../../../components/Button';
import { ConteudoModuloClassService } from '../../../../services/ConteudoModuloClassService';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import { IAppProps } from '../../../../interfaces/IAppProps';
import { PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';
import MultSelect from '../../../../components/MultSelect';
import Select from '../../../../components/Select';

import {
  clearAllComplexosSelected,
  clearAllFasesSelected,
  clearFilterComplexosArray,
  clearFilterFaseArray,
  setAllGroupsEdicaoSelected,
  setAllGroupsLeituraSelected,
  setIsOpenOrDisable,
  setIsOpenOrDisableModalSucessOrError,
  setListFilterCorredor,
  setListFilterModulo,
  setListFilterTiposConteudo,
} from '../../../../../../dataflow/reducers/StateList';
import Modal from '../../../../components/Modal';
import ChartModal from '../../../../components/ChartModal';
import * as xlsx from 'xlsx';
import upload from '../../../../assets/img/IconUploadFile.png';
import { useHistory, useLocation } from 'react-router-dom';
import FilterFormEdit from './FilterFormEdit';
import { IConteudoItems } from '../../../../interfaces/IConteudoItems';


interface IProps {
  props?: IAppProps;
  isEditValue?: boolean;
  itemsConteudoEdit?: IConteudoItems;
}

const Form = ({ props, isEditValue = false, itemsConteudoEdit }: IProps) => {
  const location = useLocation();
  const regex = /([^/]+$)/g;
  const moduleName = regex.exec(location.pathname);
  const [isClearGroups, setIsClearGroups] = React.useState(false);
  const [isClearMultSelect, setIsClearMultSelect] = React.useState(false);
  const [isSucessMenssage, setIsSucessMenssage] = React.useState<any>(false);
  const [isSpinnerModalEdit, setIsSpinnerModalEdit] = React.useState<any>(false);
  const [isSpinnerModalEditOpen, setIsSpinnerModalEditOpen] = React.useState(false);
  const [isSpinnerModalEditRenderChart, setIsSpinnerModalEditOpenRenderChart] = React.useState(true);
  const isSucessChart = useAppSelector((state) => state.state.isChartValueContent);
  const [isErroMenssage, setIsErroMenssage] = React.useState<any>(false);
  const [isErroMenssageLabel, setIsErroMenssageLabel] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<any>();
  const [analiseCriticaDataRich, setAnaliseCriticaDataRich] = React.useState<any>(!!itemsConteudoEdit ? itemsConteudoEdit.AnaliseCritica : '');

  const conteudoModulo = new ConteudoModuloClassService();
  const filters = useAppSelector((state) => state.state.filters);
  const [errMsg, setErrMsg] = React.useState(null);
  const dispatch = useAppDispatch();
  const ref: any = React.useRef();
  const tiposConteudo = useAppSelector((state) => state.state.listTiposConteudos);
  const selectedTipoConteudo = useAppSelector((state) => state.state.filters?.tiposConteudo);
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
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    console.log(scrollRef.current.scrollIntoView())
  };

  const clickRenderRoutes = () => {
    history.push(`/FormConteudoModulo/Edit`);
  };

  React.useEffect(() => {
    if (!!itemsConteudoEdit) {
      dispatch(setAllGroupsEdicaoSelected(itemsConteudoEdit.GruposEdicao.Title));
      dispatch(setAllGroupsLeituraSelected(itemsConteudoEdit.GruposLeitura.Title));
      executeScroll()
    }
  }, []);


  const handlerMandatoryItems = () => {
    const response = {
      corredor: !!filters.corredor?.Id || false,
      complexo: filters.corredor?.Id === 5 ? true : filters.complexoArray?.length !== 0 || false,
      ciclo: !!filters.cicloCurrent?.Id || false,
      modulo: !!filters.modulo?.Id || false,
      urlConteudo: filters.tiposConteudo?.Id === 4 ? true : !!selectedFile || false,
      groupEdicao: filters.allGroupsEdicaoSelected?.length !== 0 || false,
      groupLeitura: filters.allGroupsLeituraSelected?.length !== 0 || false,
      analiseCritica: analiseCriticaDataRich !== '' || false,
      tiposConteudo: !!filters.tiposConteudo?.Id || false,
    };

    return response;
  };

  const handleChangeUpload = (e: any) => {
    console.log('oie boladão', e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleClickDownloadExcel = async () => {
    const blob = await sp.web
      .getFileByUrl(
        'https://globalvale.sharepoint.com/:x:/r/teams/PlanDirGestaoAtivos/_layouts/15/Doc.aspx?sourcedoc=%7B14ADC4E6-56F9-4930-8EF4-402F99DAC5E7%7D&file=modeloPlaninhaAnaliseEstruturada.xlsx&action=default&mobileredirect=true'
      )
      .getBlob();

    const url = window.URL || window.webkitURL;
    const linkCreated = url.createObjectURL(blob);
    //window.open(linkCreated)
    const link = document.createElement('a');
    link.href = linkCreated;
    link.download = `modeloPlanilha.xlsx`;
    link.click();
    link.remove();
  };

  const handleChangeUploadExcel = (e: any) => {
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
        const json: any[] = xlsx.utils.sheet_to_json(worksheet, {
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
        const headerValues = json.slice(0, 1).map((item) =>
          Object.keys(item).filter((key) => {
            if (values.includes(key)) {
              return item[key];
            }
          })
        );

        const header: string[] = ['Ano', 'Valor', 'Referência'];

        const json1: any[] = [];

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

  const handleSubmit = (file: any) => {
    setIsErroMenssage(false);
    setIsSucessMenssage(false);
    setIsSpinnerModalEdit(true)
    dispatch(setIsOpenOrDisableModalSucessOrError(true));

    const itensVerifiedSucess =
      handlerMandatoryItems()?.ciclo &&
      handlerMandatoryItems()?.modulo &&
      handlerMandatoryItems()?.complexo &&
      handlerMandatoryItems()?.corredor &&
      handlerMandatoryItems()?.urlConteudo &&
      handlerMandatoryItems()?.groupEdicao &&
      handlerMandatoryItems()?.groupLeitura &&
      handlerMandatoryItems()?.analiseCritica &&
      handlerMandatoryItems()?.tiposConteudo;

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
      if (filters?.tiposConteudo?.Nome === 'Análise Estruturada') {
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
                .editConteudoModuloAddPdf(response.data['Id'] as number, dataToSend)
                .then((res) => {
                  dispatch(setIsOpenOrDisable(true));
                  setIsSucessMenssage(true);
                  dispatch(setIsOpenOrDisableModalSucessOrError(false));
                })
                .catch((err) => console.log('err in updating ConteudoModulos', err));
            })
            .catch((err) => console.log('err in updating ConteudoModulos', err));
        })
        .catch((err: Error) => {
          dispatch(setIsOpenOrDisable(true));
          setIsErroMenssage(true);
          dispatch(setIsOpenOrDisableModalSucessOrError(false));
          const msg = err.message;
          console.log(msg);
          if (msg.includes('arquivo com o nome')) {
            setErrMsg('Já existe um arquivo com o nome na pasta em que você tentou salvar.');
          }
        });
    } else {
      dispatch(setIsOpenOrDisable(true));
      setIsErroMenssage(true);
      setIsErroMenssageLabel(true);
      dispatch(setIsOpenOrDisableModalSucessOrError(false));
    }
  };

  const handleSubmitUpdate = (file: any) => {
    dispatch(setIsOpenOrDisableModalSucessOrError(true))

    setIsSpinnerModalEditOpenRenderChart(false)
    setIsErroMenssage(false);
    setIsSucessMenssage(false);
    setIsSpinnerModalEdit(true)

    const itensVerifiedSucess =
      handlerMandatoryItems()?.ciclo &&
      handlerMandatoryItems()?.modulo &&
      handlerMandatoryItems()?.complexo &&
      handlerMandatoryItems()?.corredor &&
      handlerMandatoryItems()?.groupEdicao &&
      handlerMandatoryItems()?.groupLeitura &&
      handlerMandatoryItems()?.analiseCritica &&
      handlerMandatoryItems()?.tiposConteudo;
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
          GruposEdicaoId:
            filters.allGroupsEdicaoSelected.length > 0
              ? { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.allGroupsEdicaoSelected.map((item) => parseInt(item.id)) }
              : '',
          GruposLeituraId:
            filters.allGroupsLeituraSelected.length > 0
              ? { __metadata: { type: 'Collection(Edm.Int32)' }, results: filters.allGroupsLeituraSelected.map((item) => parseInt(item.id)) }
              : '',
        },
      ];

      if (filters?.tiposConteudo?.Nome === 'Análise Estruturada') {
        setrenderChart(false);
      }

      dataToSendObject.forEach((value: any) => {
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
          setIsSpinnerModalEdit(false)
          setIsSpinnerModalEditOpen(true)
          if (!!selectedFile) {
            conteudoModulo
              .editFileToFolder(file, filters, itemsConteudoEdit.Id)
              .then((res) => {
                console.log('resFile', res);
              })
              .catch((err) => console.log('err in updating ConteudoModulos', err));
          }
        })
        .catch((err: Error) => {
          dispatch(setIsOpenOrDisable(true));
          setIsSpinnerModalEdit(false)
          setIsSpinnerModalEditOpen(true)
          setIsErroMenssage(true);
          const msg = err.message;
          console.log(msg);
          if (msg.includes('arquivo com o nome')) {
            setErrMsg('Já existe um arquivo com o nome na pasta em que você tentou salvar.');
          }
        });
    } else {
      dispatch(setIsOpenOrDisable(true));
      setIsErroMenssage(true);
      setIsErroMenssageLabel(true);
      setIsSpinnerModalEdit(false)
      setIsSpinnerModalEditOpen(true)
    }
  };

  const clearAll = () => {
    setAnaliseCriticaDataRich('');
    refRichText = null
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
      executeScroll()
    }
    if (moduleName[0] === 'Created') {
      dispatch(setListFilterModulo(null));
    }
  };

  const onChangeAllGroups = (item: any[], groups?: string) => {
    if (groups === 'edicao') {
      dispatch(setAllGroupsEdicaoSelected(item));
    } else if (groups === 'leitura') {
      dispatch(setAllGroupsLeituraSelected(item));
    }
    console.log(filters.allGroupsEdicaoSelected.map((item) => parseInt(item.id)));
  };

  React.useEffect(() => {
    if (!selectedFile && selectedTipoConteudo?.Title === 'PDF' && moduleName[0] === 'Created') {
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
    return (
      <>
        <S.LabelInput>
          Baixar modelo de excel
          <S.SeparatorInput />
          <S.BtnBox>
            <p>{errMsg}</p>
            <Button
              backgroundButton={'rgb(0 123 119 / 71%)'}
              hoverButton={'rgb(0 123 119 / 100%)'}
              widthButton={'9.625rem'}
              heightButton={'2.625rem'}
              funcAction={handleClickDownloadExcel}
            >
              Baixar Modelo
            </Button>
          </S.BtnBox>
          {/* {chartTeste()} */}
        </S.LabelInput>


        <S.LabelInput>
          Valores dos gráficos (Upload Excel)
          <S.SeparatorInput />
          <S.WrapperInputLabel>
            <S.WrapperInputLabelFile>
              <S.UploadInput ref={ref} type="file" name="file" onChange={handleChangeUploadExcel} accept=".xlsx" />
              <S.BoxIconUpload>
                <img src={upload} />
              </S.BoxIconUpload>
            </S.WrapperInputLabelFile>
            {!!isErroMenssageLabel && !handlerMandatoryItems()?.urlConteudo && (
              <S.TitleErroMenssage>É necessário cadastrar ao menos um item!</S.TitleErroMenssage>
            )}
          </S.WrapperInputLabel>
        </S.LabelInput>
      </>
    );
  };

  const onChangeRichText = (item: any) => {
    setAnaliseCriticaDataRich(item.value);
    console.log(item.value)
  };

  const FormRender = () => {
    return (
      <>
        <S.LabelInput>
          Modulo
          <S.SeparatorInput />
          <S.WrapperInputLabel>
            <Select
              type="modulo"
              title="Selecione"
              width="20.5rem"
              height="2.625rem"
              maxHeightOptions="25rem"
              bottomOptions="auto"
              topOptions="2.8125rem"
              marginBottom="0"
            />
            {!!isErroMenssageLabel && !handlerMandatoryItems()?.modulo && (
              <S.TitleErroMenssage>É necessário cadastrar ao menos um item!</S.TitleErroMenssage>
            )}
          </S.WrapperInputLabel>
        </S.LabelInput>
        <S.LabelInput>
          Ciclo
          <S.SeparatorInput />
          <Select
            type="ciclo"
            title="Selecione"
            width="20.5rem"
            height="2.625rem"
            maxHeightOptions="25rem"
            bottomOptions="auto"
            topOptions="2.8125rem"
            disabledCiclo={true}
            form={true}
            marginBottom="0"
          />
        </S.LabelInput>

        <S.LabelInput>
          Corredor
          <S.SeparatorInput />
          <S.WrapperInputLabel>
            <Select
              type="corredor"
              title="Selecione"
              width="20.5rem"
              height="2.625rem"
              maxHeightOptions="25rem"
              bottomOptions="auto"
              topOptions="2.8125rem"
              marginBottom="0"
            />
            {!!isErroMenssageLabel && !handlerMandatoryItems()?.corredor && (
              <S.TitleErroMenssage>É necessário cadastrar ao menos um item!</S.TitleErroMenssage>
            )}
          </S.WrapperInputLabel>
        </S.LabelInput>

        <S.LabelInput>
          Complexo
          <S.SeparatorInput />
          <S.WrapperInputLabel>
            <MultSelect
              type="complexo"
              title="Selecione"
              width="20.5rem"
              height="2.625rem"
              maxHeightOptions="25rem"
              bottomOptions="auto"
              topOptions="2.8125rem"
              isClear={isClearMultSelect}
              marginBottom="0"
            />
            {!!isErroMenssageLabel && !handlerMandatoryItems()?.complexo && (
              <S.TitleErroMenssage>É necessário cadastrar ao menos um item!</S.TitleErroMenssage>
            )}
          </S.WrapperInputLabel>
        </S.LabelInput>

        <S.LabelInput>
          Fase
          <S.SeparatorInput />
          <MultSelect
            type="fase"
            title="Selecione"
            width="20.5rem"
            height="2.625rem"
            maxHeightOptions="25rem"
            bottomOptions="auto"
            topOptions="2.8125rem"
            isClear={isClearMultSelect}
            marginBottom="0"
          />
        </S.LabelInput>
        <S.LabelInput>
          Tipo de Conteudo
          <S.SeparatorInput />
          <S.WrapperInputLabel>
            <Select
              type="tiposConteudo"
              title="Selecione"
              width="20.5rem"
              height="2.625rem"
              maxHeightOptions="82.8125rem"
              bottomOptions="auto"
              topOptions="2.8125rem"
              marginBottom="0"
            />
            {!!isErroMenssageLabel && moduleName[0] === 'Created' && !handlerMandatoryItems()?.urlConteudo && (
              <S.TitleErroMenssage>É necessário cadastrar ao menos um item!</S.TitleErroMenssage>
            )}
          </S.WrapperInputLabel>
        </S.LabelInput>

        {selectedTipoConteudo?.Title === 'PDF' && (
          <>
            {' '}
            <S.LabelInput>
              Pdf Conteúdo
              <S.SeparatorInput />
              <S.WrapperInputLabelFile>
                <S.UploadInput ref={ref} type="file" name="file" onChange={handleChangeUpload} accept=".pdf" />
                <S.BoxIconUpload>
                  <img src={upload} />
                </S.BoxIconUpload>
              </S.WrapperInputLabelFile>
              {!!isErroMenssageLabel && moduleName[0] === 'Created' && !handlerMandatoryItems()?.urlConteudo && (
                <S.TitleErroMenssage>É necessário cadastrar ao menos um item!</S.TitleErroMenssage>
              )}
            </S.LabelInput>{' '}
          </>
        )}

        {selectedTipoConteudo?.Title === 'Análise Estruturada' && renderAnaliseEstruturadaForm()}

        <S.LabelInput>
          Descrição Análise Crítica
          <S.SeparatorInput />

          <S.WrapperInputLabel>
            <S.WrapperContainerRichText>
              <RichTextEditorComponent
                height={450}
                width={1036}
                toolbarSettings={toolbarSettings}
                quickToolbarSettings={quickToolbarSettings}
                locale='pt-BR'
                ref={refRichText}
                value={analiseCriticaDataRich}
                change={(param) => onChangeRichText(param)}
                className='RichText'
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                insertImageSettings={insertImageSettings}
              >
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
              </RichTextEditorComponent>
            </S.WrapperContainerRichText>
            {!!isErroMenssageLabel && !handlerMandatoryItems()?.analiseCritica && (
              <S.TitleErroMenssage>O valor não pode ficar em branco!</S.TitleErroMenssage>
            )}
          </S.WrapperInputLabel>
        </S.LabelInput>
        <S.LabelInput>
          Grupos de Acesso para edição
          <S.SeparatorInput />
          <S.WrapperPeoplePick>
            <PeoplePicker
              errorMessage={!!isErroMenssageLabel && !handlerMandatoryItems()?.groupEdicao ? 'É necessário cadastrar ao menos um item!' : undefined}
              context={props.context as any}
              personSelectionLimit={3}
              groupName={''}
              showtooltip={true}
              tooltipMessage="Selecione os grupos para edição"
              required={false}
              disabled={false}
              onChange={(item: any) => onChangeAllGroups(item, 'edicao')}
              showHiddenInUI={false}
              principalTypes={[PrincipalType.SharePointGroup]}
              resolveDelay={1000}
              defaultSelectedUsers={!!itemsConteudoEdit && filters.allGroupsEdicaoSelected ? filters.allGroupsEdicaoSelected : ['']}
            />
          </S.WrapperPeoplePick>
        </S.LabelInput>
        <S.LabelInput>
          Grupos de Acesso para leitura
          <S.SeparatorInput />
          <S.WrapperPeoplePick>
            <PeoplePicker
              errorMessage={!!isErroMenssageLabel && !handlerMandatoryItems()?.groupLeitura ? 'É necessário cadastrar ao menos um item!' : undefined}
              context={props.context as any}
              personSelectionLimit={3}
              groupName={''}
              showtooltip={true}
              tooltipMessage="Selecione os grupos para leitura"
              required={false}
              disabled={false}
              onChange={(item: any) => onChangeAllGroups(item, 'leitura')}
              showHiddenInUI={false}
              principalTypes={[PrincipalType.SharePointGroup]}
              resolveDelay={1000}
              defaultSelectedUsers={!!itemsConteudoEdit && filters.allGroupsLeituraSelected ? filters.allGroupsLeituraSelected : ['']}
            />
          </S.WrapperPeoplePick>
        </S.LabelInput>
      </>
    );
  };

  const CreatedForm = () => {
    return (
      <>
        <S.Container>
          <S.WrapperContainer >
            <S.TopBarContainer>
              <S.TitleView>Criar Conteudo Modulo</S.TitleView>
              <S.TopBar src={Barra} />
            </S.TopBarContainer>

            <S.WrapperInput>
              <S.WrapperButtonEditRouter>
                <Button
                  backgroundButton={'#007E7A'}
                  hoverButton={'#007e7ac2'}
                  widthButton={'9.625rem'}
                  heightButton={'2.625rem'}
                  funcAction={() => clickRenderRoutes()}
                >
                  Editar Conteudo
                </Button>
              </S.WrapperButtonEditRouter>
              <S.Separator marginTopButton={'-0.5rem'} />
              {FormRender()}
              <S.Separator />
              <S.WrapperButton>
                <p>{errMsg}</p>
                <Button
                  backgroundButton={'var(--amarelo-vale)'}
                  hoverButton={'#CFA53D'}
                  widthButton={'9.625rem'}
                  heightButton={'2.625rem'}
                  funcAction={() => clearAll()}
                >
                  Limpar
                </Button>
                <Button
                  backgroundButton={'#007E7A'}
                  hoverButton={'#007e7ac2'}
                  widthButton={'9.625rem'}
                  heightButton={'2.625rem'}
                  funcAction={() => (filters?.tiposConteudo?.Nome === 'Análise Estruturada' ? setrenderChart(true) : handleSubmit(selectedFile))}
                >
                  {filters?.tiposConteudo?.Nome === 'Análise Estruturada' ? 'Confirmar' : 'Enviar'}
                </Button>
              </S.WrapperButton>
            </S.WrapperInput>
          </S.WrapperContainer>
          {filters.isOpenOrDisable && moduleName[0] !== 'Edit' && (
            <Modal
              titleMenssage={`${!!isSucessMenssage ? sucessTitleMenssage : errorTitleMenssage}`}
              SubTitleMenssage={`${!!isSucessMenssage ? sucessSubTitleMenssage : errorSubTitleMenssage}`}
              error={!!isErroMenssage}
              sucess={!!isSucessMenssage}
            />
          )}
          {!!filters.isOpenOrDisableModalSucessOrError && moduleName[0] !== 'Edit' && <Modal />}
        </S.Container>
      </>
    );
  };

  const renderChartPngView = (data: any[]) => {
    const legendSettings = { visible: true, title: "Anos" };
    const marker = { dataLabel: { visible: true } };
    console.log('total de gráficos', data.length)
    return (
      <>
        {data.map((item, index) => (
          <S.ChartBox key={index}>
            <S.ChartBoxPrint id={'chart' + index}>
              {/* <S.ChartTitle>
                {item.texts?.tituloItem} / {item.texts?.unidade}
              </S.ChartTitle>
              <S.ChartTitle>
                {item.texts?.gerencia} / {item.texts?.grupoAtivo}
              </S.ChartTitle> */}
              <ChartComponent style={{ display: "flex", justifyContent: "center" }} id={`charts${index}`} title={`${item.texts?.tituloItem} | ${item.texts?.unidade}`} subTitle={`${item.texts?.gerencia} | ${item.texts?.grupoAtivo}`} legendSettings={legendSettings} width='650' height='350'>
                <Inject services={[LineSeries, Tooltip, Category, ColumnSeries, Legend, DataLabel]} />
                <SeriesCollectionDirective>
                  <SeriesDirective dataSource={item.values2} xName='x' yName='y' type='Line' marker={marker} />
                  <SeriesDirective pointColorMapping="color" dataSource={item.values} xName='x' yName='y' type='Column' marker={marker} />
                </SeriesCollectionDirective>
              </ChartComponent>
            </S.ChartBoxPrint>
          </S.ChartBox>
        ))}
      </>
    );
  };

  return (
    <>
      {!!renderChart && (data.length > 0) && (
        <ChartModal
          titleMenssage="Confirmação dos gráficos"
          SubTitleMenssage=""
          closeModal={setrenderChart}
          submitFunction={moduleName[0] === 'Edit' ? handleSubmitUpdate : handleSubmit}
          data={data}
          setFile={setSelectedFile}
          setIsSucessMenssage={setIsSucessMenssage}
          setIsErroMenssage={setIsErroMenssage}
          setIsSpinnerModalEditOpen={setIsSpinnerModalEditOpen}
          setIsSpinnerModalEdit={setIsSpinnerModalEdit}
        >
          <S.ChartContainer id="chartContainer">{renderChartPngView(data)}</S.ChartContainer>
          {!!filters.isOpenOrDisableModalSucessOrError && !isSpinnerModalEditOpen && moduleName[0] === 'Edit' && (
            <Modal
              isOpenEditFormSpinner={true}
              isOpenEditForm={true}
            />
          )}

          {!!filters.isOpenOrDisableModalSucessOrError && !!isSpinnerModalEditOpen && !isSpinnerModalEdit && moduleName[0] === 'Edit' && (
            <Modal
              titleMenssage={`${!!isSucessMenssage ? sucessTitleMenssageUpdate : errorTitleMenssage}`}
              SubTitleMenssage={`${!!isSucessMenssage ? sucessSubTitleMenssage : errorSubTitleMenssage}`}
              error={isErroMenssage}
              sucess={isSucessMenssage}
              isOpenEditForm={true}
            />
          )}

        </ChartModal>

      )}

      {moduleName[0] === 'Created' && CreatedForm()}

      {moduleName[0] === 'Edit' && !isEditValue && (
        <S.Container >
          <S.WrapperContainer minHeight={!!filters.isOpenOrDisable ? '77.0625rem' : '51.0625rem'}>
            <S.TopBarContainer>
              <S.TitleView>Selecione o conteudo do modulo para edição</S.TitleView>
              <S.TopBar src={Barra} />
            </S.TopBarContainer>

            <S.WrapperFilterEdit>
              <FilterFormEdit {...props} />
            </S.WrapperFilterEdit>
          </S.WrapperContainer>
        </S.Container>
      )}

      {moduleName[0] === 'Edit' && !!isEditValue && (
        <>
          <S.ContainerEdit>
            <S.WrapperContainer ref={scrollRef} minHeight='65.0625rem' onScroll={executeScroll}>
              <S.TopBarContainer>
                <S.TitleView>Editar Conteudo Modulo</S.TitleView>
                <S.TopBar src={Barra} />
              </S.TopBarContainer>
              <S.WrapperInput>
                {FormRender()}

                <S.Separator />
                <S.WrapperButton>
                  <p>{errMsg}</p>
                  <Button
                    backgroundButton={'var(--amarelo-vale)'}
                    hoverButton={'#CFA53D'}
                    widthButton={'9.625rem'}
                    heightButton={'2.625rem'}
                    funcAction={() => clearAll()}
                  >
                    Limpar
                  </Button>
                  <Button
                    backgroundButton={'#007E7A'}
                    hoverButton={'#007e7ac2'}
                    widthButton={'9.625rem'}
                    heightButton={'2.625rem'}
                    funcAction={() =>
                      filters?.tiposConteudo?.Nome === 'Análise Estruturada'
                        ? data.length > 0
                          ? setrenderChart(true)
                          : handleSubmitUpdate(selectedFile)
                        : handleSubmitUpdate(selectedFile)
                    }
                  >
                    {filters?.tiposConteudo?.Nome === 'Análise Estruturada' ? 'Confirmar' : 'Atualizar'}
                  </Button>
                </S.WrapperButton>
              </S.WrapperInput>
            </S.WrapperContainer>
          </S.ContainerEdit>

          {!!filters.isOpenOrDisableModalSucessOrError && !renderChart && !!isSpinnerModalEditOpen && !isSpinnerModalEdit && moduleName[0] === 'Edit' && (
            <Modal
              titleMenssage={`${!!isSucessMenssage ? sucessTitleMenssageUpdate : errorTitleMenssage}`}
              SubTitleMenssage={`${!!isSucessMenssage ? sucessSubTitleMenssage : errorSubTitleMenssage}`}
              error={isErroMenssage}
              sucess={isSucessMenssage}
              isOpenEditForm={true}
            />
          )}

          {!!filters.isOpenOrDisableModalSucessOrError && !renderChart && !isSpinnerModalEditRenderChart && !isSpinnerModalEditOpen && moduleName[0] === 'Edit' && (
            <Modal
              isOpenEditFormSpinner={true}
              isOpenEditForm={true}
            />
          )}
        </>
      )}
    </>
  );
};

export default Form;
