import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import Routes from './routes';
import history from './history';
import './styles/main.scss'

function App() {
    return (
      <Provider store={store}>
        <Router>
            <Routes history={history} />
        </Router>
      </Provider>
    );
}

export default App;