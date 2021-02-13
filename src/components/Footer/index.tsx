import React from 'react';

import * as S from './styles';

import logo from '../../assets/logo.svg';

const Footer: React.FC = () => (
  <S.Container>

    <S.FooterContainer>
      <S.FooterNav>
        <S.LeftSide>
          <S.FooterLogo>
            <img src={logo} alt="Dota Profile" />
            <S.FooterLogoText>Dota Profile</S.FooterLogoText>
          </S.FooterLogo>
        </S.LeftSide>
        <S.RightSide>
          <S.FooterMenu>
            <S.FooterLink to="/players">PLAYERS</S.FooterLink>
            <S.FooterLink to="/ranking">RANKING</S.FooterLink>
            <S.FooterLink to="">TORNEIOS</S.FooterLink>
          </S.FooterMenu>
        </S.RightSide>
      </S.FooterNav>

      <S.FooterCopyrightText>
        <span>Copyright 2021. Dota 2 is a registered trademark of Valve Corporation.</span>
      </S.FooterCopyrightText>

    </S.FooterContainer>

  </S.Container>
);

export default Footer;
