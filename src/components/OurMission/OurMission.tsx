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
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  padding-top: 60px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 20px;
  letter-spacing: 3px;
  margin: 10% auto;
  padding: 0 20px;
  line-height: 30px;
  font-weight: 300;
`;

function OurMission() {
  return (
    <Wrapper>
      <Content>
        <Title>Nýr Stafrænn Vettvangur</Title>

        <SubTitle>
          SPJARA er stafrænn vettvangur þar sem notendur geta bæði
          leigt út og fengið leigðar flíkur, eins og spariföt, kjóla, kápur,
          töskur. Með SPJARA færðu aðgang að fjölbreyttri tískuvöru fyrir minni
          pening, tekjur af eigin fötum og minnkar visstsporið í leiðinni!
        </SubTitle>
        <SubTitle>Eins og Airbnb - bara fyrir föt!</SubTitle>
      </Content>
    </Wrapper>
  );
}

export default OurMission;
