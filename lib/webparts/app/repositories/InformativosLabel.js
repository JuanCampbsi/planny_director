export const mappedInformativosLabel = (items) => {
    const mappedInformativos = [];
    items.forEach((item) => {
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
//# sourceMappingURL=InformativosLabel.js.map