import { IModuloItems, IModuloItemsFormated } from '../interfaces/IModuloItems';

export const mapGetItemsModulo = (items: IModuloItems[]) => {
  const mappedModulo: IModuloItemsFormated[] = [];
  items.forEach((item) => {
    mappedModulo.push({
      Id: item.Id,
      Nome: item.Nome,
      Created: item.Created,
      Modified: item.Modified,
      Author: item.Author.Title,
      Icone: JSON.parse(item.Icone),
      ConteudoTema: item.ConteudoTema,
      TipoModulo: item.TipoModulo,
    });
  });

  return mappedModulo;
};
