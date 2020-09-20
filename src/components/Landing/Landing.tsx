import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #e0dbd8;
  color: #746e6e;
`;

const Content = styled.div`
  height: 100%;
  max-width: 800px;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-weight: 100;
`;

const TextWrapper = styled.div`
  font-size: 80px;
  padding-top: auto;
  padding-bottom: auto;
  text-transform: uppercase;

  // tablet
  @media (max-width: 768px) {
    font-size: 60px;
  }

  // mobile L
  @media (max-width: 425px) {
    font-size: 50px;
  }
`;

function Landing() {
  return (
    <Wrapper>
      <Content>
        <TextWrapper>
          <Title>Spjara</Title>
          <SubTitle>Nýtt</SubTitle>
          <SubTitle>verður</SubTitle>
          <SubTitle>nýtt</SubTitle>
        </TextWrapper>
      </Content>
    </Wrapper>
  );
}

export default Landing;
