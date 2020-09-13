import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  background-color: #6a90a3;
  text-align: center;
  align-items: middle;
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  letter-spacing: 1px;
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: white;
  letter-spacing: 1px;
`;

const Image = styled.div<{ imageUrl: string | undefined }>`
  content: '';
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #da6732;
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
