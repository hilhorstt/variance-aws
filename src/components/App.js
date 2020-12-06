import React from 'react';
import Header from "./Header";
import Body from "./Body";

class AppContainer extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        )
    }
}

export default AppContainer;
