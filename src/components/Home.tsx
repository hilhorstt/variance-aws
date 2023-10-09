import styled from '@emotion/styled';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import me from '../images/tim-hilhorst.webp';
import logoSvg from '../images/variance-solutions-logo.svg';
import StyledBody from '../styled/StyledBody';
import StyledHeader from '../styled/StyledHeader';

const LogoWrapper = styled.header`
  font-size: 1.2em;
  padding: 5em;
  margin: -3em auto 0;
  background: white;
  box-shadow: 0 5px 5px -3px  #000;
`;

const Logo = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  &.profilePhoto {
    float: right;
    width: 250px;
    margin: 0 0 0 0.5em;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 6px 3px -2px rgba(0,0,0,.5);
    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
      box-shadow: 0 12px 8px -5px rgba(0,0,0,.25);
    }
    @media only screen and (max-width: 600px) {
      float: none;
      margin-left: 1em;
    }
  }
`;

function Home() {
    const { t } = useTranslation();
    return (
        <>
            <LogoWrapper>
                <Logo>
                    <img width={400} height={113} src={logoSvg} alt="Variance Solutions logo" />
                </Logo>
            </LogoWrapper>
            <section className="title">
                <h1>{t('splash.header')}</h1>
            </section>

            <StyledBody style={{ marginTop: '3rem' }}>
                <StyledHeader id="personal-note">{t('about.title')}</StyledHeader>
                <StyledImg width={250} height={250} className="profilePhoto" src={me} alt="Tim Hilhorst" />
                <div><Trans i18nKey="about.body" /></div>
            </StyledBody>
        </>
    );
}

export default Home;
