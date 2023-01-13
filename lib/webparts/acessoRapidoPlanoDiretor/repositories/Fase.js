export const mapGetItemsFase = (items) => {
    const mappedComplexo = [];
    items.forEach((item) => {
        mappedComplexo.push({
            Id: item.Id,
            Nome: item.Nome,
            Complexo: item.Complexo,
            Created: item.Created,
            Modified: item.Modified,
        });
    });
    return mappedComplexo;
};
//# sourceMappingURL=Fase.js.map