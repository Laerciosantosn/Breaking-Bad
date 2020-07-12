import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Header from '../../components/Header';

import {
  Container,
  SubcontainerContainer,
  TopBar,
  BodyContainer,
  Description,
} from './style';

const Home: React.FC = () => (
  <Container>
    <TopBar className="visibl" />
    <SubcontainerContainer>
      <div className="HeadetNavigation">
        <a href="/">
          <GiHamburgerMenu />
        </a>
        <p>Sign In</p>
      </div>
      <BodyContainer>
        <Header />
        <Description>
          <h2>SEASON 5</h2>
          <p>
            Walter White is war with Gus Fring has ended in triumphant victory.
            Now his transformation from a well-meaning family man to ruthless
            drug kingpin is almost complete.
          </p>
          <a href="/">
            <h3>Explore Episodes</h3>
          </a>
          <a href="/">
            <h4>All Episodes</h4>
          </a>
        </Description>
      </BodyContainer>
    </SubcontainerContainer>
  </Container>
);

export default Home;
