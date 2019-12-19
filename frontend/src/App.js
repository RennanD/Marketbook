import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';

import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
