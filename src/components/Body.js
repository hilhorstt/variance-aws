import React from 'react';
import styles from './style.scss';
import Experience from './Experience';
import TechStack from "./TechStack";

class Body extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <section className={`${styles.section} ${styles.welcome}`}>
                    <div className={styles.body}>
                        <div className={styles.logo}>
                            <img src={window.assetRoot + "images/variance-solutions-logo.svg"} alt="Variance Solutions logo" />
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h1>Freelance lead front-end developer, accessibility auditor & certified scrum master</h1>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.body}>
                        <h2 id="personal-note">About Variance</h2>
                        <p>My name is Tim Hilhorst, founder of Variance Solutions, and welcome to my company page.</p>
                        <p>I aim to combine design, accessibility and front-end technology from specification to realisation. As an architecture graduate of the Technical University of Delft, I have a solution-based approach to solving problems from sketch to detail.</p>
                        <p>I enjoy building and improving web applications that provide an inclusive experience for all its users. I do so by universal design, accessibility code standards, carrying out WCAG audits and writing readible, reusable code.</p>
                        <p>I enjoy discussing user experience, visual designs, meeting accessibility standards and the latest technologies in front-end development.</p>
                    </div>
                </section>
                <section className={`${styles.section} ${styles.experience}`}>
                    <div className={styles.body}>
                        <h2 className={styles.centered} id="experience">Experience</h2>
                    </div>
                    <Experience />
                </section>
                <section className={`${styles.section} ${styles.techStack}`}>
                    <TechStack />
                </section>
                <section className={`${styles.section} ${styles.welcome}`}>
                    <div className={styles.body}>
                        <h2 id="contact">Contact</h2>
                        <p>I'm currently </p>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/variancesolutions">Variance Solutions</a><br/>
                        <strong>KvK registration:</strong> <a href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance">75766809</a><br/>
                        <strong>E-mail:</strong> <a href="mailto:tim@variancesolutions.nl">tim@variancesolutions.nl</a>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Body;
