export interface IInformativosCarrosel {
  Id: number;
  Title?: string;
  SubTitulo?: string;
  Modified?: string;
  UrlLink: {
    Url: string;
    Description: string;
  };
  Background?: string;
  MiniaturaInfo?: string;
  Fixaritem?: boolean;
}
export interface IInformativosItemImg {
  serverRelativeUrl: string;
  serverUrl: string;
}

export interface IInformativosCarroselFormated {
  Id: number;
  Title?: string;
  SubTitulo?: string;
  Modified?: string;
  Created?: string;
  UrlLink?: string;
  Background?: IInformativosItemImg;
  MiniaturaInfo?: IInformativosItemImg;
  Fixaritem?: boolean;
}

export interface IInformativosCentral {
  Id: number;
  Title?: string;
  Conteudo?: string;
  Modified?: string;
  Background?: IInformativosItemImg;
}

export interface IInformativosCentralFormatted {
  Id: number;
  Title?: string;
  Conteudo?: string;
  Modified?: string;
  Background?: string;
}
