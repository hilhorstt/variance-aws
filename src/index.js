import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Body />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))
