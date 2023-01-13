export const mapGetItemsCiclo = (items) => {
    const mappedCiclo = [];
    items.forEach((item) => {
        mappedCiclo.push({
            Id: item.Id,
            Title: item.Title,
            Nome: item.Nome,
            Created: item.Created,
            Modified: item.Modified,
            IsCurrentCiclo: item.IsCurrentCiclo,
        });
    });
    return mappedCiclo;
};
//# sourceMappingURL=Ciclo.js.map