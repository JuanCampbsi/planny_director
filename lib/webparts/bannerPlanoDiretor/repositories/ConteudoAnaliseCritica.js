export const mapGetItemsConteudoAnaliseCritica = (items) => {
    const mappedConteudoAnaliseCritical = [];
    items.forEach((item) => {
        mappedConteudoAnaliseCritical.push({
            Id: item.Id,
            Modulo: item.Modulo,
            Ciclo: item.Ciclo,
            Complexo: item.Complexo,
            Corredor: item.Corredor,
            Fase: item.Fase,
            Title: item.Title,
            Conteudo: item.Conteudo,
            Created: item.Created,
            Modified: item.Modified,
        });
    });
    return mappedConteudoAnaliseCritical;
};
//# sourceMappingURL=ConteudoAnaliseCritica.js.map