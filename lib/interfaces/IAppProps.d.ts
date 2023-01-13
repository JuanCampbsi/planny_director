import { WebPartContext } from '@microsoft/sp-webpart-base';
export declare enum ClientMode {
    aad = 0,
    graph = 1
}
export interface IAppProps {
    description: string;
    context: WebPartContext;
    clientMode: ClientMode;
}
//# sourceMappingURL=IAppProps.d.ts.map