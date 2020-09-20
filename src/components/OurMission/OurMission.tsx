import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f5efef;
  color: #746e6e;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 10vh;
  // color: #6a90a3;
  padding: 60px 0 0 30px;
  letter-spacing: 5px;
`;

const Comma = styled.div`
  font-size: 80px;
`;

const CommaRight = styled.div`
  font-size: 80px;
  text-align: right;
`;

const SubTitle = styled.div`
  font-size: 25px;
  letter-spacing: 3px;
  margin: 0 10px;
  padding: 0 20px;
`;

const TextWrapper = styled.div`
  margin: 10% auto 0 auto;
  padding: 20px;
  max-width: 700px;
`;

function OurMission() {
  return (
    <Wrapper>
      <Content>
        <Title>Hvað er Spjara?</Title>
        <TextWrapper>
          <Comma>"</Comma>
          <SubTitle>
            SPJARA er stafrænn vettvangur og þar sem notendur geta bæði leigt út
            og fengið leigðar flíkur, eins og Airbnb fyir föt.
          </SubTitle>
          <CommaRight>"</CommaRight>
        </TextWrapper>
      </Content>
    </Wrapper>
  );
}

export default OurMission;
