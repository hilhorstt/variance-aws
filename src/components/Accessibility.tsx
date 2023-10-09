import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import StyledBody from '../styled/StyledBody';
import StyledHeader from '../styled/StyledHeader';

function Accessibility() {
    const { t } = useTranslation();
    return (
        <StyledBody>
            <Helmet
                defaultTitle={`${t('accessibility.title')} - ${t('seo.title')}`}
            >
                <link rel="alternate" hrefLang="nl-NL" href="https://www.variancesolutions.nl/digitale-toegankelijkheid" />
                <link rel="alternate" hrefLang="no-NO" href="https://no.variancesolutions.nl/universell-utforming" />
                <link rel="alternate" hrefLang="en-EN" href="https://en.variancesolutions.nl/web-accessibility" />
            </Helmet>
            <StyledHeader id="accessibility">{t('accessibility.title')}</StyledHeader>
            <p>{t('accessibility.body')}</p>
        </StyledBody>
    );
}

export default Accessibility;
