import { Global as GlobalStyle, css } from '@emotion/react';
import React from 'react';

function Global() {
    return (
        <GlobalStyle
            styles={css`
              body {
                background: rgb(255, 193, 69);
                background: linear-gradient(135deg, rgba(255, 193, 69, 1) 0%, rgba(41, 155, 129, 1) 100%);
                background-size: auto 100%;
                background-repeat: no-repeat;
                background-position: left top;
                min-height: 100vh;
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                color: #353535;
              }
              h1, h2, h3, h4, h5, h6 {
                font-family: 'Roboto Slab', serif;
              }
              a {
                color: rgb(21, 98, 81);
              }
            `}
        />
    );
}

export default Global;
