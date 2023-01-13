export const mapGetItemsTipoConteudo = (items) => {
    const mappedCiclo = [];
    items.forEach((item) => {
        mappedCiclo.push({
            Id: item.Id,
            Nome: item.Title,
            Title: item.Title,
        });
    });
    return mappedCiclo;
};
//# sourceMappingURL=TiposConteudo.js.map