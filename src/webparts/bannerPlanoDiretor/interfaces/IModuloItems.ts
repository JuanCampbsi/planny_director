export interface IModuloItems {
  Id: number;
  Nome?: string;
  Created: string;
  Modified: string;
  Author: {
    Title: string;
  };
  Icone?: string;
  ConteudoTema: string;
  TipoModulo: string;
}

export interface IModuloItemImg {
  serverRelativeUrl: string;
  serverUrl: string;
}

export enum typesModulos {
  entrada = 'Entrada',
  manutencao = 'Manutenção e Operação',
  saida = 'Saída',
}

export interface IModuloItemsFormated {
  Id: number;
  Title?: string;
  Nome?: string;
  Created: string;
  Modified: string;
  Author?: string;
  Icone?: IModuloItemImg;
  ConteudoTema: string;
  TipoModulo: string;
}

export type IModuloInput = Pick<IModuloItemsFormated, 'ConteudoTema' | 'Nome'>;
