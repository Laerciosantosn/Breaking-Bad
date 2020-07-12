import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

import { Container, HeaderContainer } from './style';

const Header: React.FC = () => (
  <Container>
    <HeaderContainer className="center">
      <img src={Logo} alt="Logo Breacking Bad" />
      <nav>
        <Link to="/characters" className="active">
          Characters
        </Link>

        <Link to="episodes">Episodes</Link>
      </nav>
    </HeaderContainer>
  </Container>
);

export default Header;
