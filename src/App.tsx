import React from 'react';
import Landing from './components/Landing/Landing';
import OurMission from './components/OurMission/OurMission';
import TheTeam from './components/TheTeam/TheTeam';
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
    </>
  );
}

export default App;
