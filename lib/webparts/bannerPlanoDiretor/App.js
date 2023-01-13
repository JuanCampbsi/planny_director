import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../dataflow/store';
import Header from './components/Header';
import { GlobalStyle } from './Global/global';
const App = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Provider, { store: store },
            React.createElement(Header, null),
            React.createElement(GlobalStyle, null))));
};
export default App;
//# sourceMappingURL=App.js.map