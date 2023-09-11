import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, withTranslation } from 'react-i18next';
import styles from './styles.module.scss';

function Project({ projectKey, startDate }) {
    const { t } = useTranslation();
    const captionKey = `experience.${projectKey}.`;
    return (
        <article className={styles.experienceBlock}>
            <div className={styles.experienceBody}>
                <div className={styles.left}>
                    <h3>{t(`${captionKey}title`)}</h3>
                    <h4>{t(`${captionKey}subTitle`)}</h4>
                </div>
                <div className={styles.right} dangerouslySetInnerHTML={{ __html: t(`${captionKey}body`) }} />
            </div>
            <div className={styles.header}>
                <div className={styles.lineLeft} />
                <div className={styles.date}>{startDate}</div>
                <div className={styles.lineRight} />
            </div>
        </article>
    );
}

Project.propTypes = {
    projectKey: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
};

function Experience() {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.experienceBlock}>
                <div className={styles.header}>
                    <div className={styles.lineLeft} />
                    <div className={styles.date}>{t('experience.today')}</div>
                    <div className={styles.lineRight} />
                </div>
            </div>
            <Project projectKey="variance" startDate="09 / 2019" />
            <Project projectKey="inspera" startDate="11 / 2015" />
            <Project projectKey="cognizant" startDate="08 / 2013" />
        </>
    );
}

export default withTranslation()(Experience);
