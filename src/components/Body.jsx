import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Experience from './Experience';
import TechStack from './TechStack';
import logoSvg from '../images/variance-solutions-logo.svg';
import me from '../images/tim-hilhorst.jpg';

const Logo = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const Section = styled.section`
    .title {
      text-align: center;
      width: calc(100% - 3em);
      max-width: 700px;
      margin: 0 auto;
      color: white;
      text-shadow: 1px 2px 3px #000;
      h1 {
        font-size: 2em;
        margin-bottom: 0;
        @media only screen and (max-width: 600px) {
          font-size: 1.8em;
        }
      }
    }
    &.welcome {
      background: rgb(255,193,69);
      background: linear-gradient(135deg, rgba(255,193,69,1) 0%, rgba(41,155,129,1) 100%);
    }
    &.experience {
      background: rgb(229,229,229);
      background: linear-gradient(135deg, rgba(229,229,229,1) 0%, rgba(203,203,116,1) 100%);
    }
    &.techStack {
      overflow-x: auto;
    }
    padding-top: 3em;
    padding-bottom: 3em;
    .body {
      width: calc(100% - 8em);
      font-size: 1.2em;
      padding: 3em;
      margin: 0 auto;
      max-width: 750px;
      line-height: 1.8em;
      > h2 {
        font-size: 1.8em;
        font-weight: 700;
        margin-top: 0;
        &.centered {
          text-align: center;
        }
      }
      .profilePhoto {
        float: right;
        width: 250px;
        margin: 0 0 0 0.5em;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 6px 3px -2px rgba(0,0,0,.5);
        &:hover {
          transform: scale(1.05);
          transition: all 0.2s ease-in-out;
          box-shadow: 0 12px 8px -5px rgba(0,0,0,.25);
        }
        @media only screen and (max-width: 600px) {
          float: none;
          margin-left: 1em;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      .body {
        padding: 1.5em;
        width: calc(100% - 5em);
      }
    }
    &.welcome .body {
      background: white;
      border-radius: 3em;
      box-shadow: 0 5px 5px -3px  #000;
      @media only screen and (max-width: 600px) {
        border-radius: 1.5em;
      }
    }
`;

function Body() {
    const { t } = useTranslation();
    return (
        <>
            <Section className="welcome">
                <div className="body">
                    <Logo>
                        <img src={logoSvg} alt="Variance Solutions logo" />
                    </Logo>
                </div>
                <div className="title">
                    <h1>{t('splash.header')}</h1>
                </div>
            </Section>
            <Section>
                <div className="body">
                    <h2 id="personal-note">{t('about.title')}</h2>
                    <img className="profilePhoto" src={me} alt="Tim Hilhorst" />
                    <div dangerouslySetInnerHTML={{ __html: t('about.body') }} />
                </div>
            </Section>
            <Section className="experience">
                <div className="body">
                    <h2 className="centered" id="experience">{t('experience.title')}</h2>
                </div>
                <Experience />
            </Section>
            <Section className="techStack">
                <TechStack />
            </Section>
            <Section className="welcome">
                <div className="body">
                    <h2 id="contact">{t('contact.title')}</h2>
                    <p>{t('contact.body')}</p>
                    <strong>E-mail:</strong>
                    {' '}
                    <a href="mailto:tim@variancesolutions.nl">tim@variancesolutions.nl</a>
                    <br />
                    <strong>LinkedIn:</strong>
                    {' '}
                    <a href="https://www.linkedin.com/company/variancesolutions">Variance Solutions</a>
                    <br />
                    <strong>
                        {t('contact.kvk')}
                        :
                    </strong>
                    {' '}
                    <a href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=757668090000&origq=variance">75766809</a>
                </div>
            </Section>
        </>
    );
}

export default Body;
