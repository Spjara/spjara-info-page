import React from 'react';
import styled from 'styled-components';
import PersonTile from './components/PersonTile';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #e0dbd8;
  color: #746e6e;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 30px;
  padding: 60px 0 40px 0;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
`;

const TeamTileWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(1fr, 1fr));
  grid-gap: 20px;
`;

function TheTeam() {
  return (
    <Wrapper>
      <Content>
        <Title>Teymið okkar</Title>
        <TeamTileWrapper>
          <PersonTile
            title="Ásgerður Heimisdóttir"
            subTitle="er nemi í vöruhönnun við LHÍ með bakgrunn í myndlist og textíl. Hún hefur unnið að umhverfismálum og tengir listsköpun sína oft við loftslagsmál. "
            imageUrl="https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782"
          />
          <PersonTile title="Dagný Guðmundsdóttir" subTitle="sub title" />
          <PersonTile
            title="Helga Hjartardóttir"
            subTitle="er bakenda forritari með Bsc í Tölvunarfræði. Hún hefur starfað hjá leikjafyrirtækinu Klang Games og sprotafyrirtækinu Greenqloud, sem keypt var af bandaríska fyrirtækinu NetApp þar sem hún starfar núna. "
            imageUrl="https://drive.google.com/drive/u/0/folders/1GvfhhfRWMzENIKuociVWL5uje2u1df4R"
          />
          <PersonTile
            title="Kristín Edda Óskarsdóttir"
            subTitle="er með BS. í sálfræði og mastersnemi í félagslegri sálfræði og umhverfisfræði - með áherslu  á hegðunarvísindi og umhverfismál. Hefur starfað sem stílisti í íslenskum auglýsingum í og með í 12 ár. "
          />
          <PersonTile
            title="Patricia Anna Þormar"
            subTitle="er lögfræðingur með M.A. gráðu í menningarstjórnun og er stofnandi hlaðvarpsþáttarins Hjúpurinn sem fjallar um lausnir við loftslagsvandanum. Hún hefur haldið fjölda fyrirlestra um umhverfismál og sjálfbærni og hefur fjölbreytta reynslu af verkefnastjórnun bæði hjá hinu opinbera sem og í lista- og menningargeiranum."
          />
          <PersonTile
            title="Pála Ögn Stefánsdóttir"
            subTitle="er framenda forritari með Bsc í Tölvunarfræði. Hún starfar hjá K3 Business Technologies í hugbúnaðarþróun. Hún hefur mikinn áhuga á sjálfbærari þróun og vill leggja hönd á plóg við að skapa sjálfbærari heim."
          />
          <PersonTile title="Sigríður Guðjónsdóttir" subTitle="sub title" />
        </TeamTileWrapper>
      </Content>
    </Wrapper>
  );
}

export default TheTeam;
