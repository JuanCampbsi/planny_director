import { sp } from '@pnp/sp/presets/all';
import '@pnp/sp/files';
import '@pnp/sp/folders';

import { IFolder } from '@pnp/sp/folders';
import { IAnyAction, IDispatch, useAppDispatch } from '../../../dataflow/hooks';
import { IFilter } from '../interfaces/IFilter';
import { IConteudoItems } from '../interfaces/IConteudoItems';
import { mapGetItemsConteudoModulo } from '../repositories/ConteudoModulo';
import { mapGetItemsGroups } from '../repositories/Groups';
import { setListGroupsTeamEdicao, setListGroupsTeamLeitura } from '../../../dataflow/reducers/StateList';

export class ConteudoModuloClassService {
  private _list: string;
  private _urlAbsolut: string;
  private _dispatch: IDispatch<IAnyAction>;
  constructor() {
    this._list = '6-ConteudoModulo';
    this._dispatch = useAppDispatch();
    this._urlAbsolut = 'https://globalvale.sharepoint.com';
  }
  public getConteudoByFilter = async (filters: IFilter) => {
    const modulo = filters?.modulo?.Id || filters?.modulo !== null ? `and Modulo eq '${filters?.modulo.Id}'` : '';
    const ciclo = filters?.ciclo?.Id ? ` Ciclo eq '${filters?.ciclo?.Id}'` : '';
    const corredor = filters?.corredor?.Id ? ` and Corredor eq '${filters?.corredor?.Id}'` : '';
    const complexo = filters?.complexo?.Id ? ` and Complexo eq '${filters?.complexo?.Id}'` : '';
    const fase = filters?.fase?.Id ? ` and Fase eq '${filters?.fase?.Id}'` : '';
    const filterQuery = ciclo + modulo + corredor + complexo + fase;
    const result: IConteudoItems[] = await sp.web.lists
      .getByTitle(this._list)
      .items.select(
        'Id',
        'Title',
        'Modified',
        '*,Modulo/Nome,Modulo/Id',
        '*,Corredor/Id,Corredor/Nome',
        '*,Complexo/Id,Complexo/Nome,Corredor',
        '*,Fase/Id,Fase/Nome',
        '*,Ciclo/Id,Ciclo/Nome,Ciclo/Title',
        '*,TiposConteudo/Id,TiposConteudo/Title',
        'URLConteudo',
        'AnaliseCritica',
        'GruposEdicao/Title',
        'GruposLeitura/Title',
        '*,TiposConteudo/Id, TiposConteudo/Title'
      )
      .expand('Ciclo', 'Modulo', 'Complexo', 'Fase', 'Corredor', 'GruposEdicao', 'GruposLeitura', 'TiposConteudo')
      .filter(filterQuery)
      .get();
    console.log({ result });
    let groupsEdicao: any;
    result.forEach((item) => {
      groupsEdicao = item.GruposEdicaoId;
    });
    let groupsLeitura: any;
    result.forEach((item) => {
      groupsLeitura = item.GruposLeituraId;
    });

    groupsEdicao?.map((item: number) => this.addConteudoEdicao(item));
    groupsLeitura?.map((item: number) => this.addConteudoLeitura(item));

    return mapGetItemsConteudoModulo(result);
  };

  public addConteudoEdicao = async (id: number) => {
    const infoGroupsEdicao = await sp.web.siteGroups.getById(id).users.get();
    const infoGroupsEdicaoFormated = mapGetItemsGroups(infoGroupsEdicao);
    return infoGroupsEdicaoFormated.forEach((items) => this._dispatch(setListGroupsTeamEdicao(items)));
  };

  public addConteudoLeitura = async (id: number) => {
    const infoGroupsLeitura = await sp.web.siteGroups.getById(id).users.get();
    const infoGroupsLeituraFormated = mapGetItemsGroups(infoGroupsLeitura);
    return infoGroupsLeituraFormated.forEach((item) => this._dispatch(setListGroupsTeamLeitura(item)));
  };

  public addFileToFolder = async (file: any, filters: IFilter, id?: number) => {
    const rename = `Id-${id}_ConteudoModulo.pdf`;
    let iVerifyExistFolder = false;
    const lib = sp.web.lists.getByTitle('Biblioteca de PDF');
    const folderExist = await lib.rootFolder.folders.getByName(`${filters.modulo.Nome}`).folders();

    if (folderExist.length === 0) {
      const newFolder = await lib.rootFolder.folders.getByName(`${filters.modulo.Nome}`).addSubFolderUsingPath(`Ciclo_${filters.ciclo.Title}`);
    }

    if (folderExist.length > 0) {
      folderExist.map((item) => {
        if (item.Name !== `Ciclo_${filters.ciclo.Title}`) {
          iVerifyExistFolder = true;
        }
      });

      if (!!iVerifyExistFolder) {
        console.log({ iVerifyExistFolder });
        const newFolder = await lib.rootFolder.folders.getByName(`${filters.modulo.Nome}`).addSubFolderUsingPath(`Ciclo_${filters.ciclo.Title}`);
      }
    }

    const result = await sp.web
      .getFolderByServerRelativePath(`Biblioteca de PDF/${filters.modulo.Nome}/Ciclo_${filters.ciclo.Title}`)
      .files.addUsingPath(encodeURI(rename), file);
    return result;
  };

  public editFileToFolder = async (file: any, filters: IFilter, id?: number) => {
    const rename = `Id-${id}_ConteudoModulo.pdf`;

    const fileUpdate = await sp.web
      .getFileByServerRelativeUrl(`/teams/PlanDirGestaoAtivos/Biblioteca de PDF/${filters.modulo.Nome}/Ciclo_${filters.ciclo.Title}/${rename}`)
      .setContentChunked(file);

    return fileUpdate;
  };

  public addConteudoModulo = async (item: any) => {
    const result = await sp.web.lists.getByTitle(this._list).items.add(item);
    return result;
  };

  public editConteudoModulo = async (id: number, moduloInput: any) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update(moduloInput);
  };

  public editConteudoModuloAddPdf = async (id: number, moduloInput: any) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).update({
      URLConteudo: moduloInput.URLConteudo,
    });
  };

  public deleteConteudoModulo = async (id: number) => {
    await sp.web.lists.getByTitle(this._list).items.getById(id).delete();
  };
}
