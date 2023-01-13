import { IConteudoAnaliseCritica } from '../interfaces/IConteudoAnaliseCritica';

export const mapGetItemsConteudoAnaliseCritica = (items: any[]) => {
  const mappedConteudoAnaliseCritical: IConteudoAnaliseCritica[] = [];

  items.forEach((item) => {
    mappedConteudoAnaliseCritical.push({
      Id: item.Id,
      Modulo: item.Modulo,
      Ciclo: item.Ciclo,
      Complexo: item.Complexo,
      Corredor: item.Corredor,
      Fase: item.Fase,
      Title: item.Title,
      Conteudo: item.Conteudo,
      Created: item.Created,
      Modified: item.Modified,
    });
  });

  return mappedConteudoAnaliseCritical;
};
