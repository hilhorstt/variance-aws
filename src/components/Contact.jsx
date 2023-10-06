import styled from '@emotion/styled';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import StyledBody from '../styled/StyledBody';
import StyledHeader from '../styled/StyledHeader';
import kvkLogo from '../images/kvk.svg';
import linkedInLogo from '../images/linkedin.svg';

const StyledDiv = styled.div`
  display: flex;
  padding: 1em 0;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  > div {
    &:first-of-type {
      min-width: 150px;

      img {
        display: block;
      }
    }

    &:last-of-type {
      padding: 0.25em 0;
    }
  }
  &:after {
    content: "";
    background: linear-gradient(135deg, rgba(41, 155, 129, 1) 0%, rgba(255, 193, 69, 1) 100%);
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

function Contact() {
    const { t } = useTranslation();
    return (
        <StyledBody>
            <Helmet
                defaultTitle={`${t('contact.title')} - ${t('seo.title')}`}
            >
                <link rel="alternate" hrefLang="nl-NL" href="https://www.variancesolutions.nl/contact" />
                <link rel="alternate" hrefLang="no-NO" href="https://no.variancesolutions.nl/kontakt" />
                <link rel="alternate" hrefLang="en-EN" href="https://en.variancesolutions.nl/contact" />
            </Helmet>
            <StyledHeader id="contact">{t('contact.title')}</StyledHeader>
            <p>{t('contact.body')}</p>

            <StyledDiv>
                <div style={{
                    fontFamily: '"Roboto Slab", serif', fontWeight: 'bold', fontSize: '1.15em',
                }}
                >
                    E-mail:
                </div>
                <div><a href="mailto:tim@variancesolutions.nl">tim@variancesolutions.nl</a></div>
            </StyledDiv>
            <StyledDiv>
                <div><img src={linkedInLogo} alt="LinkedIn" /></div>
                <div>
                    <a href="https://www.linkedin.com/company/variancesolutions" target="_blank" rel="noreferrer">Variance</a>
                    {' / '}
                    <a href="https://www.linkedin.com/in/timhilhorst" target="_blank" rel="noreferrer">Tim Hilhorst</a>
                </div>
            </StyledDiv>
            <StyledDiv>
                <div><img src={kvkLogo} alt={t('contact.kvk')} /></div>
                <div>
                    <a href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance" target="_blank" rel="noreferrer">
                        Variance (75766809)
                    </a>
                </div>
            </StyledDiv>
        </StyledBody>
    );
}

export default Contact;
