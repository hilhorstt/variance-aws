import React from 'react';
import styles from './style.scss';

class TechStack extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className={styles.techStackContainer}>
                    <div className={styles.techStackTitle}>
                        <h2 id="tech-stack">Tech stack and tooling</h2>
                    </div>
                    <div className={styles.list}>
                        <h3>Coding</h3>
                        <ul>
                            <li className={styles.level1}>React, ES6</li>
                            <li className={styles.level1}>Redux (saga)</li>
                            <li className={styles.level1}>Redux (saga)</li>
                            <li className={styles.level1}>CSS3, SASS</li>
                            <li className={styles.level2}>NodeJS</li>
                            <li className={styles.level3}>Backbone</li>
                            <li className={styles.level3}>Bootstrap, underscoreJS</li>
                            <li className={styles.level3}>Handlebars, Marionette,</li>
                            <li className={styles.level3}>JQuery</li>
                            <li className={styles.level3}>Angular</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>Tooling</h3>
                        <ul>
                            <li className={styles.level1}>Webpack, Gulp</li>
                            <li className={styles.level2}>TeamCity</li>
                            <li className={styles.level2}>EC2/S3 (AWS)</li>
                            <li className={styles.level2}>Lambda (AWS)</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>IDE & Design</h3>
                        <ul>
                            <li className={styles.level1}>IntelliJ, WebStorm</li>
                            <li className={styles.level2}>Adobe Suite (Photoshop,
                                Illustrator, InDesign,
                                Premiere)</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>Process</h3>
                        <ul>
                            <li className={styles.level1}>Certified Scrum Master</li>
                            <li className={styles.level2}>Product design</li>
                            <li className={styles.level2}>Backlog prioritisation</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TechStack;