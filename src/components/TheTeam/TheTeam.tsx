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
  font-size: 6vh;
  padding: 60px 0 60px 0px;
  letter-spacing: 5px;
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
        <Title>VIÐ ERUM</Title>
        <TeamTileWrapper>
          <PersonTile
            title="Ásgerður Heimisdóttir"
            subTitle="er nemi í vöruhönnun við LHÍ með bakgrunn í myndlist og textíl. Hún hefur unnið að umhverfismálum og tengir listsköpun sína oft við loftslagsmál. "
            imageUrl="./Assets/TheTeam/asgerdur.jpg"
          />
          <PersonTile
            title="Dagný Guðmundsdóttir"
            subTitle="er myndlistarkona (MHÍ) og kennari (KHÍ) með áherslu á skúlptúr og textíl og stundar nú fjölbreytta vistrækt. 15 ára starf á Árbæjarsafni við að setja upp sýningar, stjórna viðburðum, sjá um búninga, fyrirbyggjandi forvörslu og setja á laggirnar fræðslustofu um viðhald eldri húsa."
            imageUrl="./Assets/TheTeam/dagny.jpg"
          />
          <PersonTile
            title="Helga Hjartardóttir"
            subTitle="er bakenda forritari með Bsc í Tölvunarfræði. Hún hefur starfað hjá leikjafyrirtækinu Klang Games og sprotafyrirtækinu Greenqloud, sem keypt var af bandaríska fyrirtækinu NetApp þar sem hún starfar núna. "
            imageUrl="./Assets/TheTeam/helga.jpg"
          />
          <PersonTile
            title="Kristín Edda Óskarsdóttir"
            subTitle="er með BS. í sálfræði og mastersnemi í félagslegri sálfræði og umhverfisfræði - með áherslu  á hegðunarvísindi og umhverfismál. Hefur starfað sem stílisti í íslenskum auglýsingum í og með í 12 ár. "
            imageUrl="./Assets/TheTeam/kristin_edda.jpg"
          />
          <PersonTile
            title="Patricia Anna Þormar"
            subTitle="er lögfræðingur með M.A. gráðu í menningarstjórnun og er stofnandi hlaðvarpsþáttarins Hjúpurinn sem fjallar um lausnir við loftslagsvandanum. Hún hefur haldið fjölda fyrirlestra um umhverfismál og sjálfbærni og hefur fjölbreytta reynslu af verkefnastjórnun bæði hjá hinu opinbera sem og í lista- og menningargeiranum."
            imageUrl="./Assets/TheTeam/patsy.png"
          />
          <PersonTile
            title="Pála Ögn Stefánsdóttir"
            subTitle="er framenda forritari með Bsc í Tölvunarfræði. Hún starfar hjá K3 Business Technologies í hugbúnaðarþróun. Hún hefur mikinn áhuga á sjálfbærari þróun og vill leggja hönd á plóg við að skapa sjálfbærari heim."
            imageUrl="./Assets/TheTeam/pala.png"
          />
          <PersonTile
            title="Sigríður Guðjónsdóttir"
            subTitle="er félagssálfræðingur (MSc) með ástríðu fyrir að nýta innsýn úr sálfræði til að finna lausnir í umhverfismálum. Fjölbreytt reynsla af sviði ráðgjafar, rannsókna og gagnaúrvinnslu, viðburðarskipulags, þverfaglegrar teymisvinnu, textasmíða og fræðslustarfa."
            imageUrl="./Assets/TheTeam/sigga.jpg"
          />
        </TeamTileWrapper>
      </Content>
    </Wrapper>
  );
}

export default TheTeam;
