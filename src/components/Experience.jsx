import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Trans, useTranslation, withTranslation } from 'react-i18next';
import StyledHeader from '../styled/StyledHeader';

const StyledDiv = styled.div`
  width: calc(100% - 8em);
  font-size: 1.2em;
  padding: 3em;
  margin: 0 auto;
  max-width: 1000px;
  @media only screen and (max-width: 600px) {
    width: calc(100% - 2em);
    padding: 1em;
  }
`;

const ExperienceBlock = styled.article`
  .header {
    color: white;
    display: flex;
    .lineLeft, .lineRight {
      flex: 1;
      border-bottom: 1px solid white;
    }
    .date {
      font-family: 'Roboto Slab', serif;
      margin: 0 2em;
      font-size: 2em;
      text-shadow: 0 1.5px 2px rgba(0,0,0,0.5);
      transform: translateY(0.5em);
    }
  }
  .experienceBody {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    overflow-x: auto;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem;
      text-align: right;
      min-width: 10em;
      max-width: 30%;
      @media only screen and (max-width: 600px) {
        padding: 2rem;
      }
      h3 {
        margin: 0 0 1em 0;
        font-size: 1.8em;
        @media only screen and (max-width: 600px) {
          font-size: 1.6em;
        }
      }
      h4 {
        font-size: 1.3em;
        margin: 0;
        font-weight: lighter;
        @media only screen and (max-width: 600px) {
          font-size: 1.2em;
        }
      }
    }
    .right {
      font-size: 1.1em;
      padding: 3rem;
      flex: 1;
      column-count: 2;
      column-gap: 1.5em;
      min-width: 30em;
      @media only screen and (max-width: 600px) {
        padding: 3rem 2rem;
      }
      p {
        line-height: 1.6em;
        &:first-of-type {
          margin-top: 0;
          &::first-letter {
            font-family: 'Roboto Slab', serif;
            font-size: 4rem;
            float: left;
            line-height: 1;
            margin: -0.1em 0.5rem -.5rem -.5rem;
          }
        }
      }
    }
  }
`;

function Project({ projectKey, startDate }) {
    const { t } = useTranslation();
    const captionKey = `experience.${projectKey}.`;
    return (
        <ExperienceBlock>
            <div className="experienceBody">
                <div className="left">
                    <h3>{t(`${captionKey}title`)}</h3>
                    <h4>{t(`${captionKey}subTitle`)}</h4>
                </div>
                <div className="right"><Trans i18nKey={`${captionKey}body`} /></div>
            </div>
            <div className="header">
                <div className="lineLeft" />
                <div className="date">{startDate}</div>
                <div className="lineRight" />
            </div>
        </ExperienceBlock>
    );
}

Project.propTypes = {
    projectKey: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
};

function Experience() {
    const { t } = useTranslation();
    return (
        <>
            <StyledHeader className="centered" id="experience">{t('experience.title')}</StyledHeader>
            <StyledDiv>
                <ExperienceBlock>
                    <div className="header">
                        <div className="lineLeft" />
                        <div className="date">{t('experience.today')}</div>
                        <div className="lineRight" />
                    </div>
                </ExperienceBlock>
                <Project projectKey="variance" startDate="09 / 2019" />
                <Project projectKey="inspera" startDate="11 / 2015" />
                <Project projectKey="cognizant" startDate="08 / 2013" />
            </StyledDiv>
        </>
    );
}

export default withTranslation()(Experience);
