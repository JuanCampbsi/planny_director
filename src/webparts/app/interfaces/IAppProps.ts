import { WebPartContext } from '@microsoft/sp-webpart-base';

export enum ClientMode {
  aad,
  graph,
}
export interface IAppProps {
  description: string;
  context: WebPartContext;
  clientMode: ClientMode;
}
