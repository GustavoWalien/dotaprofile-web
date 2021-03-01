import React, { useState } from 'react';
import * as S from './styles';

import logo from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

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
          <S.NavMenu className={showLinks ? 'open' : 'close'} id={showLinks ? 'hidden' : ''}>
            <S.NavLink onClick={() => setShowLinks(false)} to="/players">PLAYERS</S.NavLink>
            <S.NavLink onClick={() => setShowLinks(false)} to="/ranking">RANKING</S.NavLink>
            <S.NavLink onClick={() => setShowLinks(false)} to="">TORNEIOS</S.NavLink>
          </S.NavMenu>
        </S.LeftSide>

        <S.RightSide>
          <S.BtnHamburgerContainer className={showLinks ? 'open' : ''} onClick={handleShowLinks}>
            <div className="menu-btn__burger" />
          </S.BtnHamburgerContainer>
        </S.RightSide>

      </S.NavContainer>

    </S.Container>
  );
};

export default Navbar;
