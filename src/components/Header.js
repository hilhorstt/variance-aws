import React from 'react';

import styles from './style.scss';

class Header extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <button className={styles.shortcut}>Jump to contact</button>
                <nav className={styles.navBar}>
                    <ul>
                        <li><a href="#personal-note">Personal note</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#tech-stack">Tech stack and tooling</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className={styles.languagePicker}>
                        <li><button disabled={true} role="button">EN</button></li>
                        <li><button disabled={true} role="button">NL</button></li>
                        <li><button disabled={true} role="button">NO</button></li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;
