import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  SubcontainerContainer,
  BodyContainer,
  Description,
} from './style';

const Home: React.FC = () => (
  <Container>
    <SubcontainerContainer>
      <BodyContainer>
        <Header />
        <Description>
          <h2>SEASON 5</h2>
          <p>
            Walter White's war with Gus Fring has ended in triumphant victory.
            Now his transformation from a well-meaning family man to ruthless
            drug kingpin is almost complete.
          </p>
        </Description>
      </BodyContainer>
    </SubcontainerContainer>
  </Container>
);

export default Home;
