export const mapGetItemsMenu = (items) => {
    const mappedMenu = [];
    items.forEach((item) => {
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
//# sourceMappingURL=Menu.js.map