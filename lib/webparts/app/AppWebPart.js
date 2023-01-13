import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'AppWebPartStrings';
import App from '../app/App';
import { sp } from '@pnp/sp';
import { graph } from '@pnp/graph';
export default class AppWebPart extends BaseClientSideWebPart {
    onInit() {
        return super.onInit().then(() => {
            sp.setup({
                spfxContext: this.context,
            });
            graph.setup({
                spfxContext: this.context,
            });
        });
    }
    render() {
        const element = React.createElement(App, {
            description: this.properties.description,
            context: this.context,
            clientMode: this.properties.clientMode,
        });
        ReactDom.render(element, this.domElement);
    }
    onDispose() {
        ReactDom.unmountComponentAtNode(this.domElement);
    }
    getPropertyPaneConfiguration() {
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
//# sourceMappingURL=AppWebPart.js.map