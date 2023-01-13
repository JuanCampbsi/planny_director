import { ICicloItemsFormated } from '../../webparts/app/interfaces/ICicloItems';
import { IModuloItemsFormated } from '../../webparts/app/interfaces/IModuloItems';
import { IComplexoItems } from '../../webparts/app/interfaces/IComplexoItems';
import { IFaseItems } from '../../webparts/app/interfaces/IFaseItems';
import { ICorredorItems } from '../../webparts/app/interfaces/ICorredorItems';
import { IConteudoAnaliseCritica } from '../../webparts/app/interfaces/IConteudoAnaliseCritica';
import { IConteudoItems } from '../../webparts/app/interfaces/IConteudoItems';
import { IInformativosCentralFormatted } from '../../webparts/app/interfaces/IInformativosCarrosel';
import { ITiposConteudoFormated } from '../../webparts/app/interfaces/ITiposConteudo';
import { IMenuItems } from '../../webparts/app/interfaces/IMenuItems';
import { ISiteIGroupsInfo } from '../../webparts/app/interfaces/IGroupsInfo';
declare let IConteudoAnaliseCritica: IConteudoAnaliseCritica;
declare let IConteudoItems: IComplexoItems;
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
export declare const state: import("@reduxjs/toolkit").Slice<IIinitialState, {
    itemOpenToogleClosed: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemOpenToogleMultiSelectComplexo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemOpenToogleMultiSelectFase: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsIsChartValueContent: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsFilterOpenToogle: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddModulo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddCorredor: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddFase: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddComplexo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddCiclo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddInformativos: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    itemsAddInformativosLabel: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setItemsAddInformativosCentral: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilterCiclo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setCicloCurrent: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setTiposConteudo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilter: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilterModulo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListMenuItems: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilterComplexo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilterCorredor: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilterFase: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFilterTiposConteudo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListGroupsTeamEdicao: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    clearGroupsTeamEdicao: (state: import("immer/dist/internal").WritableDraft<IIinitialState>) => void;
    setListGroupsTeamLeitura: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    clearGroupsTeamLeitura: (state: import("immer/dist/internal").WritableDraft<IIinitialState>) => void;
    setIsOpenOrDisable: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setIsOpenOrDisableModalSucessOrError: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setIsContextRouterModulo: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setIsConteudoAnaliseCritica: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setListFiltred: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setFilterComplexos: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setFilterComplexosArray: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setFilterFaseArray: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setAllGroupsEdicaoSelected: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setAllGroupsLeituraSelected: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    clearFilterFaseArray: (state: import("immer/dist/internal").WritableDraft<IIinitialState>) => void;
    clearFilterComplexosArray: (state: import("immer/dist/internal").WritableDraft<IIinitialState>) => void;
    clearAllComplexosSelected: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    clearAllFasesSelected: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
    setGraphicsImages: (state: import("immer/dist/internal").WritableDraft<IIinitialState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "state">;
export declare const itemOpenToogleClosed: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemOpenToogleClosed">, itemOpenToogleMultiSelectComplexo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemOpenToogleMultiSelectComplexo">, itemOpenToogleMultiSelectFase: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemOpenToogleMultiSelectFase">, itemsIsChartValueContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsIsChartValueContent">, itemsFilterOpenToogle: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsFilterOpenToogle">, itemsAddModulo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddModulo">, itemsAddCorredor: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddCorredor">, itemsAddComplexo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddComplexo">, itemsAddFase: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddFase">, itemsAddCiclo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddCiclo">, itemsAddInformativos: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddInformativos">, itemsAddInformativosLabel: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/itemsAddInformativosLabel">, setListFilter: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilter">, setListFilterCiclo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilterCiclo">, setListFilterComplexo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilterComplexo">, setListFilterCorredor: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilterCorredor">, setListFilterFase: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilterFase">, setIsOpenOrDisable: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setIsOpenOrDisable">, setListFilterModulo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilterModulo">, setIsContextRouterModulo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setIsContextRouterModulo">, setIsConteudoAnaliseCritica: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setIsConteudoAnaliseCritica">, setListFiltred: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFiltred">, setFilterComplexos: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setFilterComplexos">, setFilterComplexosArray: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setFilterComplexosArray">, setFilterFaseArray: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setFilterFaseArray">, setAllGroupsEdicaoSelected: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setAllGroupsEdicaoSelected">, setAllGroupsLeituraSelected: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setAllGroupsLeituraSelected">, setItemsAddInformativosCentral: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setItemsAddInformativosCentral">, clearFilterFaseArray: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"state/clearFilterFaseArray">, clearFilterComplexosArray: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"state/clearFilterComplexosArray">, clearAllComplexosSelected: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/clearAllComplexosSelected">, clearAllFasesSelected: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/clearAllFasesSelected">, setIsOpenOrDisableModalSucessOrError: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setIsOpenOrDisableModalSucessOrError">, setCicloCurrent: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setCicloCurrent">, setTiposConteudo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setTiposConteudo">, setListFilterTiposConteudo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListFilterTiposConteudo">, setListMenuItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListMenuItems">, setListGroupsTeamEdicao: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListGroupsTeamEdicao">, setListGroupsTeamLeitura: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setListGroupsTeamLeitura">, clearGroupsTeamEdicao: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"state/clearGroupsTeamEdicao">, clearGroupsTeamLeitura: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"state/clearGroupsTeamLeitura">, setGraphicsImages: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "state/setGraphicsImages">;
export {};
//# sourceMappingURL=StateList.d.ts.map