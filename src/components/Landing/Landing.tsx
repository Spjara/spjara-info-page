import React from 'react';
import * as S from './Landing.styles';

function Landing() {
  return (
    <S.Wrapper>
      <S.Background />
      <S.LeftDress />
      <S.RightDress />
      <S.Content>
        <S.TextWrapper>
          <S.Title>Spjara</S.Title>
          <S.SubTitle>Nýtt</S.SubTitle>
          <S.SubTitle>verður</S.SubTitle>
          <S.SubTitle>nýtt</S.SubTitle>
        </S.TextWrapper>
      </S.Content>
    </S.Wrapper>
  );
}

export default Landing;
