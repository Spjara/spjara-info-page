import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto 1fr;
  grid-gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'GT Sectra Medium'
`;

const SubTitle = styled.div`
  font-size: 16px;
  letter-spacing: 1px;
  max-width: 300px;
  font-family: 'GT Sectra Light'
`;

const Image = styled.div<{ imageUrl: string | undefined }>`
  content: '';
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-color: white;
  width: 150px;
  height: 230px;
  border-radius: 383.5px;
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
