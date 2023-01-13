import { createSlice } from '@reduxjs/toolkit';
import { ICicloItemsFormated } from '../../webparts/app/interfaces/ICicloItems';
import { IModuloItemsFormated } from '../../webparts/app/interfaces/IModuloItems';
import { IComplexoItems } from '../../webparts/app/interfaces/IComplexoItems';
import { IFaseItems } from '../../webparts/app/interfaces/IFaseItems';
import { ICorredorItems } from '../../webparts/app/interfaces/ICorredorItems';
import { IConteudoAnaliseCritica } from '../../webparts/app/interfaces/IConteudoAnaliseCritica';
import { IConteudoItems, IGrupos } from '../../webparts/app/interfaces/IConteudoItems';
import { IInformativosCentralFormatted } from '../../webparts/app/interfaces/IInformativosCarrosel';
import { ITiposConteudoFormated, ITiposConteudoItems } from '../../webparts/app/interfaces/ITiposConteudo';
import { IMenuItems } from '../../webparts/app/interfaces/IMenuItems';
import { ISiteIGroupsInfo } from '../../webparts/app/interfaces/IGroupsInfo';

let ICicloState: ICicloItemsFormated;
let IModuloState: IModuloItemsFormated;
let IComplexoState: IComplexoItems;
let IFaseState: IFaseItems;
let ICorredorState: ICorredorItems;
let IisOpenOrDisable: false;
let IConteudoAnaliseCritica: IConteudoAnaliseCritica;
let IConteudoItems: IComplexoItems;
let IAllGroups: IGrupos;
let ITiposConteudoState: ITiposConteudoFormated;

