declare interface IAppWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  ModuloListFieldLabel: string;
}

declare module 'AppWebPartStrings' {
  const strings: IAppWebPartStrings;
  export = strings;
}
