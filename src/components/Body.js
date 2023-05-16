import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.scss';
import Experience from './Experience';
import TechStack from './TechStack';

function Body() {
    const { t } = useTranslation();
    return (
        <>
            <section className={`${styles.section} ${styles.welcome}`}>
                <div className={styles.body}>
                    <div className={styles.logo}>
                        <img src={`${window.assetRoot}images/variance-solutions-logo.svg`} alt="Variance Solutions logo" />
                    </div>
                </div>
                <div className={styles.title}>
                    <h1>{t('splash.header')}</h1>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.body}>
                    <h2 id="personal-note">{t('about.title')}</h2>
                    <img className={styles.profilePhoto} src={`${window.assetRoot}images/tim-hilhorst.jpg`} alt="Tim Hilhorst" />
                    <div dangerouslySetInnerHTML={{ __html: t('about.body') }} />
                </div>
            </section>
            <section className={`${styles.section} ${styles.experience}`}>
                <div className={styles.body}>
                    <h2 className={styles.centered} id="experience">{t('experience.title')}</h2>
                </div>
                <Experience />
            </section>
            <section className={`${styles.section} ${styles.techStack}`}>
                <TechStack />
            </section>
            <footer className={`${styles.section} ${styles.welcome}`}>
                <div className={styles.body}>
                    <h2 id="contact">{t('contact.title')}</h2>
                    <p>{t('contact.body')}</p>
                    <strong>E-mail:</strong>
                    {' '}
                    <a href="mailto:tim@variancesolutions.nl">tim@variancesolutions.nl</a>
                    <br />
                    <strong>LinkedIn:</strong>
                    {' '}
                    <a href="https://www.linkedin.com/company/variancesolutions">Variance Solutions</a>
                    <br />
                    <strong>
                        {t('contact.kvk')}
                        :
                    </strong>
                    {' '}
                    <a href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance">75766809</a>
                </div>
            </footer>
        </>
    );
}

export default Body;
