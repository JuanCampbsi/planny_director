export const mapGetItemsModulo = (items) => {
    const mappedModulo = [];
    items.forEach((item) => {
        mappedModulo.push({
            Id: item.Id,
            Nome: item.Nome,
            Created: item.Created,
            Modified: item.Modified,
            Author: item.Author.Title,
            Icone: JSON.parse(item.Icone),
            ConteudoTema: item.ConteudoTema,
            TipoModulo: item.TipoModulo,
        });
    });
    return mappedModulo;
};
//# sourceMappingURL=Modulo.js.map