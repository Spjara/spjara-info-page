import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  color: #746e6e;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('./Assets/icons/left_corner.svg');
  content: '';
  background-size: cover;
`;

export const RightDress = styled.div`
  position: absolute;
  z-index: -1;
  top: 15%;
  right: 10%;
  width: 200px;
  height: 200px;
  background: url('./Assets/icons/dress1.png');
  content: '';
  background-size: cover;

  // tablet
  @media (max-width: 768px) {
    top: 15%;
    right: 10%;
    width: 150px;
    height: 150px;
  }

  // mobile L
  @media (max-width: 425px) {
    width: 100px;
    height: 100px;
    top: 10%;
  }
`;

export const LeftDress = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 10%;
  left: 10%;
  width: 220px;
  height: 280px;
  background: url('./Assets/icons/dress2.png');
  content: '';
  background-size: cover;

  // tablet
  @media (max-width: 768px) {
    bottom: 15%;
    width: 150px;
    height: 200px;
  }

  // mobile L
  @media (max-width: 425px) {
    width: 120px;
    height: 150px;
    bottom: 10%;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 800px;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-weight: 800;
  font-family: 'GT Sectra Light'
`;

export const SubTitle = styled.div`
  font-weight: 100;
  font-family: 'GT Sectra Light'
`;

export const TextWrapper = styled.div`
  font-size: 110px;
  padding-top: auto;
  padding-bottom: auto;
  text-transform: uppercase;

  // tablet
  @media (max-width: 768px) {
    font-size: 70px;
  }

  // mobile L
  @media (max-width: 425px) {
    font-size: 50px;
  }
`;
