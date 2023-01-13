import { IInformativosCarrosel, IInformativosCarroselFormated, IInformativosCentral } from '../interfaces/IInformativosCarrosel';

export const mappedInformativosCentral = (items: IInformativosCentral[]) => {
  const mappedInformativos: any[] = [];
  const mappedInformativosFormatted: IInformativosCentral[] = [];
  items.forEach((item: any) => {
    mappedInformativos.push({
      Id: item.Id,
      Title: item.Title,
      Conteudo: item.Conteudo,
      Modified: item.Modified,
      Background: JSON.parse(item.Background),
    });
  });
  mappedInformativos.forEach((item: any) => {
    mappedInformativosFormatted.push({
      Id: item.Id,
      Title: item.Title,
      Conteudo: item.Conteudo,
      Modified: item.Modified,
      Background: item.Background['serverUrl'] + item.Background['serverRelativeUrl'],
    });
  });

  return mappedInformativosFormatted;
};
