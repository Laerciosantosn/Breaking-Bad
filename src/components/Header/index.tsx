import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from '../../assets/Logo.png';

import {
  Container,
  HeaderSecondary,
  SubcontainerContainer,
  HeaderNavigation,
  HeaderLinks,
  DescriptionContainer,
} from './style';

const Header: React.FC = () => (
  <Container>
    <HeaderSecondary className="visibl">
      <div className="info">
        <p>Stay current. Watch the latest full episodes of AMC shows.</p>
      </div>
      <div className="container">
        <section className="links">
          <a href="/">Featured shows</a>
          <a href="/">Characters</a>
          <a href="/">Episodes</a>
        </section>

        <div className="episodes">
          <img
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2019/07/the-walking-dead-season-10b-daryl-reedus-400x600_ShowPoster_withLogo_FINALE.jpg"
            alt="The Walking Dead"
          />
        </div>

        <div className="episodes">
          <img
            src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2019/07/the-walking-dead-season-10b-daryl-reedus-400x600_ShowPoster_withLogo_FINALE.jpg"
            alt="The Walking Dead"
          />
        </div>
      </div>
    </HeaderSecondary>

    <SubcontainerContainer>
      <HeaderNavigation>
        <a href="/">
          <GiHamburgerMenu />
        </a>
        <p>Sign In</p>
      </HeaderNavigation>
      <HeaderLinks className="center">
        <img src={Logo} alt="Logo Breacking Bad" />
        <nav>
          <Link to="/characters" className="active">
            Characters
          </Link>

          <Link to="episodes">Episodes</Link>
        </nav>
      </HeaderLinks>
      <DescriptionContainer>
        <div className="description">
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
        </div>
      </DescriptionContainer>
    </SubcontainerContainer>
  </Container>
);

export default Header;
