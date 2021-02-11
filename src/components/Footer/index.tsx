import React, { useState } from 'react';

import {
  Container,
  FooterContainer,
  FooterNav,
  FooterLogoText,
  FooterLogo,
  FooterMenu,
  FooterLink,
  FooterCopyrightText,
} from './styles';

import logo from '../../assets/logo.svg';

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    console.log('teste');
  };

  return (
    <Container>

      <FooterContainer>
        <FooterNav>
          <FooterLogo>
            <img src={logo} alt="Dota Profile" />
            <FooterLogoText>Dota Profile</FooterLogoText>
          </FooterLogo>
          <FooterMenu>
            <FooterLink to="/players">PLAYERS</FooterLink>
            <FooterLink to="/ranking">RANKING</FooterLink>
            <FooterLink to="">TORNEIOS</FooterLink>
          </FooterMenu>
        </FooterNav>
        <FooterCopyrightText>
          Copyright 2021. Dota 2 is a registered trademark of Valve Corporation.
        </FooterCopyrightText>
      </FooterContainer>

    </Container>
  );
};

export default Footer;
