import React from 'react';
import styled from 'styled-components';
import PersonTile from './components/PersonTile';

const Wrapper = styled.div`
  z-index: -1;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: #dbd7d5;
  color: #746e6e;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  width: 150vh;
  height: 100vh;
  background: url('./Assets/icons/right_corner.svg') no-repeat;
  content: '';
  background-size: cover;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 35px;
  padding: 60px 0 40px 0;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  font-family: 'GT Sectra Medium';
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
      <Background />
      <Content>
        <Title>VIÐ ERUM</Title>
        <TeamTileWrapper>
          <PersonTile
            title="Ásgerður Heimisdóttir"
            subTitle="Ásgerður er nemi í vöruhönnun við LHÍ með bakgrunn í myndlist og textíl. Hún hefur unnið að umhverfis-
            og fræðslumálum og tengir listsköpun sína gjarnan við loftslagsmál."
            imageUrl="./Assets/TheTeam/asgerdur.jpg"
          />
          <PersonTile
            title="Dagný Guðmundsdóttir"
            subTitle="er myndlistarkona og kennari með áherslu á textíl og stundar nú fjölbreytta vistrækt. Hún á að baki 15 ára
            starf á Árbæjarsafni við sýningagerð, viðburðastjórnun, fræðslumál, búningaumsjón og fyrirbyggjandi
            forvörslu."
            imageUrl="./Assets/TheTeam/dagny.jpg"
          />
          <PersonTile
            title="Helga Hjartardóttir"
            subTitle="er bakendaforritari með Bsc í tölvunarfræði. Hún hefur starfað hjá leikjafyrirtækinu Klang Games
            og sprotafyrirtækinu Greenqloud, sem keypt var af bandaríska fyrirtækinu NetApp þar sem hún starfar
            núna."
            imageUrl="./Assets/TheTeam/helga.jpg"
          />
          <PersonTile
            title="Kristín Edda Óskarsdóttir"
            subTitle="Kristín Edda er meistaranemi í félagslegri sálfræði og umhverfisfræði með áherslu á hegðunarvísindi. Hún
            hefur víðfeðma reynslu úr auglýsingageiranum og hefur starfað sem stílisti í 12 ár."
            imageUrl="./Assets/TheTeam/kristin_edda.jpg"
          />
          <PersonTile
            title="Patricia Anna Þormar"
            subTitle="Patricia er lögfræðingur og stofnandi hlaðvarpsþáttarins Hjúpurinn sem fjallar um lausnir við
            loftslagsvandanum. Hún hefur fjölbreytta reynslu af verkefnastjórnun, fræðslustjórnun og ráðgjöf."
            imageUrl="./Assets/TheTeam/patsy.png"
          />
          <PersonTile
            title="Pála Ögn Stefánsdóttir"
            subTitle="er framendaforritari með Bsc í tölvunarfræði. Hún starfar hjá K3 Business Technologies í
            hugbúnaðarþróun. Hún hefur mikinn áhuga á sjálfbærri þróun og vill leggja hönd á plóg við að skapa
            sjálfbærari heim."
            imageUrl="./Assets/TheTeam/pala.png"
          />
          <PersonTile
            title="Sigríður Guðjónsdóttir"
            subTitle="er félagssálfræðingur (MSc) með ástríðu fyrir að nýta innsýn úr sálfræði til að finna lausnir við
            umhverfismálum. Hún hefur fjölbreytta reynslu á sviði ráðgjafar, rannsókna og gagnaúrvinnslu,
            viðburðarskipulags, þverfaglegrar teymisvinnu, textasmíða og fræðslustarfa."
            imageUrl="./Assets/TheTeam/sigga.jpg"
          />
        </TeamTileWrapper>
      </Content>
    </Wrapper>
  );
}

export default TheTeam;
