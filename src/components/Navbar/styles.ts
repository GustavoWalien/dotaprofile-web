import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

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
    #hidden {
      position: absolute;
      left: 0px;
      top: 70px;
      height: 250px;
      max-height: 250px;
      width: 100%;
      background-color: #15181f;
      box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
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
  //flex-wrap: wrap;

  @media only screen and (max-width: 1000px) {
    display: none;
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

export const Bars = styled(FaBars)`
  display: none;

  @media only screen and (max-width: 1000px) {
    color: #f0f0f5;
    cursor: pointer;
    font-size: 1.8rem;
    margin-right: 10px;

    display: flex;
    justify-content: flex-end;
  }

`;
