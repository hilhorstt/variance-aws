import React from 'react';
import styles from './style.scss';

class Experience extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <section className={styles.experienceBlock}>
                    <div className={styles.header}>
                        <div className={styles.lineLeft} />
                        <div className={styles.date}>Today</div>
                        <div className={styles.lineRight} />
                    </div>
                    <div className={styles.experienceBody}>
                        <div className={styles.left}>
                            <h3>Freelance Senior Front-end Developer</h3>
                            <h4>Variance Solutions, The Hague</h4>
                        </div>
                        <div className={styles.right}>
                            <p>Currently contributing to educational software as lead front-end developer with a focus on React + Redux & NodeJS, accessibility testing & tools and guiding fellow developers.</p>
                            <p>The solution is cloud-based running on AWS S3/EC2 and Lambda services. I contribute with domain specific knowledge, combined with knowledge and know-how regarding WCAG standards and an eye for user experience and design.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.experienceBlock}>
                    <div className={styles.header}>
                        <div className={styles.lineLeft} />
                        <div className={styles.date}>09 / 2019</div>
                        <div className={styles.lineRight} />
                    </div>
                    <div className={styles.experienceBody}>
                        <div className={styles.left}>
                            <h3>Senior Front-end developer and Scrum Master</h3>
                            <h4>Inspera Assessment, Oslo</h4>
                        </div>
                        <div className={styles.right}>
                            <p>Front-end developer, scrum master and WCAG promoter, focussing on student and author experience for Inspera's digital examination solution.</p>

                            <p><strong>New tech:</strong><br />
                                TypeScript/ES6, React, Redux (Saga), SASS + CSS modules, Webpack, Mocha/Jest, Semantic UI</p>

                            <p><strong>Older stack:</strong><br />
                                React, Backbone, Bootstrap, Underscore, Gulp</p>

                            <p><strong>Ancient stack:</strong><br />
                                Handlebars, MarionetteJS, Backbone, JQuery, XSLT, Gulp</p>

                            <p><strong>Familiar with AWS cloud services:</strong><br />
                                S3, EC2, CloudFront, Route 53, Lambda</p>

                            <p><strong>Not entirely proud of, but mentionable:</strong><br />
                                SQL, Java, TeamCity, JIRA/Confluence</p>
                        </div>
                    </div>
                </section>
                <section className={styles.experienceBlock}>
                    <div className={styles.header}>
                        <div className={styles.lineLeft} />
                        <div className={styles.date}>11 / 2015</div>
                        <div className={styles.lineRight} />
                    </div>
                    <div className={styles.experienceBody}>
                        <div className={styles.left}>
                            <h3>Scrum Master and Junior Front-end Developer</h3>
                            <h4>Cognizant, Amsterdam</h4>
                        </div>
                        <div className={styles.right}>
                            <p>Seconded to the largest financial services provider in the Netherlands, I was part of developing the front-end part of Tridion (CMS) components in a fully responsive & fluid grid lay-out widely applied throughout the company's website. The components are used by content writers in the organisation to promote financial products. The project required a close collaboration with visual and user experience designers, business analysts and content managers.</p>
                            <p>As scrum master and front-end developer I have contributed to multiple features and apps for the bank's online services, such as a hybrid, angular-based chat app.</p>
                            <p><strong>Tech Stack</strong>: AngularJS, BackboneJS, Jasmine, Jenkins, Picoma, Maven, Fitnesse, Selenium</p>
                        </div>
                    </div>
                </section>
                <section className={styles.experienceBlock}>
                    <div className={styles.header}>
                        <div className={styles.lineLeft} />
                        <div className={styles.date}>08 / 2013</div>
                        <div className={styles.lineRight} />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Experience;
