import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
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

function Content({ children }) {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Content;
