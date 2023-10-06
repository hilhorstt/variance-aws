import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import closeIcon from './icon-close.svg';
import menuIcon from './icon-menu.svg';

function CustomNavLink({
    to, children, className, toggleMenu,
}) {
    return (
        <NavLink
            className={({ isActive }) => (isActive ? `${className} active` : className)}
            to={to}
            onClick={toggleMenu}
        >
            {children}
        </NavLink>
    );
}

CustomNavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

const StyledNavLink = styled(CustomNavLink)`
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
    left: 0;
  }

  &.active {
    &:after {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.3em;
  }
`;

const Shortcut = styled(NavLink)`
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

const StyledMenuButton = styled.button`
  display: none;
  position: fixed;
  background: transparent;
  border: 0;
  margin: 0;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  height: 4em;
  @media only screen and (max-width: 600px) {
    display: none;
    &.open {
      display: flex;
    }
    height: 100vh;
    position: fixed;
    width: 100vw;
    flex-direction: column;
    z-index: 1000;
    font-family: 'Roboto Slab',serif;
    text-align: center;
    .languagePicker {
      display: flex;
      flex-direction: row;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 600px) {
      margin-top: 4em;
    }
    li {
      display: inline-block;
    }
  }
  .languagePicker {
    button {
      background: transparent;
      border: 0;
      font-size: 1em;
      padding: 1em 0;
      margin: 0 1em;
    }
    @media only screen and (max-width: 600px) {
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
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            open: false,
        };
    }

    changeLanguage(event) {
        const { i18n } = this.props;
        const lng = event.target.dataset.lang;

        const { protocol, host, pathname } = window.location;
        if (host.includes('localhost')) {
            i18n.changeLanguage(lng);
        } else {
            const subdomain = lng === 'nl' ? 'www' : lng;
            const arr = window.location.host.split('.');
            if (arr.length === 3) {
                arr[0] = subdomain;
            } else {
                arr.unshift(subdomain);
            }
            const hostname = arr.join('.');
            window.location.href = `${protocol}//${hostname}${pathname}`;
        }
    }

    toggleMenu() {
        const { open } = this.state;
        this.setState({
            open: !open,
        });
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
        const { open } = this.state;
        return (
            <header>
                <Helmet
                    defaultTitle={t('seo.title')}
                    htmlAttributes={{ lang: i18n.language }}
                >
                    <meta name="description" content={t('seo.description')} />
                    <meta name="keywords" content={t('seo.keywords')} />
                    <link rel="alternate" hrefLang="nl-NL" href="https://www.variancesolutions.nl" />
                    <link rel="alternate" hrefLang="no-NO" href="https://no.variancesolutions.nl" />
                    <link rel="alternate" hrefLang="en-EN" href="https://en.variancesolutions.nl" />
                </Helmet>
                <Shortcut to="/contact">{t('header.jumpToContact')}</Shortcut>
                {!open && (<StyledMenuButton onClick={this.toggleMenu}><img src={menuIcon} alt={t('header.menu')} /></StyledMenuButton>)}
                <NavBar className={open ? 'open' : ''}>
                    {open && (<StyledMenuButton onClick={this.toggleMenu}><img src={closeIcon} alt={t('header.close')} /></StyledMenuButton>)}
                    <ul>
                        <li>
                            <StyledNavLink to="/" toggleMenu={this.toggleMenu}>
                                {t('home.title')}
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/ervaring" toggleMenu={this.toggleMenu}>
                                {t('experience.title')}
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/tech-stack" toggleMenu={this.toggleMenu}>
                                {t('techStack.title')}
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/contact" toggleMenu={this.toggleMenu}>
                                {t('contact.title')}
                            </StyledNavLink>
                        </li>
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
