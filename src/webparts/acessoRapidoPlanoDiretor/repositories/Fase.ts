import { IFaseItems } from '../interfaces/IFaseItems';

export const mapGetItemsFase = (items: IFaseItems[]) => {
  const mappedComplexo: IFaseItems[] = [];
  items.forEach((item) => {
    mappedComplexo.push({
      Id: item.Id,
      Nome: item.Nome,
      Complexo: item.Complexo,
      Created: item.Created,
      Modified: item.Modified,
    });
  });

  return mappedComplexo;
};
