import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ClientMode } from '../app/interfaces/IAppProps';
export interface IAppWebPartProps {
    description: string;
    moduloList: any;
    clientMode: ClientMode;
}
export default class AppWebPart extends BaseClientSideWebPart<IAppWebPartProps> {
    protected onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AppWebPart.d.ts.map