export interface IIinitialState {
  listModulo: IModuloItemsFormated[];
  listCorredor: ICorredorItems[];
  listComplexo: IComplexoItems[];
  listFase: IFaseItems[];
  listCiclo: ICicloItemsFormated[];
  listInfoLabel: any[];
  listGroupsTeamsEdicao: ISiteIGroupsInfo[];
  listGroupsTeamsLeitura: ISiteIGroupsInfo[];
  listInfoCentral: IInformativosCentralFormatted[];
  listTiposConteudos: ITiposConteudoFormated[];
  listMenuItem: IMenuItems[];
  filters: {
    openToogle: boolean;
    openToogleClosed: boolean;
    openToogleMultiSelectComplexo: boolean;
    openToogleMultiSelectFase: boolean;
    isOpenOrDisableModalSucessOrError: boolean;
    allComplexosSelected: boolean;
    allFasesSelected: boolean;
    modulo: IModuloItemsFormated;
    ciclo: ICicloItemsFormated;
    corredor: ICorredorItems;
    complexo: IComplexoItems;
    fase: IFaseItems;
    cicloCurrent: ICicloItemsFormated;
    isOpenOrDisable: boolean;
    complexoArray: IComplexoItems[];
    faseArray: IFaseItems[];
    allGroupsLeituraSelected: any[];
    allGroupsEdicaoSelected: any[];
    tiposConteudo: ITiposConteudoFormated;
  };
  listInformativos: any[];
  isContextRouterModulo: string;
  listConteudoAnaliseCritica: IConteudoAnaliseCritica[];
  listFiltred: IConteudoItems[];
  filterComplexos: IComplexoItems[];
  graphicsImages: any[];
  isChartValueContent: boolean;
}
const initialState: IIinitialState = {
  listModulo: [],
  listCorredor: [],
  listComplexo: [],
  listFase: [],
  listCiclo: [],
  listInfoLabel: [],
  listGroupsTeamsEdicao: [],
  listGroupsTeamsLeitura: [],
  listInfoCentral: [],
  listConteudoAnaliseCritica: [],
  listTiposConteudos: [],
  listMenuItem: [],
  filters: {
    openToogle: false,
    openToogleClosed: false,
    openToogleMultiSelectComplexo: false,
    openToogleMultiSelectFase: false,
    isOpenOrDisableModalSucessOrError: false,
    allComplexosSelected: false,
    allFasesSelected: false,
    modulo: IModuloState,
    ciclo: ICicloState,
    corredor: ICorredorState,
    complexo: IComplexoState,
    fase: IFaseState,
    cicloCurrent: ICicloState,
    isOpenOrDisable: IisOpenOrDisable,
    complexoArray: [],
    faseArray: [],
    allGroupsEdicaoSelected: [],
    allGroupsLeituraSelected: [],
    tiposConteudo: ITiposConteudoState,
  },
  listInformativos: [],
  isContextRouterModulo: '',
  listFiltred: [],
  filterComplexos: [],
  graphicsImages: [],
  isChartValueContent: false,
};
export const state = createSlice({
  name: 'state',
  initialState: initialState,
  reducers: {
    itemOpenToogleClosed: (state, action) => {
      state.filters.openToogleClosed = action.payload;
    },
    itemOpenToogleMultiSelectComplexo: (state, action) => {
      state.filters.openToogleMultiSelectComplexo = action.payload;
    },
    itemOpenToogleMultiSelectFase: (state, action) => {
      state.filters.openToogleMultiSelectFase = action.payload;
    },
    itemsIsChartValueContent: (state, action) => {
      state.isChartValueContent = action.payload;
    },
    itemsFilterOpenToogle: (state, action) => {
      state.filters.openToogle = action.payload;
    },
    itemsAddModulo: (state, action) => {
      state.listModulo.push(action.payload);
    },
    itemsAddCorredor: (state, action) => {
      state.listCorredor.push(action.payload);
    },
    itemsAddFase: (state, action) => {
      state.listFase.push(action.payload);
    },
    itemsAddComplexo: (state, action) => {
      state.listComplexo.push(action.payload);
    },
    itemsAddCiclo: (state, action) => {
      state.listCiclo.push(action.payload);
    },
    itemsAddInformativos: (state, action) => {
      state.listInformativos.push(action.payload);
    },
    itemsAddInformativosLabel: (state, action) => {
      state.listInfoLabel.push(action.payload);
    },
    setItemsAddInformativosCentral: (state, action) => {
      state.listInfoCentral.push(action.payload);
    },
    setListFilterCiclo: (state, action) => {
      state.filters.ciclo = action.payload;
    },
    setCicloCurrent: (state, action) => {
      state.filters.cicloCurrent = action.payload;
    },
    setTiposConteudo: (state, action) => {
      state.listTiposConteudos.push(action.payload);
    },
    setListFilter: (state, action) => {
      state.filters = action.payload;
    },
    setListFilterModulo: (state, action) => {
      state.filters.modulo = action.payload;
    },
    setListMenuItems: (state, action) => {
      state.listMenuItem.push(action.payload);
    },
    setListFilterComplexo: (state, action) => {
      state.filters.complexo = action.payload;
    },
    setListFilterCorredor: (state, action) => {
      state.filters.corredor = action.payload;
    },
    setListFilterFase: (state, action) => {
      state.filters.fase = action.payload;
    },
    setListFilterTiposConteudo: (state, action) => {
      state.filters.tiposConteudo = action.payload;
    },
    setListGroupsTeamEdicao: (state, action) => {
      state.listGroupsTeamsEdicao.push(action.payload);
    },
    clearGroupsTeamEdicao: (state) => {
      state.listGroupsTeamsEdicao = [];
    },
    setListGroupsTeamLeitura: (state, action) => {
      state.listGroupsTeamsLeitura.push(action.payload);
    },
    clearGroupsTeamLeitura: (state) => {
      state.listGroupsTeamsLeitura = [];
    },
    setIsOpenOrDisable: (state, action) => {
      state.filters.isOpenOrDisable = action.payload;
    },
    setIsOpenOrDisableModalSucessOrError: (state, action) => {
      state.filters.isOpenOrDisableModalSucessOrError = action.payload;
    },
    setIsContextRouterModulo: (state, action) => {
      state.isContextRouterModulo = action.payload;
    },
    setIsConteudoAnaliseCritica: (state, action) => {
      state.listConteudoAnaliseCritica = action.payload;
    },
    setListFiltred: (state, action) => {
      state.listFiltred = action.payload;
    },
    setFilterComplexos: (state, action) => {
      state.filterComplexos.push(action.payload);
    },
    setFilterComplexosArray: (state, action) => {
      state.filters.complexoArray.push(action.payload);
    },
    setFilterFaseArray: (state, action) => {
      state.filters.faseArray.push(action.payload);
    },
    setAllGroupsEdicaoSelected: (state, action) => {
      state.filters.allGroupsEdicaoSelected = action.payload;
    },
    setAllGroupsLeituraSelected: (state, action) => {
      state.filters.allGroupsLeituraSelected = action.payload;
    },
    clearFilterFaseArray: (state) => {
      state.filters.faseArray = [];
    },
    clearFilterComplexosArray: (state) => {
      state.filters.complexoArray = [];
    },
    clearAllComplexosSelected: (state, action) => {
      state.filters.allComplexosSelected = action.payload;
    },
    clearAllFasesSelected: (state, action) => {
      state.filters.allFasesSelected = action.payload;
    },
    setGraphicsImages: (state, action) => {
      state.graphicsImages.push(action.payload);
    },
  },
});
export const {
  itemOpenToogleClosed,
  itemOpenToogleMultiSelectComplexo,
  itemOpenToogleMultiSelectFase,
  itemsIsChartValueContent,
  itemsFilterOpenToogle,
  itemsAddModulo,
  itemsAddCorredor,
  itemsAddComplexo,
  itemsAddFase,
  itemsAddCiclo,
  itemsAddInformativos,
  itemsAddInformativosLabel,
  setListFilter,
  setListFilterCiclo,
  setListFilterComplexo,
  setListFilterCorredor,
  setListFilterFase,
  setIsOpenOrDisable,
  setListFilterModulo,
  setIsContextRouterModulo,
  setIsConteudoAnaliseCritica,
  setListFiltred,
  setFilterComplexos,
  setFilterComplexosArray,
  setFilterFaseArray,
  setAllGroupsEdicaoSelected,
  setAllGroupsLeituraSelected,
  setItemsAddInformativosCentral,
  clearFilterFaseArray,
  clearFilterComplexosArray,
  clearAllComplexosSelected,
  clearAllFasesSelected,
  setIsOpenOrDisableModalSucessOrError,
  setCicloCurrent,
  setTiposConteudo,
  setListFilterTiposConteudo,
  setListMenuItems,
  setListGroupsTeamEdicao,
  setListGroupsTeamLeitura,
  clearGroupsTeamEdicao,
  clearGroupsTeamLeitura,
  setGraphicsImages,
} = state.actions;
