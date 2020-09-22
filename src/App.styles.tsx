import styled from 'styled-components';

export const DarkArrow = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 30vw;
  height: 23vh;
  background: url('./Assets/icons/arrow_down.svg') no-repeat;
  content: '';

  @media (max-width: 768px) {
    left: 10%;
    width: 30vw;
    height: 30vh;
  }

  @media (max-width: 605px) {
    left: 10%;
    width: 30vw;
    height: 30vh;
  }
`;

export const PinkArrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  right: 1%;
  width: 30vw;
  max-width: 50vw;
  height: 80vh;
  background: url('./Assets/icons/arrow_up_pink.svg') no-repeat;
  content: '';

  @media (max-width: 900px) {
    top: 45%;
    right: 0;
    width: 30vw;
    height: 90vh;
  }

  @media (max-width: 768px) {
    top: 45%;
    right: 0;
    width: 35vw;
    height: 90vh;
  }

  @media (max-width: 605px) {
    top: 70%;
    right: 1%;
    width: 40vw;
    height: 80vh;
  }
`;

export const RedArrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 160vh;
  right: 0;
  width: 40vw;
  height: 80vh;
  background: url('./Assets/icons/arrow_down_red.svg') no-repeat;
  content: '';

  @media (max-width: 1060px) {
    top: 175vh;
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 680px) {
    top: 182vh;
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 480px) {
    top: 190vh;
    width: 40vw;
    height: 80vh;
  }
`;
