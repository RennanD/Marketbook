import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import './config/reactotronConfig';

import store from './store';

import Routes from './routes';

import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <Header />
                <div className="body">
                    <Routes />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
