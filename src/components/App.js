import React from 'react';
import Header from './Header';
import Body from './Body';

class AppContainer extends React.PureComponent {
    render() {
        return (
            <>
                <Header />
                <Body />
            </>
        );
    }
}

export default AppContainer;
