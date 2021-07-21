import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Section = ({ model, backImg, rightBtn, leftBtn, description }) => {
  return (
    <Wrap bgImage={backImg}>
      <Slide direction='up'>
        <ItemText>
          <h1>{model}</h1>
          <p>{description}</p>
        </ItemText>
      </Slide>

      <Buttons>
        <Slide direction='down'>
          <ButtonGroup>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
        </Slide>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  > h1 {
    margin-bottom: 1rem;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 2rem;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 3rem;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 4rem;
  width: 25.6rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 1.3rem;
  cursor: pointer;
  margin-right: 2rem;

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #000;
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const DownArrow = styled.img`
  margin-top: 2rem;
  height: 4rem;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: grid;
  place-items: center;
`;
