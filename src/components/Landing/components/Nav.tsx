import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  width: auto;
  height: 20vh;
  text-align: right;
  padding: 10% 10% 0 0;
`;

const SubTitle = styled.div`
  width: auto;
  font-size: 4vh;

  font-weight: 200;
  padding-top: 15px;
  letter-spacing: 1px;

  &:hover {
    letter-spacing: 3px;
    cursor: pointer;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Link to="our-mission-page" spy={true} smooth={true} duration={500}>
        <SubTitle>Hvað er Spjara?</SubTitle>
      </Link>
      <Link to="the-team-page" spy={true} smooth={true} duration={500}>
        <SubTitle>Teymið okkar</SubTitle>
      </Link>
      <Link to="contact-page" spy={true} smooth={true} duration={500}>
        <SubTitle>Hafa samband</SubTitle>
      </Link>
    </Wrapper>
  );
};

export default Nav;
