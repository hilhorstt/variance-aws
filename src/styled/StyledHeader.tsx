import styled from '@emotion/styled';
import React from 'react';

const StyledH1 = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 0;
    &.centered {
      text-align: center;
    }
`;


interface StyledHeaderProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

function StyledHeader({ id, className, children }: StyledHeaderProps) {
    return (
        <StyledH1 id={id} className={className}>{children}</StyledH1>
    );
}

export default StyledHeader;
