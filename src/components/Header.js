import React from 'react';
import { withTranslation } from 'react-i18next';
import i18n, { locale, setHtmlLangAttribute } from '../i18n/i18n';
import styles from './style.scss';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentLanguage: locale,
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event) {
        const lng = event.target.dataset.lang;
        localStorage.setItem('locale', lng);
        i18n.changeLanguage(lng);
        setHtmlLangAttribute(lng);
        this.setState({
            currentLanguage: lng,
        });
    }

    renderLangButtons() {
        const { currentLanguage } = this.state;
        const languages = [
            {
                description: 'Nederlands',
                langCode: 'nl',
                title: 'NL',
            },
            {
                description: 'English',
                langCode: 'en',
                title: 'EN',
            },
            {
                description: 'Norsk',
                langCode: 'no',
                title: 'NO',
            },
        ];
        return languages.map((lang) => {
            const isCurrent = currentLanguage === lang.langCode;
            return (
                <li key={`${lang.langCode}_button`}>
                    <button
                        type="button"
                        onClick={this.changeLanguage}
                        aria-label={lang.description}
                        className={isCurrent ? styles.active : ''}
                        aria-current={isCurrent}
                        data-lang={lang.langCode}
                    >
                        {lang.title}
                    </button>
                </li>
            );
        });
    }

    render() {
        return (
            <>
                <a href="#contact" className={styles.shortcut}>{i18n.t('header.jumpToContact')}</a>
                <nav className={styles.navBar}>
                    <ul>
                        <li><a href="#personal-note">{i18n.t('about.title')}</a></li>
                        <li><a href="#experience">{i18n.t('experience.title')}</a></li>
                        <li><a href="#tech-stack">{i18n.t('techStack.title')}</a></li>
                        <li><a href="#contact">{i18n.t('contact.title')}</a></li>
                    </ul>
                    <ul className={styles.languagePicker} aria-label={i18n.t('header.languages')}>
                        {this.renderLangButtons()}
                    </ul>
                </nav>
            </>
        );
    }
}

export default withTranslation()(Header);
