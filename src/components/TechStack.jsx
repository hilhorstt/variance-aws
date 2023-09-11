import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TechStackContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  .techStackTitle {
    font-size: 1.4em;
    display: flex;
    padding: 2em;
    align-items: center;
    min-width: 10em;
  }
  .list {
    padding: 1em;
    min-width: 10em;
    max-width: 15em;
    h3 {
      display: flex;
      align-items: center;
      font-size: 1.3em;
      margin: 0 0 0.5em 0;
      height: 4.5em;
    }
    ul {
      padding-left: 0;
      margin: 0;
      list-style: none;
      li {
        line-height: 1.5em;
        border-left: 5px solid rgba(255,193,69,1);
        padding-left: 0.5em;
        margin-bottom: 0.5em;
      }
    }
    .level1 {
      font-size: 1.2em;
      font-weight: 600;
    }
    .level2 {
      font-size: 1.2em;
    }
    .level3 {
      font-size: 1em;
      color: #666;
    }
  }
`;

function TechStack() {
    const { t } = useTranslation();
    return (
        <TechStackContainer>
            <div className="techStackTitle">
                <h2 id="tech-stack">{t('techStack.title')}</h2>
            </div>
            <div className="list">
                <h3>Languages, frameworks, libraries</h3>
                <ul>
                    <li className="level1">
                        React, ES6/Typescript, Redux (thunk & sagas)
                    </li>
                    <li className="level1">CSS3, SASS, CSS modules</li>
                    <li className="level1">Material UI, Semantic UI</li>
                    <li className="level2">NodeJS</li>
                    <li className="level3">Backbone, Bootstrap, underscoreJS</li>
                    <li className="level3">Handlebars, Marionette, JQuery</li>
                    <li className="level3">Java, SQL, XSLT</li>
                </ul>
            </div>
            <div className="list">
                <h3>Compilers, services & testing</h3>
                <ul>
                    <li className="level1">Webpack, Gulp</li>
                    <li className="level1">Jest, Mocha</li>
                    <li className="level2">
                        Lighthouse, Accessibility Insights
                    </li>
                    <li className="level2">
                        Puppeteer, BrowserStack, Percy, XCode, Postman
                    </li>
                    <li className="level2">
                        EC2/S3, Lambda, Beanstalk, Route53 (AWS)
                    </li>
                    <li className="level3">TeamCity, Github Actions</li>
                </ul>
            </div>
            <div className="list">
                <h3>IDE & Design</h3>
                <ul>
                    <li className="level1">
                        IntelliJ, WebStorm, Sublime, SQLDeveloper
                    </li>
                    <li className="level2">
                        Photoshop, Illustrator, InDesign, Premiere
                    </li>
                </ul>
            </div>
            <div className="list">
                <h3>Agile, planning & process</h3>
                <ul>
                    <li className="level1">Certified Scrum Master</li>
                    <li className="level1">JIRA, Confluence</li>
                    <li className="level2">Product team</li>
                    <li className="level2">Backlog prioritisation</li>
                </ul>
            </div>
        </TechStackContainer>
    );
}

export default TechStack;
