import React from 'react';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import styles from './style.scss';

class TechStack extends React.PureComponent {
    render() {
        return (
            <>
                <div className={styles.techStackContainer}>
                    <div className={styles.techStackTitle}>
                        <h2 id="tech-stack">{i18n.t('techStack.title')}</h2>
                    </div>
                    <div className={styles.list}>
                        <h3>Languages, frameworks, libraries</h3>
                        <ul>
                            <li className={styles.level1}>
                                React, ES6/Typescript, Redux (thunk & sagas)
                            </li>
                            <li className={styles.level1}>CSS3, SASS, CSS modules</li>
                            <li className={styles.level2}>NodeJS</li>
                            <li className={styles.level3}>Angular</li>
                            <li className={styles.level3}>Backbone, Bootstrap, underscoreJS</li>
                            <li className={styles.level3}>Handlebars, Marionette, JQuery</li>
                            <li className={styles.level3}>Java, SQL, XSLT</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>Compilers, services & testing</h3>
                        <ul>
                            <li className={styles.level1}>Webpack, Gulp</li>
                            <li className={styles.level1}>Jest, Mocha</li>
                            <li className={styles.level2}>
                                Lighthouse, Accessibility Insights
                            </li>
                            <li className={styles.level2}>
                                Puppeteer, BrowserStack, Percy, XCode, Postman
                            </li>
                            <li className={styles.level2}>
                                EC2/S3, Lambda, Beanstalk, Route53 (AWS)
                            </li>
                            <li className={styles.level3}>TeamCity</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>IDE & Design</h3>
                        <ul>
                            <li className={styles.level1}>
                                IntelliJ, WebStorm, Sublime, SQLDeveloper
                            </li>
                            <li className={styles.level2}>
                                Photoshop, Illustrator, InDesign, Premiere
                            </li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>Agile, planning & process</h3>
                        <ul>
                            <li className={styles.level1}>Certified Scrum Master</li>
                            <li className={styles.level1}>JIRA, Confluence</li>
                            <li className={styles.level2}>Product team</li>
                            <li className={styles.level2}>Backlog prioritisation</li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default withTranslation()(TechStack);
