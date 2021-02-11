import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
  padding-top: 80px;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0px;
  z-index: 1000;
  width: 100%;

  display: flex;
  justify-content: space-around;
  height: 60px;
  align-items: center;

  background: #15181f;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
`;

export const NavContainer = styled.div`
  width: 1180px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  color: #f0f0f5;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #f0f0f5;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: rgb(200, 202, 227);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
