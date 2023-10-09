import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import getLanguageRoute, { getTargetLangPathname, pages } from '../../services/routing';
import closeIcon from './icon-close.svg';
import menuIcon from './icon-menu.svg';

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

interface CustomNavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    toggleMenu: () => void;
}

function CustomNavLink({
    to, children, className, toggleMenu,
}: CustomNavLinkProps) {
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

function Header() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const lng = event.currentTarget.dataset.lang || 'nl';

        const { protocol, host, pathname } = window.location;
        const path = getTargetLangPathname(pathname, i18n.language, lng);

        if (host.includes('localhost')) {
            i18n.changeLanguage(lng).then(() => {
                navigate(path);
            });
        } else {
            const subdomain = lng === 'nl' ? 'www' : lng;
            const arr = window.location.host.split('.');
            if (arr.length === 3) {
                arr[0] = subdomain;
            } else {
                arr.unshift(subdomain);
            }
            const hostname = arr.join('.');
            window.location.href = `${protocol}//${hostname}${path}`;
        }
    };

    const toggleMenu = () => {
        setOpen(!open);
    };

    const renderLangButtons = useCallback(() => languages.map((lang) => {
        const isCurrent = i18n.language === lang.langCode;
        return (
            <li key={`${lang.langCode}_button`}>
                <button
                    type="button"
                    onClick={changeLanguage}
                    aria-label={lang.description}
                    style={isCurrent ? { fontWeight: 'bold' } : {}}
                    aria-current={isCurrent}
                    data-lang={lang.langCode}
                >
                    {lang.title}
                </button>
            </li>
        );
    }), []);

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
            <Shortcut to={getLanguageRoute(pages.CONTACT, i18n)}>{t('header.jumpToContact')}</Shortcut>
            {!open && (<StyledMenuButton onClick={toggleMenu}><img src={menuIcon} alt={t('header.menu')} /></StyledMenuButton>)}
            <NavBar className={open ? 'open' : ''}>
                {open && (<StyledMenuButton onClick={toggleMenu}><img src={closeIcon} alt={t('header.close')} /></StyledMenuButton>)}
                <ul>
                    <li>
                        <StyledNavLink
                            to={getLanguageRoute(pages.HOME, i18n)}
                            toggleMenu={toggleMenu}
                        >
                            {t('home.title')}
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to={getLanguageRoute(pages.EXPERIENCE, i18n)}
                            toggleMenu={toggleMenu}
                        >
                            {t('experience.title')}
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to={getLanguageRoute(pages.TECH_STACK, i18n)}
                            toggleMenu={toggleMenu}
                        >
                            {t('techStack.title')}
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to={getLanguageRoute(pages.ACCESSIBILITY, i18n)}
                            toggleMenu={toggleMenu}
                        >
                            {t('accessibility.title')}
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to={getLanguageRoute(pages.CONTACT, i18n)}
                            toggleMenu={toggleMenu}
                        >
                            {t('contact.title')}
                        </StyledNavLink>
                    </li>
                </ul>
                <ul className="languagePicker" aria-label={t('header.languages')}>
                    {renderLangButtons()}
                </ul>
            </NavBar>
        </header>
    );
}

export default Header;
