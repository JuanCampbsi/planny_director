export interface IModuloItems {
    Id: number;
    OrdemImpressao?: number;
    Nome?: string;
    Created: string;
    Modified: string;
    Author: {
        Title: string;
    };
    Icone?: string;
    ConteudoTema: string;
    TipoModulo: string;
    TiposConteudo: ITiposConteudo[];
}
export interface IModuloItemImg {
    serverRelativeUrl: string;
    serverUrl: string;
}
export interface ITiposConteudo {
    Id: number;
    Title: string;
}
export declare enum typesModulos {
    entrada = "Entrada",
    manutencao = "Manuten\u00E7\u00E3o e Opera\u00E7\u00E3o",
    saida = "Sa\u00EDda"
}
export interface IModuloItemsFormated {
    Id: number;
    OrdemImpressao?: number;
    Title?: string;
    Nome?: string;
    Created: string;
    Modified: string;
    Author?: string;
    Icone?: IModuloItemImg;
    ConteudoTema: string;
    TipoModulo: string;
    TiposConteudo: ITiposConteudo[];
}
export declare type IModuloInput = Pick<IModuloItemsFormated, 'ConteudoTema' | 'Nome'>;
//# sourceMappingURL=IModuloItems.d.ts.map