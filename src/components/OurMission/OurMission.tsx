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

const SubTitle = styled.div`
  font-size: 25px;
  color: #6a90a3;
  letter-spacing: 3px;
  margin-top: 10%;
  max-width: 600px;
  margin: 10% auto 0 auto;
`;

function OurMission() {
  return (
    <Wrapper>
      <Content>
        <Title>Markmið okkar</Title>
        <SubTitle>
          SPJARA er stafrænn vettvangur og þar sem notendur geta bæði leigt út
          og fengið leigðar flíkur, eins og Airbnb fyir föt.
        </SubTitle>
      </Content>
    </Wrapper>
  );
}

export default OurMission;
