import * as React from 'react';
import { IAppProps } from '../app/interfaces/IAppProps';
import { Provider } from 'react-redux';
import store from '../../dataflow/store';
import RoutesApp from '../app/routes';
import * as EJ2_LOCALE from "../../../node_modules/@syncfusion/ej2-locale/src/pt-BR.json"
import { L10n, setCulture } from '@syncfusion/ej2-base';
L10n.load({ 'pt-BR': EJ2_LOCALE['pt-BR'] });
setCulture('pt-BR');


import '../app/Global/index.css';
import { GlobalStyle } from './Global/global';

const App = (props: IAppProps) => {
  return (
    <>
      <Provider store={store}>
        <RoutesApp {...props} />
        <GlobalStyle />
      </Provider>
    </>
  );
};
export default App;
