import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledDiv = styled.div`
  &.body {
    width: calc(100% - 8em);
    font-size: 1.2em;
    padding: 3em;
    margin: 0 auto;
    max-width: 750px;
    line-height: 1.8em;
    background: white;
    border-radius: 3em;
    box-shadow: 0 5px 5px -3px  #000;
    @media only screen and (max-width: 600px) {
      border-radius: 1.5em;
    }
  }
  @media only screen and (max-width: 600px) {
    &.body {
      padding: 1.5em;
      width: calc(100% - 5em);
    }
  }
`;

function StyledBody({ children, className, style }) {
    return (
        <StyledDiv className={['body', className].join(' ')} style={style}>
            {children}
        </StyledDiv>
    );
}

StyledBody.defaultProps = {
    className: '',
    style: {},
};

StyledBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
};

export default StyledBody;
