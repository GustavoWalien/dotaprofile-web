import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  align-items: center;
  min-height: 100vh;

  @media screen and (max-width: 1170px) {
    padding: 10px;
  }
`;

export const PlayersContent = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;
`;

export const CardContent = styled.div`
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 8px;

  @media screen and (max-width: 1200px) {

  }
`;

export const CardPlayer = styled.div`
  padding: 10px;
  border-radius: 2px;
  border: 1px solid rgb(47, 52, 82);
  background-color: rgb(30, 32, 51);
  cursor: pointer;

  &:hover {
    border: 1px solid rgb(136, 138, 168);
  }

  @media screen and (max-width: 1200px) {

  }
`;

export const CardAvatar = styled.div`
  height: 240px;

  img {
    height: 100%;
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent 0%, rgb(22, 20, 33) 40%);
  }
`;

export const CardNickName = styled.div`
`;

export const CardNickNameText = styled.a`
  font-size: 20px;
  color: #f0f0f5;
`;

export const StyledPaginateContainer = styled.div`
  margin-top: 20px;

  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    cursor: pointer;
  }

  .pagination a {
    padding: 5px;
    color: #f0f0f5;

  }

  .pagination__link {
    font-weight: bold;
  }

  .pagination__link--active a {
    color: #fff;
    font-weight: bold;
  }

  .pagination__link--disabled a {
    cursor: not-allowed;
  }

`;
