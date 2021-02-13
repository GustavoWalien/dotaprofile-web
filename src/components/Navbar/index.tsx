import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as S from './styles';

import logo from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <S.Container>
      <S.NavContainer>

        <S.LeftSide>
          <S.NavLogo>
            <img src={logo} alt="Dota Profile" />
            <S.NavLink to="/">
              <S.NavLogoText>Dota Profile</S.NavLogoText>
            </S.NavLink>
          </S.NavLogo>
          <S.NavMenu id={showLinks ? 'hidden' : ''}>
            <S.NavLink onClick={() => { setShowLinks(!showLinks); }} to="/players">PLAYERS</S.NavLink>
            <S.NavLink onClick={() => { setShowLinks(!showLinks); }} to="/ranking">RANKING</S.NavLink>
            <S.NavLink onClick={() => { setShowLinks(!showLinks); }} to="">TORNEIOS</S.NavLink>
          </S.NavMenu>
        </S.LeftSide>

        <S.RightSide>
          <S.Bars onClick={() => setShowLinks(!showLinks)} />
        </S.RightSide>

      </S.NavContainer>
    </S.Container>
  );
};

export default Navbar;
