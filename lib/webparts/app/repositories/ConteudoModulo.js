export const mapGetItemsConteudoModulo = (items) => {
    const mappedConteudoModulo = [];
    items.forEach((item) => {
        var _a, _b;
        mappedConteudoModulo.push({
            Id: item.Id,
            Modified: item.Modified,
            Modulo: item.Modulo,
            Ciclo: item.Ciclo,
            Complexo: item.Complexo,
            Fase: item.Fase,
            Corredor: item.Corredor,
            Title: item.Title,
            TiposConteudo: item.TiposConteudo,
            URLConteudo: item.URLConteudo,
            AnaliseCritica: item.AnaliseCritica,
            GruposEdicao: {
                Id: item.GruposEdicaoId,
                Title: (_a = item.GruposEdicao) === null || _a === void 0 ? void 0 : _a.map((item) => item.Title),
            },
            GruposLeitura: {
                Id: item.GruposLeituraId,
                Title: (_b = item.GruposLeitura) === null || _b === void 0 ? void 0 : _b.map((item) => item.Title),
            },
        });
    });
    return mappedConteudoModulo;
};
//# sourceMappingURL=ConteudoModulo.js.map