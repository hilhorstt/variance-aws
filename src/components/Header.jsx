import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { setCookie } from '../services/cookies';
import { setHtmlLangAttribute } from '../services/i18n';
import styles from './styles.module.scss';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event) {
        const { i18n } = this.props;
        const lng = event.target.dataset.lang;
        setCookie('locale', lng);
        i18n.changeLanguage(lng);
        setHtmlLangAttribute(lng);
    }

    renderLangButtons() {
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
            const { i18n } = this.props;
            const isCurrent = i18n.language === lang.langCode;
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
        const { t } = this.props;
        return (
            <header>
                <a href="#contact" className={styles.shortcut}>{t('header.jumpToContact')}</a>
                <nav className={styles.navBar}>
                    <ul>
                        <li><a href="#personal-note">{t('about.title')}</a></li>
                        <li><a href="#experience">{t('experience.title')}</a></li>
                        <li><a href="#tech-stack">{t('techStack.title')}</a></li>
                        <li><a href="#contact">{t('contact.title')}</a></li>
                    </ul>
                    <ul className={styles.languagePicker} aria-label={t('header.languages')}>
                        {this.renderLangButtons()}
                    </ul>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    t: PropTypes.func.isRequired,
    i18n: PropTypes.object.isRequired,
};

export default withTranslation()(Header);
