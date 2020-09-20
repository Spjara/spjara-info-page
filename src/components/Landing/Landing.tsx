import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #e0dbd8;
  color: #746e6e;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 11vh;
  padding: 10% 0 0 30px;
  letter-spacing: 5px;
`;

function Landing() {
  return (
    <Wrapper>
      <Content>
        <Title>Spjara</Title>
      </Content>
    </Wrapper>
  );
}

export default Landing;
