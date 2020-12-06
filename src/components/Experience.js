import React from 'react';
import styles from './style.scss';
import i18n from "i18next";
import {withTranslation} from "react-i18next";

function Project(props) {
    const captionKey = "experience." + props.projectKey + ".";
    return (
        <section className={styles.experienceBlock}>
            <div className={styles.experienceBody}>
                <div className={styles.left}>
                    <h3>{i18n.t(captionKey + 'title')}</h3>
                    <h4>{i18n.t(captionKey + 'subTitle')}</h4>
                </div>
                <div className={styles.right} dangerouslySetInnerHTML={{__html: i18n.t(captionKey + 'body')}}/>
            </div>
            <div className={styles.header}>
                <div className={styles.lineLeft} />
                <div className={styles.date}>{props.startDate}</div>
                <div className={styles.lineRight} />
            </div>
        </section>
    );
}

class Experience extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <section className={styles.experienceBlock}>
                    <div className={styles.header}>
                        <div className={styles.lineLeft} />
                        <div className={styles.date}>{i18n.t('experience.today')}</div>
                        <div className={styles.lineRight} />
                    </div>
                </section>
                <Project projectKey="variance" startDate={"09 / 2019"} />
                <Project projectKey="inspera" startDate={"11 / 2015"} />
                <Project projectKey="cognizant" startDate={"08 / 2013"} />
            </React.Fragment>
        )
    }
}

export default withTranslation()(Experience);
