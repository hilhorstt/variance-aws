import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';
import { setCookie } from '../services/cookies';
import { setHtmlLangAttribute } from '../services/i18n';

const Shortcut = styled.a`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
    z-index: 1000;
    &:focus {
      padding: 0.5em;
      background: black;
      color: white;
      width: auto;
      height: auto;
      clip: initial;
    }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      a, button {
        background: transparent;
        border: 0;
        font-size: 1em;
        position: relative;
        display: block;
        color: black;
        text-decoration: none;
        padding: 1em 0;
        margin: 0 1em;
        &:after {
          position: absolute;
          content: "";
          height: 5px;
          background: #69a072;
          display: block;
          transition: opacity 0.3s ease-in-out;
          margin: 0 auto;
          opacity: 0;
          width: 100%;
          bottom: 0;
        }

        &:hover, &:focus {
          &:after {
            opacity: 1;
          }
        }
      }
    }
  }
  .languagePicker {
    @media only screen and (max-width: 600px) {
      border-left: 1px solid #ccc;
      li button {
        padding: 1.5em 1.5em;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    ul li {
      display: block;
    }
  }
`;

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
                        style={isCurrent ? { fontWeight: 'bold' } : {}}
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
        const { t, i18n } = this.props;
        return (
            <header>
                <Helmet
                    defaultTitle={t('seo.title')}
                    htmlAttributes={{ lang: i18n.language }}
                >
                    <meta name="description" content={t('seo.description')} />
                    <meta name="keywords" content={t('seo.keywords')} />
                </Helmet>
                <Shortcut href="#contact">{t('header.jumpToContact')}</Shortcut>
                <NavBar>
                    <ul>
                        <li><a href="#personal-note">{t('about.title')}</a></li>
                        <li><a href="#experience">{t('experience.title')}</a></li>
                        <li><a href="#tech-stack">{t('techStack.title')}</a></li>
                        <li><a href="#contact">{t('contact.title')}</a></li>
                    </ul>
                    <ul className="languagePicker" aria-label={t('header.languages')}>
                        {this.renderLangButtons()}
                    </ul>
                </NavBar>
            </header>
        );
    }
}

Header.propTypes = {
    t: PropTypes.func.isRequired,
    i18n: PropTypes.object.isRequired,
};

export default withTranslation()(Header);
