import { IInformativosCarrosel, IInformativosCarroselFormated } from '../interfaces/IInformativosCarrosel';

export const mappedInformativosLabel = (items: IInformativosCarrosel[]) => {
  const mappedInformativos: IInformativosCarroselFormated[] = [];
  items.forEach((item: any) => {
    mappedInformativos.push({
      Id: item.Id,
      Title: item.Title,
      SubTitulo: item.SubTitulo,
      Modified: item.Modified,
      Created: item.Created,
      Background: JSON.parse(item.Background || item.MiniaturaInfo),
      UrlLink: item.UrlLink.Url,
      Fixaritem: item.FixarItem ? item.FixarItem : false,
    });
  });

  return mappedInformativos;
};
