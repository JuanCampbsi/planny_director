import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../dataflow/store';
import { GlobalStyle } from './Global/global';
import RoutesApp from './routes';
const App = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Provider, { store: store },
            React.createElement(RoutesApp, Object.assign({}, props)),
            React.createElement(GlobalStyle, null))));
};
export default App;
//# sourceMappingURL=App.js.map