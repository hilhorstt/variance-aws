import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledH2 = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 0;
    &.centered {
      text-align: center;
    }
`;

function StyledHeader({ id, className, children }) {
    return (
        <StyledH2 id={id} className={className}>{children}</StyledH2>
    );
}

StyledHeader.defaultProps = {
    className: '',
};

StyledHeader.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default StyledHeader;
