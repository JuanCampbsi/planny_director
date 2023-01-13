import * as React from 'react';
import { IAppProps } from '../app/interfaces/IAppProps';
import { Provider } from 'react-redux';
import store from '../../dataflow/store';
import Header from './components/Header';
import { GlobalStyle } from './Global/global';

const App = (props: IAppProps) => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <GlobalStyle />
      </Provider>
    </>
  );
};
export default App;
