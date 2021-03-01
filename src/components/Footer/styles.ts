import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  background: #15181f;
  box-shadow: rgb(0 0 0 / 50%) 0px -2px 4px 0px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContainer = styled.div`
  margin: 20px;
  width: 100%;
  max-width: 1180px;


  @media screen and (max-width: 1000px) {
  }
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftSide = styled.div`
  flex: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RightSide = styled.div`
  flex: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;

  margin-left: 10px;
`;

export const FooterLogoText = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: #f0f0f5;
  margin: 10px;
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-left: 10px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const FooterLink = styled(Link)`
  color: #f0f0f5;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: none;

  &:hover {
    color: rgb(200, 202, 227);
  }
`;

export const FooterCopyrightText = styled.span`
  color: #f0f0f5;
  font-size: 10px;
  margin-left: 10px;
`;
