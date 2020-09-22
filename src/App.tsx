import React from 'react';
import Landing from './components/Landing/Landing';
import OurMission from './components/OurMission/OurMission';
import TheTeam from './components/TheTeam/TheTeam';
import Contact from './components/Contact/Contact';
import { createGlobalStyle } from 'styled-components';
import { Element } from 'react-scroll';
import * as S from './App.styles';
import GTSectraLight from './fonts/GTSectraDisplay-Light.ttf';
import GTSectraMedium from './fonts/GTSectraDisplay-Medium.ttf';
import Helvetica from './fonts/HelveticaNowDisplay-Light.otf';

const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: 'GT Sectra Light';
   src: url(${GTSectraLight}) format('truetype');
 }

 @font-face {
    font-family: 'GT Sectra Medium';
    src: url(${GTSectraMedium}) format('truetype');
  }

  @font-face {
     font-family: 'Helvetica';
     src: url(${Helvetica}) format('truetype');
   }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <S.DarkArrow />
      <S.PinkArrow />
      <S.RedArrow />
      <Element name="landing-page">
        <Landing />
      </Element>
      <Element name="our-mission-page">
        <OurMission />
      </Element>
      <Element name="the-team-page">
        <TheTeam />
      </Element>
      <Element name="contact-page">
        <Contact />
      </Element>
    </>
  );
}

export default App;
