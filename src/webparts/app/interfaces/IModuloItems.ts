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

export enum typesModulos {
  entrada = 'Entrada',
  manutencao = 'Manutenção e Operação',
  saida = 'Saída',
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

export type IModuloInput = Pick<IModuloItemsFormated, 'ConteudoTema' | 'Nome'>;
