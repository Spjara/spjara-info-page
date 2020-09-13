import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background-color: white;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 10vh;
  color: #6a90a3;
  padding: 60px 0 0 30px;
  letter-spacing: 5px;
`;

function OurMission() {
  return (
    <Wrapper>
      <Content>
        <Title>Markmið okkar</Title>
      </Content>
    </Wrapper>
  );
}

export default OurMission;
