import * as React from 'react';
import * as ReactDom from 'react-dom';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AppWebPartStrings';
import { ClientMode, IAppProps } from '../app/interfaces/IAppProps';
import { sp } from '@pnp/sp';
import { graph } from '@pnp/graph';
import App from './App';

export interface IAppWebPartProps {
  description: string;
  moduloList: any;
  clientMode: ClientMode;
}

export default class AcessoRapidoPlanoDiretorWebPart extends BaseClientSideWebPart<IAppWebPartProps> {
  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      sp.setup({
        spfxContext: this.context,
      });
      graph.setup({
        spfxContext: this.context,
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<IAppProps> = React.createElement(App, {
      description: this.properties.description,
      context: this.context,
      clientMode: this.properties.clientMode,
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
