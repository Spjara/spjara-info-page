import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #6a90a3;
  color: white;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const SubTitle = styled.div`
  width: auto;
  font-size: 4vh;
  color: white;
  font-weight: 200;
  padding-top: 15px;
  letter-spacing: 1px;

  &:hover {
    letter-spacing: 3px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 11vh;
  padding: 10% 0 0 30px;
  letter-spacing: 5px;
`;

const Nav = styled.div`
  width: auto;
  height: 20vh;
  text-align: right;
  padding: 10% 10% 0 0;
`;

function Landing() {
  return (
    <Wrapper>
      <Content>
        <Nav>
          <Link to="our-mission-page" spy={true} smooth={true} duration={500}>
            <SubTitle>Hvað er Spjara?</SubTitle>
          </Link>
          <Link to="the-team-page" spy={true} smooth={true} duration={500}>
            <SubTitle>Teymið okkar</SubTitle>
          </Link>
          <Link to="contact-page" spy={true} smooth={true} duration={500}>
            <SubTitle>Hafa samband</SubTitle>
          </Link>
        </Nav>
        <Title>Spjara</Title>
      </Content>
    </Wrapper>
  );
}

export default Landing;
