import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #15181f;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;

  position: fixed;
  top: 0px;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {

  }

`;

export const NavContainer = styled.div`
  max-width: 1180px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  flex: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  #hidden {
    display: flex;
  }

  @media only screen and (max-width: 1000px) {
    .close {
      visibility: hidden;
    }

    #hidden {
      position: fixed;
      left: 0px;
      top: 0px;
      right: 0;
      height: 50vh;
      max-height: 100vh;
      width: 100%;
      background-color: #15181f;
      box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      transition: top 1s;
    }
  }
`;

export const RightSide = styled.div`
  flex: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLogo = styled.div`
  display: flex;

  align-items: center;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 1000px) {
    width: 200px;
  }
`;

export const NavLogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #f0f0f5;
`;

export const NavMenu = styled.div`
  max-height: 80px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    top: -670px;
  }

`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 15px;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: rgb(200, 202, 227);
  }

  @media only screen and (max-width: 1000px) {
    margin: 10px;
    font-size: 20px;
  }
`;

export const BtnHamburgerContainer = styled.div`
  display: none;

  @media only screen and (max-width: 1000px) {
    margin-right: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .5s ease-in-out;

    .menu-btn__burger {
      width: 20px;
      height: 3px;
      background: #f0f0f5;
      border-radius: 5px;
      transition: all .5s ease-in-out;
    }

    .menu-btn__burger::before,
    .menu-btn__burger::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 3px;
      background: #f0f0f5;
      border-radius: 5px;
      transition: all .5s ease-in-out;
    }

    .menu-btn__burger::before {
      transform: translateY(-8px);
    }

    .menu-btn__burger::after {
      transform: translateY(8px);
    }

    /* ANIMATION */
    &.open .menu-btn__burger {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }

    &.open .menu-btn__burger::before {
      transform: rotate(45deg) translate(35px, -35px);
    }

    &.open .menu-btn__burger::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
`;
