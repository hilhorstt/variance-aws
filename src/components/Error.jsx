import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StyledDiv = styled.div`
  text-align: center;
  color: white;
  h1 {
    font-size: 4em;
    text-shadow: 0 1.5px 2px rgba(0,0,0,0.5);
  }
  p {
    font-size: 1.2em;
    text-shadow: 0 0.5px 1px rgba(0,0,0,0.5);
  }
`;

function Error() {
    const { t } = useTranslation();
    return (
        <StyledDiv>
            <h1>404</h1>
            <p>{t('error.404')}</p>
        </StyledDiv>
    );
}

export default Error;
