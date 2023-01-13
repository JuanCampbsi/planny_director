import { ICicloItems, ICicloItemsFormated } from '../interfaces/ICicloItems';
import { ITiposConteudoFormated, ITiposConteudoItems } from '../interfaces/ITiposConteudo';

export const mapGetItemsTipoConteudo = (items: ITiposConteudoItems[]) => {
  const mappedCiclo: ITiposConteudoFormated[] = [];
  items.forEach((item) => {
    mappedCiclo.push({
      Id: item.Id,
      Nome: item.Title,
      Title: item.Title,
    });
  });

  return mappedCiclo;
};
