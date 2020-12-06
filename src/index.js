import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/i18n';
import AppContainer from './components/App';

function App() {
    return (
        <AppContainer />
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
