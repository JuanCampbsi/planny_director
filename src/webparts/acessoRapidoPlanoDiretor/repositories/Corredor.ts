import { ICorredorItems } from '../interfaces/ICorredorItems';

export const mapGetItemsCorredor = (items: ICorredorItems[]) => {
  const mappedCorredor: ICorredorItems[] = [];
  items.forEach((item) => {
    mappedCorredor.push({
      Id: item.Id,
      Nome: item.Nome,
      Estados: item.Estados,
      Created: item.Created,
      Modified: item.Modified,
    });
  });

  return mappedCorredor;
};
