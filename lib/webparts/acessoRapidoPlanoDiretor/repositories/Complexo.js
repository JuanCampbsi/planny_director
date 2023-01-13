export const mapGetItemsComplexo = (items) => {
    const mappedComplexo = [];
    items.forEach((item) => {
        mappedComplexo.push({
            Id: item.Id,
            Nome: item.Nome,
            Created: item.Created,
            Modified: item.Modified,
            Corredor: item.Corredor,
            Fase: item.Fase,
        });
    });
    return mappedComplexo;
};
//# sourceMappingURL=Complexo.js.map