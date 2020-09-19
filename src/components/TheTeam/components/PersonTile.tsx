import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #6a90a3;
  text-align: center;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto 1fr;
  grid-gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  letter-spacing: 1px;
`;

const SubTitle = styled.div`
  font-size: 13px;
  color: white;
  letter-spacing: 1px;
  max-width: 300px;
`;

const Image = styled.div<{ imageUrl: string | undefined }>`
  content: '';
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid white;
  margin: auto;
`;

function PersonTile({
  title,
  subTitle,
  imageUrl
}: {
  title?: string;
  subTitle?: string;
  imageUrl?: string;
}) {
  return (
    <Wrapper>
      <Image imageUrl={imageUrl} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
}

export default PersonTile;
