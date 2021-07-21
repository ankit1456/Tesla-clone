import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { Fade, Slide } from "react-awesome-reveal";
const Home = () => {
  return (
    <HomeContainer>
      <Section
        model='Model S'
        backImg='model-s.jpg'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
      />
      <Section
        model='Model X'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
        backImg='model-x.jpg'
      />
      <Section
        model='Model 3'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
        backImg='model-3.jpg'
      />
      <Section
        model='Model Y'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
        backImg='model-y.jpg'
      />
      <Section
        model='Solar Panels'
        description='Lowest Cost Solar Panels in America'
        leftBtn='order now'
        rightBtn='learn more'
        backImg='solar-panel.jpg'
      />
      <Section
        model='Solar Roof'
        description='Produce Clean Energy From Your Roof'
        leftBtn='order now'
        rightBtn='learn more'
        backImg='solar-roof.jpg'
      />
      <Section
        rightButton
        model='Accessories'
        description='Order Online for Touchless Delivery'
        leftBtn='shop now'
        backImg='accessories.jpg'
      />
      <Section
        model='New Interior'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
        backImg='new-interior.jpg'
      />
      <Section
        model='Game'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
        backImg='game.jpg'
      />

      <Section
        model='Audio'
        description='Order Online for Touchless Delivery'
        leftBtn='Custom order'
        rightBtn='existing inventory'
        backImg='audio.jpg'
      />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
`;
