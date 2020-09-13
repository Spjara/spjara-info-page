import React from 'react';
import styled from 'styled-components';
import PersonTile from './components/PersonTile';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #6a90a3;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 10vh;
  color: white;
  padding: 60px 0 0 30px;
  letter-spacing: 5px;
`;

const TeamTileWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
`;

function TheTeam() {
  return (
    <Wrapper>
      <Content>
        <Title>Teymið okkar</Title>
        <TeamTileWrapper>
          <PersonTile
            title="John Dow"
            subTitle="sub title"
            imageUrl="https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782"
          />
          <PersonTile title="John Dow" subTitle="sub title" />
          <PersonTile title="John Dow" subTitle="sub title" />
          <PersonTile title="John Dow" subTitle="sub title" />
          <PersonTile title="John Dow" subTitle="sub title" />
          <PersonTile title="John Dow" subTitle="sub title" />
          <PersonTile title="John Dow" subTitle="sub title" />
        </TeamTileWrapper>
      </Content>
    </Wrapper>
  );
}

export default TheTeam;
