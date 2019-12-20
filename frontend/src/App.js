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
            <div className="body">
                <Routes />
            </div>
        </BrowserRouter>
    );
}

export default App;
