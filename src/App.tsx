import React from 'react';
import Landing from './components/Landing/Landing';
import OurMission from './components/OurMission/OurMission';
import TheTeam from './components/TheTeam/TheTeam';
import Contact from './components/Contact/Contact';
import { createGlobalStyle } from 'styled-components';
import { Element } from 'react-scroll';

// https://fonts.googleapis.com/css?family=Tenor+Sans

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Tenor+Sans);

* {
  font-family: 'Tenor Sans';
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
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
