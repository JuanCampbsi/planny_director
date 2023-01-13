import { IConteudoItems } from '../interfaces/IConteudoItems';

export const mapGetItemsConteudoModulo = (items: any[]) => {
  const mappedConteudoModulo: IConteudoItems[] = [];

  items.forEach((item) => {
    mappedConteudoModulo.push({
      Id: item.Id,
      Modified: item.Modified,
      Modulo: item.Modulo,
      Ciclo: item.Ciclo,
      Complexo: item.Complexo,
      Fase: item.Fase,
      Corredor: item.Corredor,
      Title: item.Title,
      TiposConteudo: item.TiposConteudo,
      URLConteudo: item.URLConteudo,
      AnaliseCritica: item.AnaliseCritica,
      GruposEdicao: {
        Id: item.GruposEdicaoId,
        Title: item.GruposEdicao?.map((item: any) => item.Title),
      },
      GruposLeitura: {
        Id: item.GruposLeituraId,
        Title: item.GruposLeitura?.map((item: any) => item.Title),
      },
    });
  });

  return mappedConteudoModulo;
};
