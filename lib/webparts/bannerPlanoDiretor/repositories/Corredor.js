export const mapGetItemsCorredor = (items) => {
    const mappedCorredor = [];
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
//# sourceMappingURL=Corredor.js.map