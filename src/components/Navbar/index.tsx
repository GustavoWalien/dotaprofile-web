import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Container,
  Nav,
  NavContainer,
  NavLogo,
  NavLogoText,
  NavMenu,
  NavLink,
  Bars,
} from './styles';

import logo from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    console.log('teste');
  };

  return (
    <Container>

      <Nav>
        <NavContainer>
          <NavLogo>
            <img src={logo} alt="Dota Profile" />

            <NavLink to="/">
              <NavLogoText>Dota Profile</NavLogoText>
            </NavLink>
          </NavLogo>
          <Bars />
          <NavMenu>
            <NavLink to="/players">PLAYERS</NavLink>
            <NavLink to="/ranking">RANKING</NavLink>
            <NavLink to="">TORNEIOS</NavLink>
          </NavMenu>
        </NavContainer>
      </Nav>

    </Container>
  );
};

export default Navbar;
