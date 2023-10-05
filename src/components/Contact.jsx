import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledBody from '../styled/StyledBody';
import StyledHeader from '../styled/StyledHeader';

function Contact() {
    const { t } = useTranslation();
    return (
        <StyledBody>
            <StyledHeader id="contact">{t('contact.title')}</StyledHeader>
            <p>{t('contact.body')}</p>
            <strong>E-mail:</strong>
            {' '}
            <a href="mailto:tim@variancesolutions.nl">tim@variancesolutions.nl</a>
            <br />
            <strong>LinkedIn:</strong>
            {' '}
            <a href="https://www.linkedin.com/company/variancesolutions">Variance</a>
            {' / '}
            <a href="https://www.linkedin.com/in/timhilhorst">Tim Hilhorst</a>
            <br />
            <strong>
                {t('contact.kvk')}
                :
            </strong>
            {' '}
            <a href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance">75766809</a>
        </StyledBody>
    );
}

export default Contact;
