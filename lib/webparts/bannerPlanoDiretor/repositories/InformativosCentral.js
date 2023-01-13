export const mappedInformativosCentral = (items) => {
    const mappedInformativos = [];
    const mappedInformativosFormatted = [];
    items.forEach((item) => {
        mappedInformativos.push({
            Id: item.Id,
            Title: item.Title,
            Conteudo: item.Conteudo,
            Modified: item.Modified,
            Background: JSON.parse(item.Background),
        });
    });
    mappedInformativos.forEach((item) => {
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
//# sourceMappingURL=InformativosCentral.js.map