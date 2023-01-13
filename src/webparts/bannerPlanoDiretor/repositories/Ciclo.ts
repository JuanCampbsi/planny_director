import { ICicloItems, ICicloItemsFormated } from '../interfaces/ICicloItems';

export const mapGetItemsCiclo = (items: ICicloItems[]) => {
  const mappedCiclo: ICicloItemsFormated[] = [];
  items.forEach((item) => {
    mappedCiclo.push({
      Id: item.Id,
      Title: item.Title,
      Nome: item.Nome,
      Created: item.Created,
      Modified: item.Modified,
      IsCurrentCiclo: item.IsCurrentCiclo,
    });
  });

  return mappedCiclo;
};
