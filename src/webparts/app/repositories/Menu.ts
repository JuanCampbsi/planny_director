import { IMenuItems } from '../interfaces/IMenuItems';

export const mapGetItemsMenu = (items: IMenuItems[]) => {
  const mappedMenu: IMenuItems[] = [];
  items.forEach((item: any) => {
    mappedMenu.push({
      Id: item.Id,
      Title: item.Title,
      UrlMenu: item.UrlMenu.Url,
      Created: item.Created,
      Modified: item.Modified,
    });
  });

  return mappedMenu;
};
