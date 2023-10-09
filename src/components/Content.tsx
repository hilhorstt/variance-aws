import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const StyledMain = styled.main`
    .title {
      text-align: center;
      width: calc(100% - 3em);
      max-width: 700px;
      margin: 0 auto;
      color: white;
      text-shadow: 1px 2px 3px #000;
      h1 {
        font-size: 2em;
        margin-bottom: 0;
        @media only screen and (max-width: 600px) {
          font-size: 1.8em;
        }
      }
    }
    padding-top: 3em;
    padding-bottom: 3em;
`;

interface ContentProps {
    children: React.ReactNode,
}

function Content({ children }: ContentProps) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Content;
